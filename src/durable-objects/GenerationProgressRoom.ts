/**
 * Satu instance Durable Object per content_generation_jobs.id (lihat
 * idFromName(jobId) di pemanggilnya). Dua jenis request:
 *  - Upgrade: websocket  → klien subscribe progress job ini secara real-time
 *  - POST /broadcast     → dipanggil dari smart-engine.ts tiap ada progress baru,
 *                          diteruskan ke semua klien yang lagi connect
 *
 * Pakai WebSocket API standar (bukan Hibernation API) — DO ini cuma hidup
 * selama proses generate berjalan (biasanya kurang dari beberapa menit),
 * jadi tidak perlu hibernation untuk connection jangka panjang.
 */
export class GenerationProgressRoom {
  private sockets: Set<WebSocket> = new Set();

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.endsWith('/broadcast') && request.method === 'POST') {
      const payload = await request.json().catch(() => null);
      if (payload) this.broadcast(JSON.stringify(payload));
      return new Response('ok');
    }

    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected websocket upgrade', { status: 426 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair) as [WebSocket, WebSocket];

    server.accept();
    this.sockets.add(server);
    server.addEventListener('close', () => this.sockets.delete(server));
    server.addEventListener('error', () => this.sockets.delete(server));

    return new Response(null, { status: 101, webSocket: client });
  }

  private broadcast(message: string) {
    for (const socket of this.sockets) {
      try {
        socket.send(message);
      } catch {
        this.sockets.delete(socket);
      }
    }
  }
}
