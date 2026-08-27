import { Droplet } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0f1c17] py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b98a4a]/50 text-[#d9b475]">
              <Droplet className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="font-display text-lg tracking-wide text-[#f4f1e8]">
              Alpha <span className="italic text-[#d9b475]">Technologies</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] uppercase tracking-[0.1em] text-[#ece6d6]/55">
            <a href="#how-it-works" className="hover:text-[#d9b475]">
              How It Works
            </a>
            <a href="#systems" className="hover:text-[#d9b475]">
              Systems
            </a>
            <a href="#sustainability" className="hover:text-[#d9b475]">
              Sustainability
            </a>
            <a href="#" className="hover:text-[#d9b475]">
              Affiliate Disclosure
            </a>
          </nav>
        </div>

        <div className="brass-divider my-8" />

        <div className="flex flex-col gap-3 text-[12px] text-[#ece6d6]/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Alpha Technologies. Water independence, engineered.</p>
          <p>
            As an affiliate partner, Alpha Technologies may earn a commission
            from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
