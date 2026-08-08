import { ChevronUp } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-28">

      {/* Top Glow Line */}

      <div className="mx-auto mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#E8C27A]/70 to-transparent" />

      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Logo */}

        <h2
          className="text-4xl tracking-[0.35em] text-white"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          INDIQUANT
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
One signal can change a trade. The right signals can change everything.
        </p>

        {/* Navigation */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">

          {/* <a
            href="/how-it-works"
            className="text-gray-400 transition hover:text-[#E8C27A]"
          >
            How It Works
          </a> */}
{/* 
          <a
            href="/waitlist-journey"
            className="text-gray-400 transition hover:text-[#E8C27A]"
          >
            Waitlist Journey
          </a>

          <a
            href="/sneak-peek"
            className="text-gray-400 transition hover:text-[#E8C27A]"
          >
            Sneak Peek
          </a> */}

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 md:flex-row">

          {/* <p>
            © 2026 IndiQuant. All rights reserved.
          </p> */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl transition hover:border-[#E8C27A]/40 hover:bg-[#E8C27A]/10"
          >
            Back to Top

            <ChevronUp
              size={18}
              className="transition group-hover:-translate-y-1"
            />

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;