"use client";

export default function ContactSection() {
  return (
    <section className="mt-24 mb-32 px-6">

      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Badge */}
        <span className="bg-white text-black text-xs px-3 py-1 rounded-full">
          Contact
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let’s build something meaningful
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
          I’m always open to interesting ideas, real problems, and impactful work.  
          If you think we can create something valuable together, let’s talk.
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => window.location.href = "mailto:aakashsaini948585@gmail.com"}
          className="mt-4 bg-white text-black text-sm font-semibold cursor-pointer px-6 py-2 rounded-md hover:opacity-80 transition"
        >
          Start a conversation
        </button>

      </div>
    </section>
  );
}