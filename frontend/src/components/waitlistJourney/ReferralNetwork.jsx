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

















// import { motion } from "framer-motion";
// import { UserPlus, Copy, Check } from "lucide-react";
// import { useState } from "react";

// const positions = [
//   { top: "15%", left: "50%" },

//   { top: "32%", left: "22%" },

//   { top: "32%", left: "78%" },

//   { top: "70%", left: "28%" },

//   { top: "70%", left: "72%" },

//   { top: "10%", left: "20%" },

//   { top: "10%", left: "80%" },

//   { top: "88%", left: "18%" },

//   { top: "88%", left: "82%" },

//   { top: "50%", left: "8%" },

//   { top: "50%", left: "92%" },

//   { top: "92%", left: "50%" },
// ];

// function ReferralNetwork({ user }) {
//   const [copied, setCopied] = useState(false);

//   if (!user) return null;

//   const referralCount = user.referral_count;

//   const visibleNodes = positions.slice(
//     0,
//     Math.min(referralCount, positions.length)
//   );

//   const copyLink = async () => {
//     await navigator.clipboard.writeText(user.referral_link);

//     setCopied(true);

//     setTimeout(() => {
//       setCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="relative overflow-hidden px-5 py-36">
//       <div className="mx-auto max-w-6xl">

       

//         <div className="mb-24 text-center">

//           <p className="text-sm tracking-[0.3em] text-[#E8C27A]">
//             REFERRAL NETWORK
//           </p>

//           <h2
//             className="mt-5 text-4xl md:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)",
//             }}
//           >
//             Your Referral
//             <br />

//             Network
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
//             Invite your friends and move higher in the waitlist.
//             Every successful signup grows your network.
//           </p>

//         </div>

        

//         <div
//           className="
//           relative
//           mx-auto
//           h-[620px]
//           max-w-4xl
//           rounded-[40px]
//           border
//           border-white/10
//           bg-white/5
//           backdrop-blur-3xl
//           "
//         >

          

