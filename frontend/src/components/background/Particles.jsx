// import { motion } from "framer-motion";

// const stars = Array.from({ length: 70 }, (_, i) => ({
//   id: i,

//   left: `${Math.random() * 100}%`,
//   top: `${Math.random() * 100}%`,

//   size: Math.random() * 2 + 1, 

//   duration: Math.random() * 8 + 8,

//   delay: Math.random() * 5,

//   gold: Math.random() > 0.85,
// }));

// function Particles() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           initial={{
//             opacity: 0.15,
//             scale: 0.8,
//           }}
//           animate={{
//             opacity: [0.15, 0.8, 0.2],
//             scale: [0.8, 1.2, 0.8],
//             y: [0, -18, 0],
//           }}
//           transition={{
//             duration: star.duration,
//             repeat: Infinity,
//             delay: star.delay,
//             ease: "easeInOut",
//           }}
//           className="absolute rounded-full"
//           style={{
//             left: star.left,
//             top: star.top,
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             background: star.gold ? "#E8C27A" : "#ffffff",
//             boxShadow: star.gold
//               ? "0 0 12px rgba(232,194,122,.8)"
//               : "0 0 8px rgba(255,255,255,.45)",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default Particles;









import { motion } from "framer-motion";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,

  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,

  size: Math.random() * 2 + 1,

  duration: Math.random() * 8 + 8,

  delay: Math.random() * 5,

  gold: Math.random() > 0.85,
}));

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0">

      {stars.map((star) => (
        <motion.div
          key={star.id}

          initial={{
            opacity: 0.15,
            scale: 0.8,
          }}

          animate={{
            opacity: [0.15, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
            y: [0, -18, 0],
          }}

          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}

          className={`
            absolute
            rounded-full

            ${
              star.id >= 18
                ? "hidden sm:block"
                : ""
            }

            ${
              star.id >= 40
                ? "sm:hidden md:block"
                : ""
            }
          `}

          style={{
            left: star.left,
            top: star.top,

            width: `${star.size}px`,
            height: `${star.size}px`,

            background: star.gold
              ? "#E8C27A"
              : "#ffffff",

            boxShadow: star.gold
              ? "0 0 10px rgba(232,194,122,.6)"
              : "0 0 6px rgba(255,255,255,.3)",

            willChange: "transform, opacity",
          }}
        />
      ))}

    </div>
  );
}

export default Particles;