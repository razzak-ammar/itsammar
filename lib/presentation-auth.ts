import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "presentation_access";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 12;

function sessionSecret() {
  return process.env.PRESENTATION_AUTH_SECRET ?? process.env.PRESENTATION_PASSWORD;
}

function signature(value: string) {
  const secret = sessionSecret();
  if (!secret) return null;

  return createHmac("sha256", secret).update(value).digest("base64url");
}

function safelyMatches(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  return (
    valueBuffer.length === expectedBuffer.length &&
    timingSafeEqual(valueBuffer, expectedBuffer)
  );
}

export function presentationPasswordIsConfigured() {
  return Boolean(process.env.PRESENTATION_PASSWORD && sessionSecret());
}

export function passwordIsValid(password: string) {
  const expected = process.env.PRESENTATION_PASSWORD;
  return Boolean(expected && safelyMatches(password, expected));
}

export function createPresentationSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS;
  const signatureValue = signature(String(expiresAt));

  return signatureValue ? `${expiresAt}.${signatureValue}` : null;
}

export function hasValidPresentationSession(session: string | undefined) {
  if (!session) return false;

  const [expiresAt, suppliedSignature] = session.split(".");
  const expiration = Number(expiresAt);
  const expectedSignature = signature(expiresAt);

  return Boolean(
    Number.isSafeInteger(expiration) &&
      expiration > Math.floor(Date.now() / 1000) &&
      expectedSignature &&
      safelyMatches(suppliedSignature ?? "", expectedSignature),
  );
}

export const presentationCookie = {
  name: COOKIE_NAME,
  maxAge: SESSION_LIFETIME_SECONDS,
};
