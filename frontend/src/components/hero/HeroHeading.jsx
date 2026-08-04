// import { motion } from "framer-motion";

// function HeroHeading() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//       className="mb-8"
//     >
  
//       <h1
//     className="text-6xl text-white md:text-8xl"
//     style={{
//         fontFamily: "var(--font-heading)",
//         fontWeight: 600,
//     }}
// >
//     The Future
//     <br />

//     <span className="italic text-[#E8C27A]">
//         Illuminated.
//     </span>
// </h1>
//     </motion.div>
//   );
// }

// export default HeroHeading;


import { motion } from "framer-motion";

function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-6 md:mb-8"
    >
      <h1
        className="
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        xl:text-[7rem]
        leading-[1.05]
        tracking-tight
        text-white
        "
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 600,
        }}
      >
        The Future
        <br />

        <span className="italic text-[#E8C27A]">
          Illuminated.
        </span>
      </h1>
    </motion.div>
  );
}

export default HeroHeading;

// import { motion } from "framer-motion";

// function HeroHeading() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="mb-8"
//     >
//       <h1
//         className="leading-[0.9]"
//         style={{
//           fontFamily: "var(--font-heading)",
//           fontSize: "clamp(4rem,10vw,7rem)",
//           fontWeight: 600,
//         }}
//       >
//         <span className="block text-white">
//           The Future
//         </span>

//         <span className="block italic text-[var(--accent)]">
//           Illuminated.
//         </span>
//       </h1>
//     </motion.div>
//   );
// }

// export default HeroHeading;