import { Wind, Filter, Droplet } from "lucide-react";

const steps = [
  {
    icon: Wind,
    title: "Capture",
    desc: "Ambient air is drawn across a cooled condensing surface, where humidity naturally collects — even in dry climates.",
  },
  {
    icon: Filter,
    title: "Purify",
    desc: "Multi-stage carbon and mineral filtration removes impurities while restoring a clean, balanced taste profile.",
  },
  {
    icon: Droplet,
    title: "Deliver",
    desc: "Fresh water is stored in a sealed, UV-protected reservoir — ready on demand, always at the source.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f4f1e8] py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-xl text-center">
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#b98a4a]">
            The Process
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-[#10261d] md:text-5xl">
            From humidity to a{" "}
            <span className="italic text-[#8a6a3a]">glass of water</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal relative"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {i < steps.length - 1 && (
                <div className="brass-divider absolute top-8 left-[calc(50%+3rem)] hidden w-[calc(100%-6rem)] md:block" />
              )}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b98a4a]/40 bg-[#0f1c17] text-[#d9b475]">
                  <step.icon className="h-6 w-6" strokeWidth={1.4} />
                </div>
                <span className="mt-6 font-display text-xl text-[#10261d]">
                  0{i + 1}&ensp;{step.title}
                </span>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[#10261d]/65">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
