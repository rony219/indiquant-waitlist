// import {
//   ShieldCheck,
//   Trophy,
//   BrainCircuit,
//   Code2,
//   Medal,
//   BriefcaseBusiness,
// } from "lucide-react";

// const features = [
//   {
//     icon: ShieldCheck,
//     title: "Make Your Data Work for You",
//   },
//   {
//     icon: Code2,
//     title: "AI Never Stops Learning",
//   },
//   {
//     icon: BrainCircuit,
//     title: "Every Idea Earns Its Place",
//   },
//   {
//     icon: Trophy,
//     title: "Research Like the Pros",
//   },
//   {
//     icon: Medal,
//     title: "Collective Intelligence Wins",
//   },
//   {
//     icon: BriefcaseBusiness,
//     title: "Built for Serious Quants",
//   },
// ];

// function FeatureGrid() {
//   return (
//     <section className="px-6 py-28">

//       <div className="mx-auto max-w-7xl">

//         <div className="mb-16 text-center">

//           <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
//             FEATURES
//           </p>

//           <h2
//             className="mt-5 text-4xl md:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)",
//             }}
//           >
//             Everything You Need
//           </h2>

//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//           {features.map((feature) => (
//             <div
//               key={feature.title}
//               className="
//               rounded-[28px]
//               border
//               border-white/10
//               bg-white/5
//               p-8
//               backdrop-blur-xl
//               transition
//               duration-500

//               hover:border-[#E8C27A]/40
//               hover:-translate-y-2
//               "
//             >
//               <feature.icon
//                 size={34}
//                 color="#E8C27A"
//               />

//               <h3 className="mt-6 text-2xl font-semibold">
//                 {feature.title}
//               </h3>

//               <p className="mt-4 leading-8 text-gray-400">
//                 Experience a smarter, faster,
//                 and transparent recruitment process.
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default FeatureGrid;


import {
  ShieldCheck,
  Trophy,
  BrainCircuit,
  Code2,
  Medal,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Make Your Data Work for You",
    description:
      "Discover market opportunities through systematic research and advanced analytics.",
  },
  {
    icon: Code2,
    title: "AI Never Stops Learning",
    description:
      "Continuously evaluate, rank, and improve research with machine intelligence.",
  },
  {
    icon: BrainCircuit,
    title: "Every Idea Earns Its Place",
    description:
      "Transparent, performance-based evaluation rewards results—not reputation.",
  },
  {
    icon: Trophy,
    title: "Research Like the Pros",
    description:
      "Use tools built for factor research, backtests, and signal evaluation.",
  },
  {
    icon: Medal,
    title: "Collective Intelligence Wins",
    description:
      "Harness insights from a global community of researchers and data scientists.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Built for Serious Quants",
    description:
      "A modern platform designed for the next generation of systematic investing.",
  },
];

function FeatureGrid() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.35em] text-[#E8C27A]">
            FEATURES
          </p>

          <h2
            className="mt-5 text-4xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything You Need
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#E8C27A]/40
              "
            >
              <feature.icon size={34} color="#E8C27A" />

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;