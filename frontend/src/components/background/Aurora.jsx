// import { motion } from "framer-motion";

// function Aurora() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">

//       <motion.div
//         animate={{
//           x: [0, 80, -40, 0],
//           y: [0, 30, -20, 0],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(232,194,122,.22) 0%, rgba(232,194,122,.08) 45%, transparent 70%)",
//           filter: "blur(180px)",
//         }}
//       />

      
//       <motion.div
//         animate={{
//           x: [0, 40, -20, 0],
//           y: [0, -40, 20, 0],
//         }}
//         transition={{
//           duration: 28,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-[-180px] top-1/3 h-[500px] w-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(70,70,120,.14) 0%, transparent 70%)",
//           filter: "blur(160px)",
//         }}
//       />

      
//       <motion.div
//         animate={{
//           x: [0, -60, 30, 0],
//           y: [0, 40, -30, 0],
//         }}
//         transition={{
//           duration: 26,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute right-[-180px] bottom-0 h-[550px] w-[550px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(217,164,65,.18) 0%, transparent 70%)",
//           filter: "blur(200px)",
//         }}
//       />
//     </div>
//   );
// }

// export default Aurora;




import { motion } from "framer-motion";

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* =====================================================
          TOP GOLD GLOW
          ===================================================== */}

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
        className="
          absolute
          left-1/2
          top-[-120px]

          h-[300px]
          w-[300px]

          md:top-[-180px]
          md:h-[450px]
          md:w-[450px]

          lg:top-[-250px]
          lg:h-[650px]
          lg:w-[650px]

          -translate-x-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(232,194,122,.16) 0%, rgba(232,194,122,.05) 45%, transparent 70%)",

          filter:
            "blur(70px)",
        }}
      />

      {/* =====================================================
          LEFT GLOW
          ===================================================== */}

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
        className="
          absolute

          left-[-100px]
          top-1/3

          h-[280px]
          w-[280px]

          md:left-[-140px]
          md:h-[400px]
          md:w-[400px]

          lg:left-[-180px]
          lg:h-[500px]
          lg:w-[500px]

          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(70,70,120,.10) 0%, transparent 70%)",

          filter:
            "blur(70px)",
        }}
      />

      {/* =====================================================
          RIGHT GOLD GLOW
          ===================================================== */}

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
        className="
          absolute

          right-[-100px]
          bottom-0

          h-[300px]
          w-[300px]

          md:right-[-140px]
          md:h-[420px]
          md:w-[420px]

          lg:right-[-180px]
          lg:h-[550px]
          lg:w-[550px]

          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(217,164,65,.12) 0%, transparent 70%)",

          filter:
            "blur(80px)",
        }}
      />

    </div>
  );
}

export default Aurora;