// import { motion } from "framer-motion";

// function PreviewHero() {
//   return (
//     <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">

//       {/* Glow */}

//       <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C27A]/10 blur-[170px]" />

//       <div className="relative z-10 mx-auto max-w-5xl text-center">

//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="inline-flex rounded-full border border-[#E8C27A]/20 bg-[#E8C27A]/5 px-6 py-2 text-xs tracking-[0.35em] text-[#E8C27A]"
//         >
//           SNEAK PEEK
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: .9 }}
//           className="mt-8 text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
//           style={{
//             fontFamily: "var(--font-heading)"
//           }}
//         >
//           The Future
//           <br />

//           <span className="italic text-[#E8C27A]">
//             Is Almost Here.
//           </span>

//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: .4 }}
//           className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400"
//         >
//           Discover the recruitment platform designed
//           for modern hiring. AI verification,
//           coding tournaments, real-time rankings,
//           and transparent recruitment—all in one place.
//         </motion.p>

//       </div>

//     </section>
//   );
// }

// export default PreviewHero;


import { motion } from "framer-motion";

function PreviewHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex rounded-full border border-[#E8C27A]/20 bg-[#E8C27A]/5 px-6 py-2 text-xs tracking-[0.35em] text-[#E8C27A]"
        >
          SNEAK PEEK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-8 text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
          }}
        >
          A First Look
          <br />

          <span className="italic text-[#E8C27A]">
            At IndiQuant.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          {/* Explore the recruitment platform that's redefining
          how students prove their skills and how companies
          discover exceptional talent. */}
          Every strategy begins as research. We provide the infrastructure to discover, evaluate, and elevate the ideas that outperform.
        </motion.p>

      </div>

    </section>
  );
}

export default PreviewHero;