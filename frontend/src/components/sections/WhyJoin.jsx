// import { motion } from "framer-motion";

// const cards = [
//   {
//     title: "Early Access",
//     text: "Be among the first candidates to experience AI-powered recruitment before public launch.",
//   },
//   {
//     title: "Priority Invitations",
//     text: "Receive exclusive invitations, hiring updates, and early recruitment opportunities.",
//   },
//   {
//     title: "Exclusive Community",
//     text: "Join a curated network of ambitious developers, researchers, and innovators.",
//   },
// ];

// function WhyJoin() {
//   return (
//     <section className="relative py-32 px-6">

//       <div className="mx-auto max-w-7xl">

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: .7 }}
//           className="mb-5 text-center text-5xl md:text-6xl heading-font"
//         >
//           Why Join the Waitlist?
//         </motion.h2>

//         <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
//           Secure your place before launch and receive exclusive benefits reserved
//           for our earliest members.
//         </p>

//         <div className="grid gap-8 md:grid-cols-3">

//           {cards.map((card, index) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 70 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * .15,
//                 duration: .7,
//               }}
//               className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)]"
//             >
//               <div className="mb-8 text-5xl">

//                 {index === 0 && "🚀"}
//                 {index === 1 && "⚡"}
//                 {index === 2 && "🌍"}

//               </div>

//               <h3 className="mb-5 text-2xl font-semibold">

//                 {card.title}

//               </h3>

//               <p className="leading-8 text-gray-400">

//                 {card.text}

//               </p>

//             </motion.div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default WhyJoin;


import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import PremiumCard from "../ui/PremiumCard";

const cards = [
  {
    icon: <Rocket size={30} color="#E8C27A" />,
    title: "Early Access",
    description:
      "Be among the first candidates to experience AI-powered hiring before everyone else.",
  },
  {
    icon: <ShieldCheck size={30} color="#E8C27A" />,
    title: "Verified Platform",
    description:
      "One candidate, one verified identity, ensuring a secure and fair recruitment process.",
  },
  {
    icon: <Users size={30} color="#E8C27A" />,
    title: "Exclusive Community",
    description:
      "Join ambitious developers and researchers preparing for future opportunities.",
  },
];

function WhyJoin() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-font mb-5 text-center text-5xl md:text-6xl"
        >
          Why Join the Waitlist
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Secure your place before launch and unlock exclusive benefits
          available only to early members.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <PremiumCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyJoin;

// import { Rocket, ShieldCheck, BrainCircuit } from "lucide-react";
// import PremiumCard from "../ui/PremiumCard";

// function WhyJoin() {
//   return (
//     <section className="relative py-36 px-6">

//       <div className="mx-auto max-w-7xl">

//         <div className="mb-20 text-center">

//           <p className="mb-3 uppercase tracking-[0.4em] text-[#E8C27A]">
//             WHY JOIN
//           </p>

//           <h2 className="heading-font text-6xl">
//             Why Join IndiQuant?
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-gray-400">
//             Get early access to a next-generation hiring platform built
//             for exceptional developers, researchers, and innovators.
//           </p>

//         </div>

//         <div className="grid gap-8">

//           <PremiumCard
//             large
//             icon={<Rocket color="#E8C27A" size={30} />}
//             title="Early Access"
//             description="Secure your place before launch and receive exclusive invitations, beta access, and priority recruitment opportunities."
//           />

//           <div className="grid gap-8 md:grid-cols-2">

//             <PremiumCard
//               icon={<ShieldCheck color="#E8C27A" size={30} />}
//               title="Verified Identity"
//               description="Every candidate is securely verified to maintain fairness and trust throughout the recruitment process."
//             />

//             <PremiumCard
//               icon={<BrainCircuit color="#E8C27A" size={30} />}
//               title="AI-Powered Assessments"
//               description="Experience intelligent coding challenges and real-world evaluations designed for modern hiring."
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default WhyJoin;