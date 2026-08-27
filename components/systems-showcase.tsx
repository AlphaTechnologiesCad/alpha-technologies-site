import { Check, ArrowUpRight } from "lucide-react";

const systems = [
  {
    name: "Altitude Home",
    tagline: "For everyday households",
    output: "up to 8L / day",
    price: "from $1,290",
    features: [
      "Whisper-quiet 30dB operation",
      "5-stage mineral filtration",
      "App-connected reservoir alerts",
    ],
    featured: false,
  },
  {
    name: "Altitude Summit",
    tagline: "Our flagship system",
    output: "up to 20L / day",
    price: "from $2,450",
    features: [
      "Dual-condenser high-yield core",
      "7-stage purification + remineralization",
      "Off-grid solar compatible",
      "10-year housing warranty",
    ],
    featured: true,
  },
  {
    name: "Altitude Field",
    tagline: "For cabins & emergency reserves",
    output: "up to 12L / day",
    price: "from $1,890",
    features: [
      "Fully portable, weatherproof shell",
      "Battery + solar hybrid power",
      "Rapid-deploy in under 10 minutes",
    ],
    featured: false,
  },
];

export function SystemsShowcase() {
  return (
    <section id="systems" className="bg-[#10261d] py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-xl text-center">
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#d9b475]">
            The Collection
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-[#f4f1e8] md:text-5xl">
            Systems built for every altitude
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#ece6d6]/65">
            Each unit is engineered and assembled by our manufacturing
            partners, backed by Alpha Technologies' service and support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {systems.map((sys, i) => (
            <div
              key={sys.name}
              className={`reveal flex flex-col rounded-2xl border p-8 ${
                sys.featured
                  ? "border-[#d9b475]/60 bg-[#0f1c17]"
                  : "border-[#ece6d6]/10 bg-[#0f1c17]/50"
              }`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {sys.featured && (
                <span className="mb-5 w-fit rounded-full bg-[#d9b475] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#0a1712]">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl text-[#f4f1e8]">
                {sys.name}
              </h3>
              <p className="mt-1 text-sm text-[#ece6d6]/55">{sys.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl text-[#d9b475]">
                  {sys.price}
                </span>
              </div>
              <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-[#ece6d6]/45">
                {sys.output}
              </p>

              <div className="brass-divider my-7" />

              <ul className="flex-1 space-y-3.5">
                {sys.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14px] text-[#ece6d6]/75"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d9b475]" strokeWidth={1.6} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${
                  sys.featured
                    ? "bg-[#d9b475] text-[#0a1712]"
                    : "border border-[#ece6d6]/25 text-[#ece6d6]/85 hover:border-[#d9b475]/60 hover:text-[#d9b475]"
                }`}
              >
                View Details
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[12px] text-[#ece6d6]/40">
          Alpha Technologies may earn a commission on qualifying purchases
          made through partner links on this page.
        </p>
      </div>
    </section>
  );
}
