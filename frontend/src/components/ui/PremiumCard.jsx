import { motion } from "framer-motion";

function PremiumCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl"
    >
        <div className="absolute inset-0 rounded-[30px] border border-white/5 group-hover:border-[#E8C27A]/30 transition-colors duration-500" />

      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(232,194,122,.18), transparent 60%)",
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          background: "rgba(232,194,122,.12)",
          border: "1px solid rgba(232,194,122,.25)",
        }}
      >
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

export default PremiumCard;


// import { motion } from "framer-motion";

// function PremiumCard({
//   icon,
//   title,
//   description,
//   large = false,
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//         scale: 1.015,
//       }}
//       transition={{ duration: 0.35 }}
//       className={`group relative overflow-hidden rounded-[32px]
//       border border-white/10
//       bg-white/5
//       backdrop-blur-2xl
//       ${
//         large ? "p-10 min-h-[260px]" : "p-8 min-h-[220px]"
//       }`}
//     >
//       {/* Glow */}
//       <div
//         className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
//         style={{
//           background: "rgba(232,194,122,.18)",
//         }}
//       />

//       {/* Border */}
//       <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-[#E8C27A]/30 transition-all duration-500" />

//       {/* Icon */}
//       <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E8C27A]/20 bg-[#E8C27A]/10">
//         {icon}
//       </div>

//       <h3 className="relative z-10 mb-4 text-3xl font-semibold text-white">
//         {title}
//       </h3>

//       <p className="relative z-10 max-w-xl leading-8 text-gray-400">
//         {description}
//       </p>
//     </motion.div>
//   );
// }

// export default PremiumCard;