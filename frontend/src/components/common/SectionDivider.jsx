import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-20 overflow-hidden">

      {/* Left Line */}

      <div
        className="
        h-px
        flex-1
        bg-gradient-to-r
        from-transparent
        via-[#E8C27A]/40
        to-transparent
        "
      />

      {/* Center */}

      <div className="relative mx-10">

        {/* Outer Glow */}

        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [.4, 1, .4],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
          absolute
          inset-0
          rounded-full
          bg-[#E8C27A]
          blur-xl
          "
        />

        {/* Star */}

        <motion.div
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="
          relative
          text-[#E8C27A]
          text-xl
          "
        >
          ✦
        </motion.div>
      </div>

      {/* Right */}

      <div
        className="
        h-px
        flex-1
        bg-gradient-to-r
        from-transparent
        via-[#E8C27A]/40
        to-transparent
        "
      />

      {/* Moving Particle */}

      <motion.div
        animate={{
          x: [-700, 700],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="
        absolute
        h-1.5
        w-1.5
        rounded-full
        bg-[#E8C27A]
        shadow-[0_0_20px_rgba(232,194,122,.8)]
        "
      />
    </div>
  );
}

export default SectionDivider;