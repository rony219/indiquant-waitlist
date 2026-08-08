import { motion } from "framer-motion";

function PlatformPreview() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
            PLATFORM PREVIEW
          </p>

          <h2
            className="mt-4 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Built For Modern Hiring
          </h2>

        </div>

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: .5,
          }}
          className="
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-3xl
          "
        >

          <img
            src="/images/previewpic1.jpg"
            alt="Platform Preview"
            className="w-full rounded-[24px]"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default PlatformPreview;