//           <motion.div
//             animate={{
//               scale: [1, 1.08, 1],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//             }}
//             className="
//             absolute
//             left-1/2
//             top-1/2
//             z-20
//             flex
//             h-28
//             w-28
//             -translate-x-1/2
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             bg-[#E8C27A]
//             text-2xl
//             font-semibold
//             text-black
//             shadow-[0_0_80px_rgba(232,194,122,.8)]
//             "
//           >
//             YOU
//           </motion.div>

          

//           {visibleNodes.map((node, index) => (
//             <motion.div
//               key={index}
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 2 + index * 0.3,
//               }}
//               className="absolute"
//               style={{
//                 top: node.top,
//                 left: node.left,
//                 transform: "translate(-50%,-50%)",
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
//                 border-[#E8C27A]/40
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

        

//         <div className="mt-20 grid gap-8 md:grid-cols-3">

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

//             <p className="text-gray-500">
//               Successful Referrals
//             </p>

//             <h3 className="mt-3 text-5xl font-bold text-[#E8C27A]">
//               {user.referral_count}
//             </h3>

//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

//             <p className="text-gray-500">
//               Referral Code
//             </p>

//             <h3 className="mt-3 text-3xl font-semibold tracking-[0.25em]">
//               {user.referral_code}
//             </h3>

//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

//             <button
//               onClick={copyLink}
//               className="
//               flex
//               w-full
//               items-center
//               justify-center
//               gap-3
//               rounded-full
//               bg-[#E8C27A]
//               py-4
//               font-semibold
//               text-black
//               transition
//               hover:scale-105
//               "
//             >
//               {copied ? (
//                 <>
//                   <Check size={20} />
//                   Copied
//                 </>
//               ) : (
//                 <>
//                   <Copy size={20} />
//                   Copy Referral Link
//                 </>
//               )}
//             </button>

//           </div>

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

  const referralCount = user.referral_count || 0;

  const visibleNodes = positions.slice(
    0,
    Math.min(referralCount, positions.length)
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(user.referral_link);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy referral link:", error);
    }
  };

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28">
      {/* Background Glow */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/3
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-[#E8C27A]/5
        blur-[120px]
        sm:h-[450px]
        sm:w-[450px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================
            HEADING
        ========================================== */}

        <div className="mb-16 text-center sm:mb-20 md:mb-24">

          <p className="text-xs tracking-[0.3em] text-[#E8C27A] sm:text-sm">
            REFERRAL NETWORK
          </p>

          <h2
            className="
            mt-4
            text-3xl
            leading-tight
            text-white
            sm:text-4xl
            md:mt-5
            md:text-5xl
            lg:text-6xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Your Referral
            <br />
            Network
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            px-2
            text-sm
            leading-7
            text-gray-400
            sm:mt-6
            sm:text-base
            sm:leading-8
            "
          >
            Invite your friends and move higher in the waitlist.
            Every successful signup grows your network.
          </p>

        </div>

        {/* =========================================
            REFERRAL NETWORK
        ========================================== */}

        <div
          className="
          relative
          mx-auto
          h-[420px]
          w-full
          max-w-4xl
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.035]
          backdrop-blur-3xl
          sm:h-[500px]
          sm:rounded-[32px]
          md:h-[560px]
          lg:h-[620px]
          "
        >

          {/* Inner Glow */}

          <div
            className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-40
            w-40
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#E8C27A]/10
            blur-[80px]
            sm:h-56
            sm:w-56
            "
          />

          {/* YOU */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#E8C27A]
            text-lg
            font-semibold
            text-black
            shadow-[0_0_60px_rgba(232,194,122,.65)]
            sm:h-24
            sm:w-24
            sm:text-xl
            md:h-28
            md:w-28
            md:text-2xl
            "
          >
            YOU
          </motion.div>

          {/* Connecting Lines */}

          {visibleNodes.map((node, index) => (
            <div
              key={`line-${index}`}
              className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-px
              origin-left
              bg-gradient-to-r
              from-[#E8C27A]/30
              to-transparent
              sm:block
              "
              style={{
                width:
                  typeof window !== "undefined" &&
                  window.innerWidth < 640
                    ? "0px"
                    : "35%",
                transform: `
                  rotate(
                    ${Math.atan2(
                      parseFloat(node.top) - 50,
                      parseFloat(node.left) - 50
                    ) * (180 / Math.PI)}
                  deg)
                `,
              }}
            />
          ))}

          {/* Referral Nodes */}

          {visibleNodes.map((node, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + index * 0.25,
                ease: "easeInOut",
              }}
              className="
              absolute
              "
              style={{
                top: node.top,
                left: node.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#E8C27A]/40
                bg-[#E8C27A]/10
                shadow-[0_0_20px_rgba(232,194,122,.12)]
                backdrop-blur-xl
                sm:h-14
                sm:w-14
                md:h-16
                md:w-16
                "
              >
                <UserPlus
                  size={18}
                  className="text-[#E8C27A] sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]"
                />
              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================================
            STATS
        ========================================== */}

        <div
          className="
          mt-12
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          md:mt-16
          md:gap-6
          lg:grid-cols-3
          lg:gap-8
          "
        >

          {/* Successful Referrals */}

          <div
            className="
            flex
            min-h-[170px]
            flex-col
            items-center
            justify-center
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.035]
            p-6
            text-center
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-[#E8C27A]/25
            hover:bg-white/[0.05]
            sm:min-h-[190px]
            sm:p-8
            "
          >
            <p className="text-sm text-gray-500 sm:text-base">
              Successful Referrals
            </p>

            <h3
              className="
              mt-3
              text-4xl
              font-bold
              text-[#E8C27A]
              sm:text-5xl
              "
            >
              {referralCount}
            </h3>
          </div>

          {/* Referral Code */}

          <div
            className="
            flex
            min-h-[170px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.035]
            p-6
            text-center
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-[#E8C27A]/25
            hover:bg-white/[0.05]
            sm:min-h-[190px]
            sm:p-8
            "
          >
            <p className="text-sm text-gray-500 sm:text-base">
              Referral Code
            </p>

            <h3
              className="
              mt-4
              max-w-full
              break-all
              text-2xl
              font-semibold
              tracking-[0.18em]
              text-white
              sm:text-3xl
              sm:tracking-[0.22em]
              "
            >
              {user.referral_code}
            </h3>
          </div>

          {/* Copy Button */}

          <div
            className="
            flex
            min-h-[170px]
            items-center
            justify-center
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.035]
            p-6
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-[#E8C27A]/25
            hover:bg-white/[0.05]
            sm:min-h-[190px]
            sm:p-8
            "
          >

            <button
              onClick={copyLink}
              className="
              flex
              w-full
              max-w-[260px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#E8C27A]
              px-5
              py-3.5
              text-sm
              font-semibold
              text-black
              shadow-[0_0_25px_rgba(232,194,122,.15)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_35px_rgba(232,194,122,.3)]
              active:scale-95
              sm:px-6
              sm:py-4
              sm:text-base
              "
            >
              {copied ? (
                <>
                  <Check size={19} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={19} />
                  <span>Copy Referral Link</span>
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