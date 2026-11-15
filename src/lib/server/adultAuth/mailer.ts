// Sending sign-in emails (ADR 0003 addendum): a Mailer interface, a Resend implementation, a dev mailer that only logs in development,
// and a mailer that refuses to send in production without the key. Swapping the provider later is one file.

export interface Mail {
  to: string;
  subject: string;
  text: string;
  html?: string;
  /** Extra message headers, for example List-Unsubscribe. */
  headers?: Record<string, string>;
}

export interface Mailer {
  send(mail: Mail): Promise<void>;
}

export class MailNotConfiguredError extends Error {
  constructor() {
    super('email sending is not configured');
    this.name = 'MailNotConfiguredError';
  }
}

export interface MailEnv {
  RESEND_API_KEY?: string;
  /** The verified sender, for example "PrepPals <login@scholar.hibbins.org>". Required with the key. */
  MAIL_FROM?: string;
}

type Fetch = typeof fetch;

/** Resend over HTTPS. The key goes in the Authorization header only: it is never logged, and errors carry the status, not the response. */
export class ResendMailer implements Mailer {
  constructor(private readonly apiKey: string, private readonly from: string, private readonly fetchImpl: Fetch = fetch) {}

  async send(mail: Mail): Promise<void> {
    const res = await this.fetchImpl('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: this.from, to: [mail.to], subject: mail.subject, text: mail.text, ...(mail.html ? { html: mail.html } : {}), ...(mail.headers ? { headers: mail.headers } : {}) }),
    });
    if (!res.ok) throw new Error(`resend responded ${res.status}`);
  }
}

/** Development only: prints the email, link included, to the terminal. Never constructed in production. */
export class DevMailer implements Mailer {
  constructor(private readonly log: (line: string) => void = (l) => console.log(l)) {}
  async send(mail: Mail): Promise<void> {
    this.log(`[dev mailer] to ${mail.to}: ${mail.subject}\n${mail.text}`);
  }
}

/** Production without a key: refuses to send, and says so. */
export class RefusingMailer implements Mailer {
  async send(): Promise<void> {
    throw new MailNotConfiguredError();
  }
}

/**
 * The mailer for this environment. With a key (and a sender) it is Resend. Without one it is the dev mailer in development and the
 * refusing mailer everywhere else, so a missing secret in production can never fall back to printing links.
 */
export function mailerFromEnv(env: MailEnv | null | undefined, isDevelopment: boolean, fetchImpl?: Fetch): Mailer {
  const key = env?.RESEND_API_KEY?.trim();
  const from = env?.MAIL_FROM?.trim();
  if (key && from) return new ResendMailer(key, from, fetchImpl);
  if (isDevelopment && !key) return new DevMailer();
  return new RefusingMailer();
}

/** True when `mailer` can really send (production without a key gets a RefusingMailer). */
export const canSend = (mailer: Mailer): boolean => !(mailer instanceof RefusingMailer);

export const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';
