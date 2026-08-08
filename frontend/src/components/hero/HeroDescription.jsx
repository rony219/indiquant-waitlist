// import { motion } from "framer-motion";

// function HeroDescription() {
//   return (
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//       className="mb-10 max-w-2xl text-lg leading-8 text-gray-400"
//     >
//       Discover a smarter way to identify exceptional talent through
//       AI-powered assessments, real-world challenges, and an exclusive
//       recruitment experience built for the next generation.
//     </motion.p>
//   );
// }

// export default HeroDescription;


import { motion } from "framer-motion";

function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="
      mb-10
      max-w-xl
      sm:max-w-2xl
      text-base
      sm:text-lg
      md:text-xl
      leading-7
      md:leading-8
      text-gray-400
      px-2
      "
    >
Behind every move is a signal. Behind every signal is a possibility. We bring thousands of quantitative minds together to uncover what others miss.
    </motion.p>
  );
}

export default HeroDescription;


// function HeroDescription() {
//   return (
//     <p className="mb-12 max-w-3xl text-lg leading-8 text-[var(--secondary)]">
//       Discover a smarter way to identify exceptional talent through
//       AI-powered assessments, real-world challenges, and an exclusive
//       recruitment experience built for the next generation.
//     </p>
//   );
// }

// export default HeroDescription;