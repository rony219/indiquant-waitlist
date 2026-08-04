// import { motion } from "framer-motion";

// function JourneyStep({
//   icon,
//   title,
//   description,
//   reverse = false,
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{ duration: 0.7 }}
//       className={`relative flex items-center gap-12 ${
//         reverse ? "flex-row-reverse" : ""
//       }`}
//     >
//       {/* Content */}

//       <div className="flex-1">
//         <div
//           className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:border-[#E8C27A]/30"
//         >
//           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8C27A]/10">
//             {icon}
//           </div>

//           <h3 className="mb-3 text-3xl font-semibold text-white">
//             {title}
//           </h3>

//           <p className="leading-8 text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       {/* Timeline Node */}

//       <div className="relative flex flex-col items-center">

//         <motion.div
//           animate={{
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 3,
//           }}
//           className="h-7 w-7 rounded-full bg-[#E8C27A] shadow-[0_0_40px_rgba(232,194,122,.7)]"
//         />

//       </div>

//       <div className="flex-1" />
//     </motion.div>
//   );
// }

// export default JourneyStep;


import { motion } from "framer-motion";

function JourneyStep({
  icon,
  title,
  description,
  reverse = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`
      relative
      flex
      flex-col
      items-center
      gap-8

      md:flex-row
      ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Card */}

      <div className="w-full flex-1">

        <div
          className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          p-6
          md:p-8
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:border-[#E8C27A]/40
          hover:-translate-y-1
          "
        >
          {/* Glow */}

          <div
            className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(232,194,122,.18), transparent 60%)",
            }}
          />

          {/* Icon */}

          <div
            className="
            relative
            z-10
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-[#E8C27A]/10
            border
            border-[#E8C27A]/20
            "
          >
            {icon}
          </div>

          <h3
            className="
            relative
            z-10
            mb-3
            text-2xl
            md:text-3xl
            font-semibold
            "
          >
            {title}
          </h3>

          <p
            className="
            relative
            z-10
            leading-7
            text-gray-400
            "
          >
            {description}
          </p>

        </div>

      </div>

      {/* Timeline Node */}

      <div
        className="
        relative
        flex
        items-center
        justify-center
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
          h-5
          w-5
          rounded-full
          bg-[#E8C27A]
          shadow-[0_0_35px_rgba(232,194,122,.8)]
          "
        />

        <div
          className="
          absolute
          h-10
          w-10
          rounded-full
          border
          border-[#E8C27A]/30
          "
        />
      </div>

      {/* Empty Side */}

      <div className="hidden flex-1 md:block" />

    </motion.div>
  );
}

export default JourneyStep;