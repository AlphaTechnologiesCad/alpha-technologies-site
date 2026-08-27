"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-[#0a1712] py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(185,138,74,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <span className="reveal text-[12px] uppercase tracking-[0.18em] text-[#d9b475]">
          Join the Waitlist
        </span>
        <h2
          className="reveal mt-4 font-display text-4xl font-light text-[#f4f1e8] md:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Be first to bring altitude
          <br />
          water home
        </h2>
        <p
          className="reveal mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[#ece6d6]/65"
          style={{ animationDelay: "0.2s" }}
        >
          Reserve early access and receive partner pricing on the first
          Altitude Technologies release.
        </p>

        {submitted ? (
          <div
            className="reveal mt-9 flex items-center justify-center gap-2 text-[#d9b475]"
            style={{ animationDelay: "0.3s" }}
          >
            <CheckCircle className="h-5 w-5" strokeWidth={1.6} />
            <span className="text-sm">
              You're on the list — check your inbox shortly.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-full border border-[#ece6d6]/20 bg-transparent px-6 py-3.5 text-sm text-[#f4f1e8] placeholder:text-[#ece6d6]/35 focus:border-[#d9b475]/60 focus:outline-none sm:w-72"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d9b475] px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] text-[#0a1712] transition-transform hover:-translate-y-0.5"
            >
              Request Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
