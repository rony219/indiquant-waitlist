import { motion } from "framer-motion";

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">

      {/* Top Gold Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,194,122,.22) 0%, rgba(232,194,122,.08) 45%, transparent 70%)",
          filter: "blur(180px)",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(70,70,120,.14) 0%, transparent 70%)",
          filter: "blur(160px)",
        }}
      />

      {/* Right Gold Glow */}
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] bottom-0 h-[550px] w-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,164,65,.18) 0%, transparent 70%)",
          filter: "blur(200px)",
        }}
      />
    </div>
  );
}

export default Aurora;