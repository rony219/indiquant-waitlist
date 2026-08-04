import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="mt-20"
    >
      <HiOutlineArrowDown
        className="text-3xl text-gray-500"
      />
    </motion.div>
  );
}

export default ScrollIndicator;


// import { motion } from "framer-motion";
// import { HiOutlineArrowDown } from "react-icons/hi";

// function ScrollIndicator() {
//   return (
//     <motion.div
//       animate={{
//         y: [0, 10, 0],
//       }}
//       transition={{
//         repeat: Infinity,
//         duration: 2,
//       }}
//       className="mt-20"
//     >
//       <HiOutlineArrowDown
//         className="text-3xl text-gray-500"
//       />
//     </motion.div>
//   );
// }

// export default ScrollIndicator;