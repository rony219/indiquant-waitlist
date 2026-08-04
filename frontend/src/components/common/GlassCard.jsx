// function GlassCard({
//   children,
//   className = "",
// }) {
//   return (
//     <div
//       className={`
//         relative
//         overflow-hidden
//         rounded-[32px]
//         border
//         border-white/[0.08]
//         bg-white/[0.045]
//         backdrop-blur-3xl
//         shadow-[0_8px_40px_rgba(0,0,0,0.35)]
//         ${className}
//       `}
//     >
//       {/* Top Reflection */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-x-0
//           top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-white/60
//           to-transparent
//         "
//       />

//       {/* Inner Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-gradient-to-br
//           from-white/[0.05]
//           via-transparent
//           to-transparent
//         "
//       />

//       {children}
//     </div>
//   );
// }

// export default GlassCard;