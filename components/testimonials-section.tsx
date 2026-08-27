const quotes = [
  {
    text: "We haven't bought a case of bottled water since installing the Summit. It just quietly does its job in the corner of the kitchen.",
    name: "M. Reyes",
    role: "Homeowner, Arizona",
  },
  {
    text: "Off-grid at the cabin used to mean hauling jugs every weekend. Now it means turning a tap.",
    name: "J. Fontaine",
    role: "Cabin owner, British Columbia",
  },
  {
    text: "The build quality feels genuinely premium — this doesn't look or sound like the utility appliance you'd expect.",
    name: "S. Whitfield",
    role: "Early adopter",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#f4f1e8] py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-xl text-center">
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#b98a4a]">
            Early Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-light text-[#10261d] md:text-5xl">
            Water independence, lived in
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="reveal rounded-2xl border border-[#10261d]/10 bg-white/40 p-8"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <blockquote className="font-display text-lg italic leading-relaxed text-[#10261d]/85">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 text-[13px] uppercase tracking-[0.1em] text-[#10261d]/50">
                {q.name} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
