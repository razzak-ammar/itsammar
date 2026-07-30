import { cookies } from "next/headers";
import Link from "next/link";
import {
  hasValidPresentationSession,
  presentationCookie,
  presentationPasswordIsConfigured,
} from "../../lib/presentation-auth";

type PresentationPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function PresentationPage({
  searchParams,
}: PresentationPageProps) {
  const [{ error }, cookieStore] = await Promise.all([searchParams, cookies()]);
  const isAuthenticated = hasValidPresentationSession(
    cookieStore.get(presentationCookie.name)?.value,
  );
  const isConfigured = presentationPasswordIsConfigured();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white sm:flex sm:items-center sm:justify-center">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-10">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">
          Private file
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Presentation</h1>
        <p className="mt-3 leading-7 text-slate-300">
          Download the final HRV presentation when you&apos;re ready to present.
        </p>

        {!isConfigured ? (
          <p className="mt-8 rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100">
            This page is not configured yet. Add the presentation environment
            variables before deploying.
          </p>
        ) : isAuthenticated ? (
          <a
            className="mt-8 flex w-full items-center justify-center rounded-xl bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            href="/presentation/download"
          >
            Download PowerPoint
          </a>
        ) : (
          <form action="/presentation/auth" className="mt-8 space-y-4" method="post">
            <label className="block text-sm font-medium text-slate-200" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
              id="password"
              name="password"
              required
              type="password"
            />
            {error === "invalid" && (
              <p className="text-sm text-rose-300">That password didn&apos;t match.</p>
            )}
            <button
              className="w-full rounded-xl bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              type="submit"
            >
              Unlock download
            </button>
          </form>
        )}

        <Link className="mt-7 inline-block text-sm text-slate-400 hover:text-white" href="/">
          ← Back to site
        </Link>
      </section>
    </main>
  );
}
