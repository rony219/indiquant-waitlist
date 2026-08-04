import { motion } from "framer-motion";

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-8"
    >
      <div className="rounded-full border border-yellow-500/20 bg-white/5 px-5 py-2 backdrop-blur-md">

        <span className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-300">
          ✦ Launching Soon
        </span>

      </div>
    </motion.div>
  );
}

export default HeroBadge;

// import { motion } from "framer-motion";
// import GlassCard from "../common/GlassCard";

// function HeroBadge() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: .8 }}
//       className="mb-10"
//     >
//       <GlassCard className="rounded-full px-6 py-3">

//         <span
//           className="
//             text-xs
//             font-medium
//             uppercase
//             tracking-[0.35em]
//             text-[#E8C27A]
//           "
//         >
//           ✦ LAUNCHING SOON
//         </span>

//       </GlassCard>
//     </motion.div>
//   );
// }

// export default HeroBadge;

// import Badge from "../ui/Badge";

// function HeroBadge() {
//   return (
//     <div className="mb-10">
//       <Badge>
//         ✦ Launching Soon
//       </Badge>
//     </div>
//   );
// }

// export default HeroBadge;