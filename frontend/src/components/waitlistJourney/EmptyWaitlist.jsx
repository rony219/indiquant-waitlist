// import { Link } from "react-router-dom";
// import { Sparkles } from "lucide-react";

// function EmptyWaitlist() {
//   return (
//     <section className="flex min-h-[80vh] items-center justify-center px-5">

//       <div
//         className="
//         w-full
//         max-w-3xl
//         rounded-[36px]
//         border
//         border-white/10
//         bg-white/5
//         p-14
//         text-center
//         backdrop-blur-3xl
//         "
//       >

//         <div
//           className="
//           mx-auto
//           flex
//           h-20
//           w-20
//           items-center
//           justify-center
//           rounded-full
//           bg-[#E8C27A]/10
//           "
//         >
//           <Sparkles
//             size={34}
//             className="text-[#E8C27A]"
//           />
//         </div>

//         <p className="mt-8 tracking-[0.35em] text-sm text-[#E8C27A]">
//           WAITLIST DASHBOARD
//         </p>

//         <h1
//           className="mt-5 text-5xl"
//           style={{
//             fontFamily: "var(--font-heading)",
//           }}
//         >
//           Join the Waitlist
//         </h1>

//         <p className="mx-auto mt-8 max-w-xl leading-8 text-gray-400">
//           Your personal queue position, referral link,
//           referral rewards and launch progress will appear
//           here after joining the IndiQuant waitlist.
//         </p>

//         <Link
//           to="/"
//           className="
//           mt-10
//           inline-flex
//           rounded-full
//           bg-[#E8C27A]
//           px-8
//           py-4
//           font-semibold
//           text-black
//           transition
//           hover:scale-105
//           "
//         >
//           Join Waitlist →
//         </Link>

//       </div>

//     </section>
//   );
// }

// export default EmptyWaitlist;

// import { motion } from "framer-motion";
// import { Lock, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// function EmptyDashboard() {
//   return (
//     <section className="px-5 py-24">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="
//           mx-auto
//           max-w-4xl
//           rounded-[40px]
//           border
//           border-white/10
//           bg-white/5
//           p-10
//           backdrop-blur-3xl
//           text-center
//         "
//       >

//         {/* Lock Icon */}

//         <div
//           className="
//             mx-auto
//             flex
//             h-20
//             w-20
//             items-center
//             justify-center
//             rounded-full
//             bg-[#E8C27A]/10
//             border
//             border-[#E8C27A]/20
//             shadow-[0_0_40px_rgba(232,194,122,.15)]
//           "
//         >
//           <Lock
//             size={34}
//             className="text-[#E8C27A]"
//           />
//         </div>

//         {/* Badge */}

//         <p
//           className="
//             mt-8
//             text-sm
//             uppercase
//             tracking-[0.35em]
//             text-[#E8C27A]
//           "
//         >
//           YOUR WAITLIST DASHBOARD
//         </p>

//         {/* Title */}

//         <h2
//           className="mt-6 text-5xl"
//           style={{
//             fontFamily: "var(--font-heading)",
//           }}
//         >
//           Unlock Your
//           <br />

//           <span className="text-[#E8C27A]">
//             Personal Dashboard
//           </span>
//         </h2>

//         {/* Description */}

//         <p
//           className="
//             mx-auto
//             mt-8
//             max-w-2xl
//             text-lg
//             leading-8
//             text-gray-400
//           "
//         >
//           Join the IndiQuant waitlist to unlock your
//           personal dashboard.

//           <br />
//           <br />

//           Track your live queue position, monitor your
//           referral progress, and share your unique referral
//           link—all in one place.
//         </p>

//         {/* Already Registered */}

//         <div
//           className="
//             mt-10
//             rounded-3xl
//             border
//             border-[#E8C27A]/20
//             bg-[#E8C27A]/5
//             p-6
//           "
//         >
//           <p className="text-gray-300">

//             <span className="font-semibold text-white">

//               Already registered?

//             </span>

//             <br />

//             Enter the same email you used during
//             registration to instantly access your dashboard.
//           </p>
//         </div>

//         {/* CTA */}

//         <Link
//           to="/"
//           className="
//             mx-auto
//             mt-10
//             inline-flex
//             items-center
//             gap-3
//             rounded-full
//             bg-[#E8C27A]
//             px-8
//             py-4
//             font-semibold
//             text-black
//             transition-all
//             duration-300
//             hover:scale-105
//             hover:shadow-[0_0_30px_rgba(232,194,122,.35)]
//           "
//         >
//           Join the Waitlist

//           <ArrowRight size={20} />

//         </Link>

//       </motion.div>

//     </section>
//   );
// }

// export default EmptyDashboard;