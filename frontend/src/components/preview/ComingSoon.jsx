// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   Rocket,
//   Sparkles,
//   Trophy,
// } from "lucide-react";

// const phases = [
//   {
//     icon: CheckCircle2,
//     title: "Private Beta",
//     status: "Live Now",
//     active: true,
//   },
//   {
//     icon: Sparkles,
//     title: "Early Access",
//     status: "Coming Soon",
//   },
//   {
//     icon: Trophy,
//     title: "Recruitment Tournaments",
//     status: "Coming Soon",
//   },
//   {
//     icon: Rocket,
//     title: "Public Launch",
//     status: "Final Phase",
//   },
// ];

// function ComingSoon() {
//   return (
//     <section className="relative overflow-hidden px-6 py-36">

//       {/* Background Glow */}

//       <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C27A]/5 blur-[180px]" />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         <div className="text-center">

//           <p className="text-sm tracking-[0.4em] text-[#E8C27A]">
//             ROADMAP
//           </p>

//           <h2
//             className="mt-5 text-4xl md:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)",
//             }}
//           >
//             What's Coming Next
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
//             Every milestone brings you closer to the future of
//             AI-powered recruitment.
//           </p>

//         </div>

//         {/* Timeline */}

//         <div className="relative mt-28">

//           {/* Gold Line */}

//           <div className="absolute top-10 left-0 right-0 hidden h-[2px] bg-gradient-to-r from-transparent via-[#E8C27A]/70 to-transparent lg:block" />

//           <div className="grid gap-8 lg:grid-cols-4">

//             {phases.map((phase, index) => {
//               const Icon = phase.icon;

//               return (
//                 <motion.div
//                   key={phase.title}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: index * 0.15,
//                   }}
//                   whileHover={{
//                     y: -10,
//                   }}
//                   className="relative"
//                 >

//                   {/* Timeline Dot */}

//                   <div
//                     className={`absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full lg:block ${
//                       phase.active
//                         ? "bg-[#E8C27A] shadow-[0_0_35px_rgba(232,194,122,.8)]"
//                         : "bg-white/20"
//                     }`}
//                   />

//                   <div
//                     className="
//                     rounded-[30px]
//                     border
//                     border-white/10
//                     bg-white/5
//                     p-8
//                     backdrop-blur-3xl
//                     transition-all
//                     duration-500
//                     hover:border-[#E8C27A]/40
//                     hover:bg-white/10
//                     "
//                   >

//                     <div
//                       className={`
//                         flex h-16 w-16 items-center justify-center rounded-2xl
//                         ${
//                           phase.active
//                             ? "bg-[#E8C27A] text-black"
//                             : "bg-[#E8C27A]/10 text-[#E8C27A]"
//                         }
//                       `}
//                     >
//                       <Icon size={28} />
//                     </div>

//                     <h3 className="mt-8 text-2xl font-semibold text-white">
//                       {phase.title}
//                     </h3>

//                     <p className="mt-3 text-gray-400">
//                       {phase.status}
//                     </p>

//                     {phase.active && (
//                       <motion.div
//                         animate={{
//                           opacity: [0.5, 1, 0.5],
//                         }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 2,
//                         }}
//                         className="mt-8 inline-flex rounded-full border border-[#E8C27A]/30 bg-[#E8C27A]/10 px-4 py-2 text-sm text-[#E8C27A]"
//                       >
//                         ● Currently Active
//                       </motion.div>
//                     )}

//                   </div>

//                 </motion.div>
//               );
//             })}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default ComingSoon;


import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Trophy,
  Rocket,
} from "lucide-react";

const phases = [
  {
    icon: CheckCircle2,
    title: "Private Beta",
    description:
      "Building the foundation with a limited group of early adopters.",
    status: "Currently Active",
    active: true,
  },
  {
    icon: Sparkles,
    title: "Early Access",
    description:
      "Waitlist members receive exclusive invitations before public release.",
  },
  {
    icon: Trophy,
    title: "Recruitment Tournaments",
    description:
      "Compete in real-world challenges and get discovered by companies.",
  },
  {
    icon: Rocket,
    title: "Public Launch",
    description:
      "The complete IndiQuant platform becomes available worldwide.",
  },
];

function ComingSoon() {
  return (
    <section className="relative overflow-hidden px-6 py-36">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C27A]/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Heading */}

        <div className="mb-28 text-center">

          <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
            ROADMAP
          </p>

          <h2
            className="mt-5 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            The Journey Begins
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Every milestone moves IndiQuant one step closer to redefining
            modern recruitment.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[#E8C27A] via-[#E8C27A]/40 to-transparent" />

          <div className="space-y-16">

            {phases.map((phase, index) => {

              const Icon = phase.icon;

              return (

                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  className="relative flex gap-8"
                >

                  {/* Timeline Dot */}

                  <div className="relative z-20">

                    <motion.div
                      animate={
                        phase.active
                          ? {
                              scale: [1, 1.15, 1],
                            }
                          : {}
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                        phase.active
                          ? "border-[#E8C27A] bg-[#E8C27A] text-black shadow-[0_0_35px_rgba(232,194,122,.8)]"
                          : "border-[#E8C27A]/30 bg-[#E8C27A]/10 text-[#E8C27A]"
                      }`}
                    >
                      <Icon size={22} />
                    </motion.div>

                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      flex-1
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/5
                      p-8
                      backdrop-blur-3xl
                      transition-all
                      duration-500
                      hover:border-[#E8C27A]/30
                    "
                  >

                    <h3 className="text-3xl font-semibold text-white">
                      {phase.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      {phase.description}
                    </p>

                    {phase.active && (

                      <div className="mt-8 inline-flex rounded-full border border-[#E8C27A]/30 bg-[#E8C27A]/10 px-5 py-2 text-sm text-[#E8C27A]">
                        ● {phase.status}
                      </div>

                    )}

                  </motion.div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ComingSoon;