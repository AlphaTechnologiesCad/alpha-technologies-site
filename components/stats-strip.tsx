const stats = [
  { value: "0", label: "Plastic bottles required" },
  { value: "8L+", label: "Pure water per day, per unit" },
  { value: "30dB", label: "Whisper-quiet operation" },
  { value: "100%", label: "Off-grid capable" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-[#0f1c17]/10 bg-[#ece6d6]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal border-l border-[#0f1c17]/15 pl-5"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="font-display text-4xl font-light text-[#10261d] md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] uppercase tracking-[0.1em] text-[#10261d]/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
