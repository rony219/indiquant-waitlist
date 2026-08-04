// import { motion } from "framer-motion";
// import FeaturePoint from "../common/FeaturePoint";

// import waitingImage from "../../assets/waitingimg.jpg";

// function FutureSection() {
//   return (
//     <section className="relative py-24 md:py-36">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >
//           <h2 className="heading-font text-4xl md:text-6xl text-white">
//             See the Future Before It Launches
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg leading-8">
//             Experience the next generation of recruitment where
//             verified identity, real skills and AI-powered
//             assessments create opportunities based on talent.
//           </p>
//         </motion.div>

//         <div className="grid items-center gap-16 lg:grid-cols-2">

          

//           <motion.div
//             whileHover={{
//               scale: 1.02,
//             }}
//             className="group relative"
//           >
           

//             <div
//               className="
//               absolute
//               -inset-6
//               rounded-[40px]
//               bg-[#E8C27A]/10
//               blur-3xl
//               opacity-40
//               transition
//               duration-500
//               group-hover:opacity-80
//               "
//             />

//             <div
//               className="
//               relative
//               overflow-hidden
//               rounded-[36px]
//               border
//               border-white/10
//               bg-white/5
//               p-3
//               backdrop-blur-2xl
//               "
//             >
//               <img
//                 src={waitingImage}
//                 alt="Waiting Image"
//                 className="
//                 w-full
//                 rounded-[28px]
//                 transition-transform
//                 duration-700
//                 group-hover:scale-105
//                 "
//               />
//             </div>
//           </motion.div>

          

//           <div className="space-y-10">

//             <FeaturePoint
//               title="Permanent Identity Verification"
//               description="Every participant is verified once and securely connected to every assessment."
//             />

//             <FeaturePoint
//               title="Real Skill Evaluation"
//               description="Measure practical ability through coding, aptitude and live recruitment events."
//             />

//             <FeaturePoint
//               title="Merit First Recruitment"
//               description="Talent rises through performance, creating fair opportunities for every candidate."
//             />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default FutureSection;


import { motion } from "framer-motion";
import FeaturePoint from "../common/FeaturePoint";

import waitingImage from "../../assets/waitingimg.jpg";

function FutureSection() {
  return (
    <section className="relative overflow-x-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="heading-font text-4xl text-white md:text-6xl">
            See the Future Before It Launches
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Experience the next generation of recruitment where
            verified identity, real skills and AI-powered
            assessments create opportunities based on talent.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            className="group relative overflow-hidden"
          >

            {/* Premium Glow */}

            <div
              className="
                absolute

                inset-0
                sm:-inset-4
                lg:-inset-6

                rounded-[40px]

                bg-[#E8C27A]/10

                blur-xl
                sm:blur-2xl
                lg:blur-3xl

                opacity-40

                transition-all
                duration-500

                group-hover:opacity-80
              "
            />

            {/* Image Card */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[36px]

                border
                border-white/10

                bg-white/5

                p-3

                backdrop-blur-2xl
              "
            >
              <img
                src={waitingImage}
                alt="Waiting List Preview"
                loading="lazy"
                className="
                  block
                  w-full
                  h-auto

                  rounded-[28px]

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />
            </div>

          </motion.div>

          {/* Right Content */}

          <div className="space-y-10">

            <FeaturePoint
              title="Permanent Identity Verification"
              description="Every participant is verified once and securely connected to every assessment."
            />

            <FeaturePoint
              title="Real Skill Evaluation"
              description="Measure practical ability through coding, aptitude and live recruitment events."
            />

            <FeaturePoint
              title="Merit First Recruitment"
              description="Talent rises through performance, creating fair opportunities for every candidate."
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default FutureSection;