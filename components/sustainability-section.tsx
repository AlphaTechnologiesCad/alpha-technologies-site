import { Recycle, Sun, Mountain } from "lucide-react";

const points = [
  {
    icon: Sun,
    title: "Solar-ready by design",
    desc: "Every system pairs with renewable power, cutting reliance on grid electricity and fossil-fuel-trucked water.",
  },
  {
    icon: Recycle,
    title: "Zero single-use plastic",
    desc: "One Altitude system replaces thousands of bottles a year — no shipping, no landfill, no microplastics.",
  },
  {
    icon: Mountain,
    title: "Sourced from the sky, not the earth",
    desc: "No aquifer depletion, no drilling, no disruption to local watersheds — water independence without extraction.",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-[#ece6d6] py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(122,150,131,0.25),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#b98a4a]">
              Our Commitment
            </span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-[#10261d] md:text-5xl">
              Engineered in step
              <br />
              with the <span className="italic text-[#8a6a3a]">planet</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#10261d]/65">
              Alpha Technologies exists because clean water shouldn't cost the
              earth. Every material, partner, and process is chosen for its
              lowest environmental footprint — never as an afterthought.
            </p>
          </div>

          <div className="space-y-8">
            {points.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex gap-5"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#10261d]/15 bg-[#f4f1e8] text-[#10261d]">
                  <p.icon className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#10261d]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#10261d]/60">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
