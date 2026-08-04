// import {
//   ShieldCheck,
//   BrainCircuit,
//   Trophy,
//   BriefcaseBusiness,
// } from "lucide-react";

// import JourneyStep from "../common/JourneyStep";

// const steps = [
//   {
//     icon: <ShieldCheck color="#E8C27A" size={28} />,
//     title: "Verify Your Identity",
//     description:
//       "Secure your profile once. Every assessment is permanently linked to your verified identity.",
//   },

//   {
//     icon: <BrainCircuit color="#E8C27A" size={28} />,
//     title: "Prove Your Skills",
//     description:
//       "Demonstrate your real abilities through practical assessments instead of relying only on resumes.",
//   },

//   {
//     icon: <Trophy color="#E8C27A" size={28} />,
//     title: "Compete Live",
//     description:
//       "Participate in recruitment tournaments designed to highlight problem-solving and teamwork.",
//   },

//   {
//     icon: (
//       <BriefcaseBusiness
//         color="#E8C27A"
//         size={28}
//       />
//     ),
//     title: "Get Discovered",
//     description:
//       "Top performers receive interview opportunities and early access to future hiring events.",
//   },
// ];

// function Journey() {
//   return (
//     <section className="relative py-40 px-6">

//       <div className="mx-auto max-w-6xl">

//         <h2 className="heading-font mb-6 text-center text-6xl">
//           The Path to Exceptional Talent
//         </h2>

//         <p className="mx-auto mb-28 max-w-3xl text-center text-gray-400">
//           Every opportunity begins with a single step.
//           Follow the journey that transforms potential
//           into achievement.
//         </p>

//         <div className="relative">

//           {/* Timeline */}

//           <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#E8C27A]/60 to-transparent" />

//           <div className="space-y-28">

//             {steps.map((step, index) => (
//               <JourneyStep
//                 key={step.title}
//                 {...step}
//                 reverse={index % 2 !== 0}
//               />
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Journey;


import {
  ShieldCheck,
  BrainCircuit,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react";

import JourneyStep from "../common/JourneyStep";
import Container from "../common/Container";

const steps = [
  {
    icon: <ShieldCheck color="#E8C27A" size={28} />,
    title: "Verify Your Identity",
    description:
      "Secure your profile once. Every assessment is permanently linked to your verified identity.",
  },
  {
    icon: <BrainCircuit color="#E8C27A" size={28} />,
    title: "Prove Your Skills",
    description:
      "Demonstrate your real abilities through practical assessments instead of relying only on resumes.",
  },
  {
    icon: <Trophy color="#E8C27A" size={28} />,
    title: "Compete Live",
    description:
      "Participate in recruitment tournaments designed to highlight problem-solving and teamwork.",
  },
  {
    icon: <BriefcaseBusiness color="#E8C27A" size={28} />,
    title: "Get Discovered",
    description:
      "Top performers receive interview opportunities and early access to future hiring events.",
  },
];

function Journey() {
  return (
    <section
      className="
      relative
      py-20
      md:py-28
      lg:py-40
      "
    >
      <Container>

        <h2
          className="
          heading-font
          mb-6
          text-center
          text-4xl
          sm:text-5xl
          lg:text-6xl
          "
        >
          The Path to Exceptional Talent
        </h2>

        <p
          className="
          mx-auto
          mb-16
          max-w-3xl
          text-center
          text-base
          md:text-lg
          leading-8
          text-gray-400
          "
        >
          Every opportunity begins with a single step.
          Follow the journey that transforms potential
          into achievement.
        </p>

        <div className="relative">

          <div
            className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#E8C27A]/60
            to-transparent
            md:block
            "
          />

          <div className="space-y-12 md:space-y-24">

            {steps.map((step, index) => (
              <JourneyStep
                key={step.title}
                {...step}
                reverse={index % 2 !== 0}
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Journey;