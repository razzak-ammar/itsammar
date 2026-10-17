import type { Metadata } from "next";
import Link from "next/link";
import { SupportLink } from "./_components";

export const metadata: Metadata = {
  title: {
    default: "SD Rclone | It's Ammar.",
    template: "%s | SD Rclone",
  },
  description:
    "SD Rclone is Ammar Razzak's personal household backup setup using rclone and Google Drive.",
};

export default function SdRcloneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 font-[family-name:var(--font-geist-sans)] text-white selection:bg-[#70b8b0]/30">
      <a href="#app-content" className="sr-only z-50 bg-gray-950 p-4 focus:not-sr-only focus:absolute">
        Skip to content
      </a>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5 sm:px-10">
          <Link href="/" className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dcdc5]">
            it&apos;s<span className="text-[#70b8b0]">ammar</span>
          </Link>
          <nav aria-label="SD Rclone" className="flex flex-wrap gap-x-6 text-sm text-gray-300 [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center [&_a]:transition-colors [&_a:hover]:text-[#8dcdc5] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#8dcdc5]">
            <Link href="/apps/sd-rclone">Overview</Link>
            <Link href="/apps/sd-rclone/privacy">Privacy</Link>
            <Link href="/apps/sd-rclone/terms">Terms</Link>
          </nav>
        </div>
      </header>
      <main id="app-content" className="mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-20">
        {children}
      </main>
      <footer className="mx-auto max-w-3xl border-t border-white/10 px-6 py-8 text-sm leading-7 text-gray-400 sm:px-10 [&_a]:break-words [&_a]:text-[#8dcdc5] [&_a:hover]:underline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#8dcdc5]">
        <p>SD Rclone · Operated by Ammar Razzak</p>
        <p><SupportLink /></p>
      </footer>
    </div>
  );
}
