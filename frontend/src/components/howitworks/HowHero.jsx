// import { motion } from "framer-motion";

// function HowHero() {
//   return (
//     <section className="relative flex min-h-screen items-center justify-center px-6">


//       <div
//         className="
//         absolute
//         h-[500px]
//         w-[500px]
//         rounded-full
//         bg-[#E8C27A]/10
//         blur-[140px]
//         "
//       />

//       <div className="relative z-10 max-w-5xl text-center">

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="
//           mb-6
//           inline-flex
//           rounded-full
//           border
//           border-[#E8C27A]/20
//           bg-[#E8C27A]/5
//           px-6
//           py-2
//           text-sm
//           tracking-[0.4em]
//           text-[#E8C27A]
//           "
//         >
//           HOW IT WORKS
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="
//           text-5xl
//           font-semibold
//           leading-tight
//           text-white
//           md:text-8xl
//           "
//           style={{
//             fontFamily: "var(--font-heading)"
//           }}
//         >
//           A Better Way
//           <br />

//           <span className="italic text-[#E8C27A]">
//             To Discover Talent.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: .5 }}
//           className="
//           mx-auto
//           mt-10
//           max-w-2xl
//           text-lg
//           leading-9
//           text-gray-400
//           "
//         >
//           IndiQuant transforms traditional recruitment
//           into a transparent, skill-based experience
//           powered by assessments, competitions,
//           and AI-driven insights.
//         </motion.p>

//       </div>
//     </section>
//   );
// }

// export default HowHero;



import { motion } from "framer-motion";

function HowHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[280px]
        w-[280px]


        sm:h-[420px]
        sm:w-[420px]

        lg:h-[650px]
        lg:w-[650px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span
            className="
            inline-flex
            rounded-full
            border
            border-[#E8C27A]/20
            bg-[#E8C27A]/5
            px-5
            py-2
            text-[11px]
            font-medium
            tracking-[0.35em]
            text-[#E8C27A]

            sm:text-xs
            "
          >
            HOW IT WORKS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          className="
          mt-8
          text-5xl
          leading-[1.05]
          tracking-tight

          sm:text-6xl

          md:text-7xl

          lg:text-8xl

          xl:text-[7rem]
          "
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          {/* A Better Way */}
          Research Like 
          <br />

          <span className="italic text-[#E8C27A]">
            a Hedge Fund
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="
          mx-auto
          mt-8
          max-w-xl

          text-base
          leading-8

          text-gray-400

          sm:text-lg

          md:max-w-2xl
          md:text-xl
          "
        >
          IndiQuant transforms traditional recruitment into
          a transparent, AI-powered hiring experience focused
          entirely on real skills—not resumes.
        </motion.p>

      </div>

    </section>
  );
}

export default HowHero;