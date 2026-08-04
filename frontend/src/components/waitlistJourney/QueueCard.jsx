// import { motion } from "framer-motion";

// function QueueCard() {
//   return (
//     <section className="px-5 py-24">

//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         animate={{ y: [0, -8, 0] }}
//         transition={{
//           y: {
//             repeat: Infinity,
//             duration: 5,
//           }
//         }}
//         className="mx-auto max-w-3xl"
//       >

//         <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

//           <p className="text-center text-gray-400">
//             Your Current Position
//           </p>

//           <h2
//             className="mt-6 text-center text-7xl font-semibold text-[#E8C27A]"
//             style={{
//               fontFamily: "var(--font-heading)"
//             }}
//           >
//             #2481
//           </h2>

//           <div className="mt-10 flex flex-col justify-center gap-8 border-t border-white/10 pt-8 text-center md:flex-row">

//             <div>

//               <p className="text-gray-500">
//                 Waitlist Members
//               </p>

//               <h3 className="mt-2 text-3xl font-semibold">
//                 24,531
//               </h3>

//             </div>

//             <div>

//               <p className="text-gray-500">
//                 Early Access
//               </p>

//               <h3 className="mt-2 text-3xl font-semibold">
//                 October
//               </h3>

//             </div>

//           </div>

//         </div>

//       </motion.div>

//     </section>
//   );
// }

// export default QueueCard;







import { motion } from "framer-motion";
import EmptyDashboard from "./EmptyDashboard";

import {
  Users,
  UserPlus,
  Clock3,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

function QueueCard({ user }) {

  //   if (!user) {
  //   return (
  //     <section className="px-5 py-24">
  //       <div className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-white/5 p-10 text-center">
  //         <p className="text-gray-400">
  //           Loading waitlist information...
  //         </p>
  //       </div>
  //     </section>
  //   );
  // }

  if (!user) {
  return <EmptyDashboard />;
}

  const [copied, setCopied] = useState(false);

  const copyLink = async () => {

    await navigator.clipboard.writeText(
      user.referral_link
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  };

  console.log("QueueCard User:", user);

  return (

    <section className="px-5 py-24">

      <motion.div

        initial={{
          opacity: 0,
          y: 60,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        className="mx-auto max-w-4xl"

      >

        <div
          className="
          rounded-[36px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-3xl
          "
        >

          <p className="text-center uppercase tracking-[0.35em] text-[#E8C27A] text-sm">

            Your Waitlist Status

          </p>

          <h1
            className="mt-6 text-center text-8xl text-[#E8C27A]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            #{user.queue_position}
          </h1>

          <p className="mt-3 text-center text-gray-400">

            Current Queue Position

          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <Users className="text-[#E8C27A]" />

              <p className="mt-4 text-gray-400">

                Total Members

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {user.total_users}

              </h3>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <UserPlus className="text-[#E8C27A]" />

              <p className="mt-4 text-gray-400">

                Referrals

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {user.referral_count}

              </h3>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <Clock3 className="text-[#E8C27A]" />

              <p className="mt-4 text-gray-400">

                Status

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {user.status}

              </h3>

            </div>

          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-5">

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">

              Referral Link

            </p>

            <div className="flex flex-col gap-4 md:flex-row">

              <input

                readOnly

                value={user.referral_link}

                className="
                flex-1
                rounded-2xl
                border
                border-white/10
                bg-transparent
                px-5
                py-4
                text-sm
                text-gray-300
                outline-none
                "

              />

              <button

                onClick={copyLink}

                className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#E8C27A]
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
                "

              >

                {copied
                  ? <Check size={20}/>
                  : <Copy size={20}/>
                }

                {copied
                  ? "Copied!"
                  : "Copy Link"
                }

              </button>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );

}

export default QueueCard;