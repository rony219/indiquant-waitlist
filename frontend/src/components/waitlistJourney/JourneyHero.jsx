import { motion } from "framer-motion";

function JourneyHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:h-[650px] lg:w-[650px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex rounded-full border border-[#E8C27A]/20 bg-[#E8C27A]/5 px-6 py-2 text-xs tracking-[0.35em] text-[#E8C27A]"
        >
          WAITLIST JOURNEY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          className="mt-8 text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Skip The Line.
          <br />

          <span className="italic text-[#E8C27A]">
            Earn Your Place.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
        >
          Every referral moves you closer to launch.
          The more people you invite, the earlier
          you'll receive exclusive access.
        </motion.p>

      </div>

    </section>
  );
}

export default JourneyHero;