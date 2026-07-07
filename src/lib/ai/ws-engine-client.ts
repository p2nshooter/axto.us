/**
 * Client WebSocket generik buat smart engine terhubung KELUAR ke inference
 * engine eksternal (mis. server GPU kamu sendiri di axto.io) — beda dari
 * GenerationProgressRoom.ts yang arahnya browser↔axto.us.
 *
 * PROTOKOL DI BAWAH INI ASUMSI/PROPOSAL, bukan yang sudah pasti dipakai
 * axto.io — request/response dikorelasikan pakai requestId karena WebSocket
 * gak otomatis request/response seperti REST. Kalau axto.io punya format
 * pesan sendiri, sesuaikan handleMessage()/send() di bawah, bukan bikin dari
 * nol lagi.
 *
 * Dipakai sekali per job generate (connect → send → tunggu result → close),
 * BUKAN koneksi permanen yang hidup lintas request — Workers gak cocok buat
 * itu tanpa Durable Object, dan untuk satu job, ini sudah cukup.
 */

type PendingRequest = {
  resolve: (data: unknown) => void;
  reject: (err: Error) => void;
  onProgress?: (payload: unknown) => void;
  timer: ReturnType<typeof setTimeout>;
};

export class SmartEngineWsClient {
  private ws: WebSocket | null = null;
  private pending = new Map<string, PendingRequest>();
  private connected = false;

  constructor(
    private readonly url: string,
    private readonly authToken: string
  ) {}

  async connect(timeoutMs = 10_000): Promise<void> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Timeout konek ke smart engine eksternal.')), timeoutMs);
      try {
        const wsUrl = `${this.url}${this.url.includes('?') ? '&' : '?'}token=${encodeURIComponent(this.authToken)}`;
        this.ws = new WebSocket(wsUrl);
      } catch (err) {
        clearTimeout(timer);
        reject(err instanceof Error ? err : new Error(String(err)));
        return;
      }

      this.ws.addEventListener('open', () => {
        clearTimeout(timer);
        this.connected = true;
        resolve();
      });
      this.ws.addEventListener('error', () => {
        clearTimeout(timer);
        reject(new Error('WebSocket ke smart engine eksternal error saat connect.'));
      });
      this.ws.addEventListener('message', (event) => this.handleMessage(event));
      this.ws.addEventListener('close', () => this.handleClose());
    });
  }

  private handleMessage(event: MessageEvent) {
    let msg: any;
    try {
      msg = JSON.parse(typeof event.data === 'string' ? event.data : '');
    } catch {
      return; // abaikan pesan yang bukan JSON valid, jangan crash koneksi
    }
    const pending = this.pending.get(msg?.requestId);
    if (!pending) return;

    if (msg.type === 'progress') {
      pending.onProgress?.(msg.payload);
    } else if (msg.type === 'result') {
      clearTimeout(pending.timer);
      this.pending.delete(msg.requestId);
      pending.resolve(msg.payload);
    } else if (msg.type === 'error') {
      clearTimeout(pending.timer);
      this.pending.delete(msg.requestId);
      pending.reject(new Error(msg.message ?? 'Smart engine eksternal mengembalikan error.'));
    }
  }

  private handleClose() {
    this.connected = false;
    // Koneksi putus di tengah jalan — gagalkan semua request yang masih nunggu
    // daripada nge-hang selamanya.
    for (const [, pending] of this.pending) {
      clearTimeout(pending.timer);
      pending.reject(new Error('Koneksi ke smart engine eksternal terputus sebelum selesai.'));
    }
    this.pending.clear();
  }

  /**
   * Kirim satu perintah generate, tunggu hasilnya. onProgress dipanggil tiap
   * ada pesan {type:'progress'} dengan requestId yang sama sebelum result final.
   */
  async send(
    type: 'generate_text' | 'generate_audio' | 'generate_video',
    payload: Record<string, unknown>,
    opts?: { onProgress?: (payload: unknown) => void; timeoutMs?: number }
  ): Promise<unknown> {
    if (!this.ws || !this.connected) {
      throw new Error('Belum konek — panggil connect() dulu.');
    }
    const requestId = crypto.randomUUID();
    const timeoutMs = opts?.timeoutMs ?? 180_000;

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(requestId);
        reject(new Error(`Timeout menunggu hasil dari smart engine eksternal (${timeoutMs}ms).`));
      }, timeoutMs);

      this.pending.set(requestId, { resolve, reject, onProgress: opts?.onProgress, timer });
      this.ws!.send(JSON.stringify({ type, requestId, payload }));
    });
  }

  close() {
    this.ws?.close();
    this.connected = false;
  }
}
