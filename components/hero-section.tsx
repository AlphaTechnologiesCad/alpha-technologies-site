import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#10261d] pt-24"
    >
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -right-40 -top-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(185,138,74,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-52 bottom-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(122,150,131,0.18),transparent_70%)]" />

      {/* ripple motif, right side */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[340px] w-[340px]">
          <span className="ripple inset-0" style={{ animationDelay: "0s" }} />
          <span
            className="ripple inset-0"
            style={{ animationDelay: "1.6s" }}
          />
          <span
            className="ripple inset-0"
            style={{ animationDelay: "3.2s" }}
          />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b475]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <div
            className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#b98a4a]/30 px-4 py-1.5 text-[12px] uppercase tracking-[0.16em] text-[#d9b475]"
            style={{ animationDelay: "0.05s" }}
          >
            <Leaf className="h-3.5 w-3.5" strokeWidth={1.5} />
            Atmospheric Water Technology
          </div>

          <h1
            className="reveal text-balance font-display text-5xl font-light leading-[1.05] text-[#f4f1e8] md:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Water, drawn
            <br />
            from the <span className="italic text-[#d9b475]">air</span> itself.
          </h1>

          <p
            className="reveal mt-7 max-w-md text-[17px] leading-relaxed text-[#ece6d6]/75"
            style={{ animationDelay: "0.3s" }}
          >
            Alpha Technologies builds altitude water systems that convert
            humidity into clean, mineral-balanced drinking water — no wells,
            no plastic, no compromise. Independence, engineered quietly.
          </p>

          <div
            className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#systems"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d9b475] px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] text-[#0a1712] transition-transform hover:-translate-y-0.5"
            >
              Explore Systems
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ece6d6]/25 px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] text-[#ece6d6]/85 transition-colors hover:border-[#d9b475]/60 hover:text-[#d9b475]"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b98a4a]/40 to-transparent" />
    </section>
  );
}
