// import { motion } from "framer-motion";
// import { CheckCircle2, Copy } from "lucide-react";

// function SuccessCard({
//   queuePosition,
//   referralLink,
// }) {
//   function copyLink() {
//     navigator.clipboard.writeText(referralLink);
//   }

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 40,
//         scale: 0.95,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       transition={{
//         duration: 0.6,
//       }}
//       className="
//       mx-auto
//       w-full
//       max-w-2xl
//       rounded-[36px]
//       border
//       border-[#E8C27A]/15
//       bg-white/[0.04]
//       p-8
//       backdrop-blur-3xl
//       shadow-[0_0_80px_rgba(232,194,122,.08)]
//       "
//     >

//       {/* Icon */}

//       <div className="mb-8 flex justify-center">

//         <div
//           className="
//           flex
//           h-20
//           w-20
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[#E8C27A]/30
//           bg-[#E8C27A]/10
//           shadow-[0_0_35px_rgba(232,194,122,.2)]
//           "
//         >
//           <CheckCircle2
//             size={42}
//             className="text-[#E8C27A]"
//           />
//         </div>

//       </div>

//       <h2
//         className="text-center text-4xl text-white"
//         style={{
//           fontFamily: "var(--font-heading)",
//         }}
//       >
//         You're on the Waitlist
//       </h2>

//       <p className="mx-auto mt-4 max-w-lg text-center leading-8 text-gray-400">
//         Welcome to IndiQuant.

//         Your place has been reserved.

//         We'll notify you before the public launch.
//       </p>

//       {/* Queue */}

//       <div
//         className="
//         mt-10
//         rounded-3xl
//         border
//         border-white/10
//         bg-black/30
//         p-6
//         text-center
//         "
//       >
//         <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
//           Queue Position
//         </p>

//         <h3 className="mt-3 text-6xl font-bold text-[#E8C27A]">
//           #{queuePosition}
//         </h3>
//       </div>

      

//       <div className="mt-8">

//         <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
//           Your Referral Link
//         </p>

//         <div
//           className="
//           flex
//           flex-col
//           gap-4
//           rounded-2xl
//           border
//           border-white/10
//           bg-black/30
//           p-4
//           md:flex-row
//           "
//         >
//           <input
//             readOnly
//             value={referralLink}
//             className="
//             flex-1
//             bg-transparent
//             text-sm
//             text-gray-300
//             outline-none
//             "
//           />

//           <button
//             onClick={copyLink}
//             className="
//             flex
//             items-center
//             justify-center
//             gap-2
//             rounded-full
//             bg-[#E8C27A]
//             px-6
//             py-3
//             font-medium
//             text-black
//             transition
//             hover:scale-105
//             "
//           >
//             <Copy size={18} />
//             Copy Link
//           </button>
//         </div>
//       </div>

//       <p className="mt-8 text-center text-gray-500">
//         Invite friends to move up the waitlist.
//       </p>

//     </motion.div>
//   );
// }

// export default SuccessCard;


import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Copy,
} from "lucide-react";

function SuccessCard({
  queuePosition,
  referralLink,
}) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(referralLink);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
      mx-auto
      w-full
      max-w-2xl
      rounded-[36px]
      border
      border-[#E8C27A]/15
      bg-white/[0.04]
      p-6
      backdrop-blur-3xl
      shadow-[0_0_80px_rgba(232,194,122,.08)]
      md:p-10
      "
    >
      {/* Success Icon */}

      <div className="mb-8 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.25,
            type: "spring",
            stiffness: 200,
          }}
          className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-[#E8C27A]/30
          bg-[#E8C27A]/10
          shadow-[0_0_35px_rgba(232,194,122,.25)]
          "
        >
          <CheckCircle2
            size={42}
            className="text-[#E8C27A]"
          />
        </motion.div>
      </div>

      {/* Heading */}

      <h2
        className="text-center text-3xl text-white md:text-5xl"
        style={{
          fontFamily: "var(--font-heading)",
        }}
      >
        You're on the Waitlist
      </h2>

      <p className="mx-auto mt-5 max-w-lg text-center leading-8 text-gray-400">
        Welcome to IndiQuant.

        <br />

        Your place has been reserved.

        We'll notify you before the public launch.
      </p>

      {/* Queue */}

      <div
        className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-black/30
        p-6
        text-center
        "
      >
        <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
          Queue Position
        </p>

        <h3 className="mt-3 text-5xl font-bold text-[#E8C27A] md:text-7xl">
          #{queuePosition}
        </h3>
      </div>

      {/* Referral */}

      <div className="mt-10">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-gray-500">
          Your Referral Link
        </p>

        <div
          className="
          flex
          flex-col
          gap-4
          rounded-3xl
          border
          border-white/10
          bg-black/30
          p-4
          md:flex-row
          md:items-center
          "
        >
          <input
            readOnly
            value={referralLink}
            className="
            flex-1
            bg-transparent
            text-sm
            text-gray-300
            outline-none
            "
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={copyLink}
            className={`
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            px-6
            py-3
            font-medium
            transition-all
            duration-300

            ${
              copied
                ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,.45)]"
                : "bg-[#E8C27A] text-black"
            }
            `}
          >
            {copied ? (
              <>
                <CheckCircle2 size={18} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Link
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Footer */}

      <motion.p
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="mt-8 text-center text-gray-500"
      >
        Invite friends to move up the waitlist.
      </motion.p>
    </motion.div>
  );
}

export default SuccessCard;