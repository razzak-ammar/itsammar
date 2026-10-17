import type { ReactNode } from "react";

export const supportEmail = "razzakammar.edu@gmail.com";

export function SupportLink() {
  return <a href={`mailto:${supportEmail}`}>{supportEmail}</a>;
}

export function AppDocument({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article>
      <header className="border-b border-white/10 pb-10 sm:pb-12">
        <p className="mb-5 font-mono text-xs tracking-[0.18em] text-[#70b8b0] uppercase">
          {label}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      </header>
      <div className="space-y-9 pt-10 text-base leading-8 text-gray-300 [&_a]:text-[#8dcdc5] [&_a]:underline [&_a]:decoration-[#70b8b0]/40 [&_a]:underline-offset-4 [&_a:hover]:text-white [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#8dcdc5] [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-white [&_p+p]:mt-4">
        {children}
      </div>
    </article>
  );
}
