// import { motion } from "framer-motion";
// import {
//   UserPlus
// } from "lucide-react";

// const nodes = [
//   {
//     top: "15%",
//     left: "50%"
//   },

//   {
//     top: "35%",
//     left: "22%"
//   },

//   {
//     top: "35%",
//     left: "78%"
//   },

//   {
//     top: "70%",
//     left: "30%"
//   },

//   {
//     top: "70%",
//     left: "70%"
//   }
// ];

// function ReferralNetwork() {
//   return (
//     <section className="relative overflow-hidden px-5 py-40">

//       <div className="mx-auto max-w-6xl">

//         <div className="mb-24 text-center">

//           <p className="tracking-[0.3em] text-[#E8C27A] text-sm">
//             REFERRAL NETWORK
//           </p>

//           <h2
//             className="mt-5 text-4xl md:text-6xl"
//             style={{
//               fontFamily:"var(--font-heading)"
//             }}
//           >
//             Every Invite
//             <br/>

//             Builds Momentum
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-gray-400 leading-8">
//             Every successful referral strengthens your
//             position and unlocks earlier access to IndiQuant.
//           </p>

//         </div>

//         <div
//           className="
//           relative
//           mx-auto
//           h-[550px]
//           max-w-3xl
//           rounded-[40px]
//           border
//           border-white/10
//           bg-white/5
//           backdrop-blur-3xl
//           "
//         >


//           <motion.div
//             animate={{
//               scale:[1,1.08,1]
//             }}
//             transition={{
//               repeat:Infinity,
//               duration:3
//             }}
//             className="
//             absolute
//             left-1/2
//             top-1/2
//             z-20
//             flex
//             h-24
//             w-24
//             -translate-x-1/2
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-[#E8C27A]
//             text-black
//             shadow-[0_0_60px_rgba(232,194,122,.8)]
//             "
//           >

//             YOU

//           </motion.div>

//           {nodes.map((node,index)=>(
//             <motion.div
//               key={index}
//               animate={{
//                 y:[0,-10,0]
//               }}
//               transition={{
//                 repeat:Infinity,
//                 duration:3+index
//               }}
//               className="absolute"
//               style={{
//                 top:node.top,
//                 left:node.left,
//                 transform:"translate(-50%,-50%)"
//               }}
//             >

//               <div
//                 className="
//                 flex
//                 h-16
//                 w-16
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-[#E8C27A]/30
//                 bg-[#E8C27A]/10
//                 backdrop-blur-xl
//                 "
//               >

//                 <UserPlus
//                   size={22}
//                   color="#E8C27A"
//                 />

//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default ReferralNetwork;




import { motion } from "framer-motion";
import { UserPlus, Copy, Check } from "lucide-react";
import { useState } from "react";

const positions = [
  { top: "15%", left: "50%" },

  { top: "32%", left: "22%" },

  { top: "32%", left: "78%" },

  { top: "70%", left: "28%" },

  { top: "70%", left: "72%" },

  { top: "10%", left: "20%" },

  { top: "10%", left: "80%" },

  { top: "88%", left: "18%" },

  { top: "88%", left: "82%" },

  { top: "50%", left: "8%" },

  { top: "50%", left: "92%" },

  { top: "92%", left: "50%" },
];

function ReferralNetwork({ user }) {
  const [copied, setCopied] = useState(false);

  if (!user) return null;

  const referralCount = user.referral_count;

  const visibleNodes = positions.slice(
    0,
    Math.min(referralCount, positions.length)
  );

  const copyLink = async () => {
    await navigator.clipboard.writeText(user.referral_link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden px-5 py-36">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-24 text-center">

          <p className="text-sm tracking-[0.3em] text-[#E8C27A]">
            REFERRAL NETWORK
          </p>

          <h2
            className="mt-5 text-4xl md:text-6xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Your Referral
            <br />

            Network
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
            Invite your friends and move higher in the waitlist.
            Every successful signup grows your network.
          </p>

        </div>

        {/* Network */}

        <div
          className="
          relative
          mx-auto
          h-[620px]
          max-w-4xl
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          "
        >

          {/* YOU */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-28
            w-28
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#E8C27A]
            text-2xl
            font-semibold
            text-black
            shadow-[0_0_80px_rgba(232,194,122,.8)]
            "
          >
            YOU
          </motion.div>

          {/* Referral Nodes */}

          {visibleNodes.map((node, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + index * 0.3,
              }}
              className="absolute"
              style={{
                top: node.top,
                left: node.left,
                transform: "translate(-50%,-50%)",
              }}
            >
              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#E8C27A]/40
                bg-[#E8C27A]/10
                backdrop-blur-xl
                "
              >
                <UserPlus
                  size={22}
                  color="#E8C27A"
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <p className="text-gray-500">
              Successful Referrals
            </p>

            <h3 className="mt-3 text-5xl font-bold text-[#E8C27A]">
              {user.referral_count}
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

            <p className="text-gray-500">
              Referral Code
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[0.25em]">
              {user.referral_code}
            </h3>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <button
              onClick={copyLink}
              className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#E8C27A]
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
              "
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copy Referral Link
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReferralNetwork;