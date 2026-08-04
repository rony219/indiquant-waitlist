// import { motion } from "framer-motion";
// import {
//   UserPlus,
//   Users,
//   Rocket,
//   Crown,
// } from "lucide-react";

// const timeline = [
//   {
//     icon: <UserPlus size={22} />,
//     title: "Invite 1 Friend",
//     subtitle: "Move ahead in the queue",
//     position: "#2105",
//   },

//   {
//     icon: <Users size={22} />,
//     title: "Invite 5 Friends",
//     subtitle: "Priority access unlocked",
//     position: "#1480",
//   },

//   {
//     icon: <Rocket size={22} />,
//     title: "Invite 20 Friends",
//     subtitle: "Fast-track your position",
//     position: "#530",
//   },

//   {
//     icon: <Crown size={22} />,
//     title: "Become an Early Insider",
//     subtitle: "Receive launch access first",
//     position: "TOP 100",
//   },
// ];

// function ReferralTimeline() {
//   return (
//     <section className="relative px-5 py-28">

//       <div className="mx-auto max-w-6xl">

//         <div className="mb-20 text-center">

//           <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
//             YOUR JOURNEY
//           </p>

//           <h2
//             className="mt-5 text-4xl sm:text-5xl lg:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)",
//             }}
//           >
//             Every Referral
//             <br />

//             Moves You Forward
//           </h2>

//         </div>

//         <div className="relative">

         

//           <div
//             className="
//             absolute
//             left-6
//             top-0
//             h-full
//             w-px
//             bg-gradient-to-b
//             from-transparent
//             via-[#E8C27A]/50
//             to-transparent

//             md:left-1/2
//             md:-translate-x-1/2
//             "
//           />

//           <div className="space-y-20">

//             {timeline.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 70 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: .4 }}
//                 transition={{ duration: .7 }}
//                 className={`
//                 relative
//                 flex
//                 flex-col
//                 gap-8

//                 md:items-center

//                 ${
//                   index % 2 === 0
//                     ? "md:flex-row"
//                     : "md:flex-row-reverse"
//                 }
//                 `}
//               >
              

//                 <div className="flex-1">

//                   <div
//                     className="
//                     rounded-[32px]
//                     border
//                     border-white/10
//                     bg-white/5
//                     p-8
//                     backdrop-blur-3xl
//                     transition-all
//                     duration-500

//                     hover:border-[#E8C27A]/40
//                     hover:-translate-y-2
//                     "
//                   >
//                     <div
//                       className="
//                       mb-6
//                       flex
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       bg-[#E8C27A]/10
//                       text-[#E8C27A]
//                       "
//                     >
//                       {item.icon}
//                     </div>

//                     <h3 className="text-2xl font-semibold">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 text-gray-400">
//                       {item.subtitle}
//                     </p>

//                   </div>

//                 </div>

               
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.25, 1],
//                   }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 3,
//                   }}
//                   className="
//                   relative
//                   z-10
//                   flex
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#E8C27A]
//                   text-black
//                   shadow-[0_0_45px_rgba(232,194,122,.9)]
//                   "
//                 >
//                   {index + 1}
//                 </motion.div>

                

//                 <div className="flex-1">

//                   <div className="text-center">

//                     <p className="text-gray-500">
//                       New Position
//                     </p>

//                     <h3
//                       className="mt-2 text-5xl text-[#E8C27A]"
//                       style={{
//                         fontFamily:
//                           "var(--font-heading)",
//                       }}
//                     >
//                       {item.position}
//                     </h3>

//                   </div>

//                 </div>

//               </motion.div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default ReferralTimeline;







import { motion } from "framer-motion";
import {
  UserPlus,
  Users,
  Rocket,
  Crown,
  CheckCircle2,
  Lock,
} from "lucide-react";

function ReferralTimeline({ user }) {

  if (!user) return null;

  const referrals = user.referral_count;

  const milestones = [
    {
      icon: <UserPlus size={22} />,
      target: 1,
      title: "Invite 1 Friend",
      subtitle: "Move ahead in the queue",
    },

    {
      icon: <Users size={22} />,
      target: 5,
      title: "Invite 5 Friends",
      subtitle: "Priority Access",
    },

    {
      icon: <Rocket size={22} />,
      target: 20,
      title: "Invite 20 Friends",
      subtitle: "Fast Track Launch",
    },

    {
      icon: <Crown size={22} />,
      target: 50,
      title: "Become an Early Insider",
      subtitle: "VIP Launch Access",
    },
  ];

  return (
    <section className="relative px-5 py-28">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
            YOUR JOURNEY
          </p>

          <h2
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Referral Progress
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-gray-400 leading-8">
            Every successful referral moves you closer to exclusive early access.
          </p>

        </div>

        {/* Progress Summary */}

        <div className="mb-24 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

          <div className="flex flex-col gap-8 md:flex-row md:justify-between">

            <div>

              <p className="text-gray-500">
                Current Queue Position
              </p>

              <h3 className="mt-2 text-5xl font-semibold text-[#E8C27A]">
                #{user.queue_position}
              </h3>

            </div>

            <div>

              <p className="text-gray-500">
                Successful Referrals
              </p>

              <h3 className="mt-2 text-5xl font-semibold text-[#E8C27A]">
                {user.referral_count}
              </h3>

            </div>

            <div>

              <p className="text-gray-500">
                Next Goal
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                {milestones.find(m => referrals < m.target)?.target || "Completed"}
              </h3>

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="relative">

          <div
            className="
            absolute
            left-6
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#E8C27A]/50
            to-transparent

            md:left-1/2
            md:-translate-x-1/2
            "
          />

          <div className="space-y-20">

            {milestones.map((item, index) => {

              const completed = referrals >= item.target;

              const progress =
                referrals < item.target &&
                index === milestones.findIndex(m => referrals < m.target);

              return (

                <motion.div
                  key={item.target}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: .6,
                  }}
                  className={`
                  relative
                  flex
                  flex-col
                  gap-8

                  md:items-center

                  ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                  `}
                >

                  {/* Left Card */}

                  <div className="flex-1">

                    <div
                      className={`
                      rounded-[30px]
                      border
                      p-8
                      backdrop-blur-3xl
                      transition-all
                      duration-300

                      ${
                        completed
                          ? "border-[#E8C27A]/40 bg-[#E8C27A]/10"
                          : progress
                          ? "border-blue-400/40 bg-blue-500/10"
                          : "border-white/10 bg-white/5"
                      }
                      `}
                    >

                      <div className="mb-6 flex items-center justify-between">

                        <div
                          className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#E8C27A]/10
                          text-[#E8C27A]
                          "
                        >
                          {item.icon}
                        </div>

                        {completed ? (
                          <CheckCircle2
                            size={28}
                            color="#22c55e"
                          />
                        ) : (
                          <Lock
                            size={22}
                            color="#888"
                          />
                        )}

                      </div>

                      <h3 className="text-2xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-gray-400">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>

                  {/* Node */}

                  <motion.div
                    animate={{
                      scale: completed
                        ? [1, 1.25, 1]
                        : [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className={`
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    text-black

                    ${
                      completed
                        ? "bg-[#22c55e]"
                        : progress
                        ? "bg-blue-400"
                        : "bg-[#E8C27A]"
                    }
                    `}
                  >

                    {index + 1}

                  </motion.div>

                  {/* Right */}

                  <div className="flex-1 text-center">

                    <p className="text-gray-500">
                      Target
                    </p>

                    <h3
                      className="mt-2 text-5xl text-[#E8C27A]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.target}
                    </h3>

                    <p className="mt-3 text-gray-500">
                      referrals required
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ReferralTimeline;