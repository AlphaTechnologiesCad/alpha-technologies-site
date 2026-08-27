"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Droplet } from "lucide-react";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#systems", label: "Systems" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#testimonials", label: "Stories" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#b98a4a]/15 bg-[#0f1c17]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b98a4a]/50 text-[#d9b475]">
            <Droplet className="h-4 w-4" strokeWidth={1.5} />
          </span>
          <span className="font-display text-lg tracking-wide text-[#f4f1e8]">
            Alpha <span className="italic text-[#d9b475]">Technologies</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.14em] text-[#ece6d6]/70 transition-colors hover:text-[#d9b475]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full border border-[#b98a4a] px-5 py-2 text-[13px] uppercase tracking-[0.14em] text-[#d9b475] transition-colors hover:bg-[#b98a4a] hover:text-[#0f1c17] md:inline-block"
        >
          Request Access
        </a>

        <button
          className="text-[#f4f1e8] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#b98a4a]/15 bg-[#0f1c17] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.14em] text-[#ece6d6]/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-[#b98a4a] px-5 py-2 text-center text-sm uppercase tracking-[0.14em] text-[#d9b475]"
            >
              Request Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
