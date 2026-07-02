import { getEnv } from '@/lib/db/client';

async function sendEmail(params: { to: string; subject: string; html: string }): Promise<void> {
  const env = await getEnv();
  if (!env.RESEND_API_KEY) {
    // No email provider configured yet — log so the flow is still usable
    // (e.g. in the admin's server logs) until RESEND_API_KEY is added.
    console.warn(`[email:not-configured] to=${params.to} subject="${params.subject}"\n${params.html}`);
    return;
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL || 'AXTO <noreply@axto.us>',
      to: params.to,
      subject: params.subject,
      html: params.html
    })
  });

  if (!res.ok) {
    console.error('[email:send-failed]', res.status, await res.text());
  }
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  await sendEmail({
    to,
    subject: 'Reset Password AXTO',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2 style="color:#7f3dfb">AXTO</h2>
        <p>Kami menerima permintaan untuk mengatur ulang password akun Anda.</p>
        <p><a href="${resetUrl}" style="background:#7f3dfb;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;display:inline-block">Reset Password</a></p>
        <p>Link ini berlaku selama 1 jam. Jika Anda tidak meminta ini, abaikan email ini.</p>
      </div>
    `
  });
}

export async function sendWelcomeEmail(to: string, name: string) {
  await sendEmail({
    to,
    subject: 'Selamat datang di AXTO!',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2 style="color:#7f3dfb">Halo, ${name}! 👋</h2>
        <p>Terima kasih sudah bergabung dengan AXTO — Adventures eXplore Together.</p>
        <p>Ayo mulai petualangan membaca pertamamu sekarang.</p>
      </div>
    `
  });
}
