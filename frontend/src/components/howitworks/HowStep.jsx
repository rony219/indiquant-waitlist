// import { motion } from "framer-motion";

// function HowStep({
//   number,
//   title,
//   description,
//   image,
//   reverse = false,
// }) {
//   return (
//     <section className="relative px-6 py-40">

//       <div
//         className={`
//         mx-auto
//         flex
//         max-w-7xl
//         items-center
//         gap-20
//         ${reverse ? "lg:flex-row-reverse" : ""}
//         flex-col
//         lg:flex-row
//         `}
//       >

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex-1"
//         >
//           <div className="mb-6 text-7xl text-[#E8C27A]/20">
//             {number}
//           </div>

//           <h2
//             className="mb-6 text-4xl text-white md:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)"
//             }}
//           >
//             {title}
//           </h2>

//           <p className="max-w-xl text-lg leading-9 text-gray-400">
//             {description}
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: .9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="flex-1"
//         >
//           <div
//             className="
//             relative
//             overflow-hidden
//             rounded-[40px]
//             border
//             border-white/10
//             bg-white/5
//             p-4
//             backdrop-blur-2xl
//             "
//           >

//             <img
//               src={image}
//               alt=""
//               className="
//               rounded-[30px]
//               object-cover
//               "
//             />

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default HowStep;




import { motion } from "framer-motion";

function HowStep({
  number,
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <section
      className="
      relative
      py-16
      sm:py-24
      lg:py-36
      "
    >
      <div
        className={`
        mx-auto
        flex
        max-w-7xl
        items-center
        gap-10
        px-5

        lg:gap-24

        flex-col

        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
        `}
      >
        {/* Text */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .7 }}
          className="w-full flex-1"
        >
          <div
            className="
            mb-4
            text-5xl
            font-bold
            text-[#E8C27A]/20

            sm:text-6xl

            lg:text-7xl
            "
          >
            {number}
          </div>

          <h2
            className="
            text-3xl

            sm:text-4xl

            lg:text-6xl
            "
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {title}
          </h2>

          <p
            className="
            mt-6
            max-w-xl
            text-base
            leading-8
            text-gray-400

            sm:text-lg
            "
          >
            {description}
          </p>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .7 }}
          className="w-full flex-1"
        >
          <div
            className="
            group
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-3
            backdrop-blur-2xl

            lg:rounded-[36px]
            "
          >
            <img
              src={image}
              alt={title}
              className="
              aspect-[16/10]
              w-full
              rounded-[20px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowStep;




// import { motion } from "framer-motion";
// import { useState } from "react";

// function HowStep({
//   number,
//   title,
//   description,
//   image,
//   reverse = false,
// }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <section className="relative px-6 py-40">
//       <div
//         className={`
//           mx-auto
//           flex
//           max-w-7xl
//           items-center
//           gap-20
//           flex-col
//           ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
//         `}
//       >
       

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1"
//         >
//           <div className="mb-5 text-7xl font-bold text-[#E8C27A]/20">
//             {number}
//           </div>

//           <h2
//             className="mb-6 text-4xl text-white md:text-6xl"
//             style={{
//               fontFamily: "var(--font-heading)",
//             }}
//           >
//             {title}
//           </h2>

//           <p className="max-w-xl text-lg leading-9 text-gray-400">
//             {description}
//           </p>
//         </motion.div>

        

//         <motion.div
//           initial={{ opacity: 0, x: reverse ? -100 : 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="flex-1"
//         >
//           <div
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-[36px]
//               border
//               border-white/10
//               bg-white/5
//               p-4
//               backdrop-blur-2xl
//             "
//           >
            
//             {!loaded && (
//               <div
//                 className="
//                   absolute
//                   inset-4
//                   animate-pulse
//                   rounded-[28px]
//                   bg-gradient-to-r
//                   from-white/5
//                   via-white/10
//                   to-white/5
//                 "
//               />
//             )}

           

//             <motion.img
//               src={image}
//               alt={title}
//               loading="lazy"
//               onLoad={() => setLoaded(true)}
//               initial={{
//                 opacity: 0,
//                 scale: 1.08,
//               }}
//               animate={{
//                 opacity: loaded ? 1 : 0,
//                 scale: loaded ? 1 : 1.08,
//               }}
//               transition={{
//                 duration: 1,
//                 ease: "easeOut",
//               }}
//               className="
//                 relative
//                 w-full
//                 rounded-[28px]
//                 object-cover
//                 shadow-2xl
//               "
//             />

           

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 rounded-[36px]
//                 opacity-0
//                 transition-opacity
//                 duration-500
//                 group-hover:opacity-100
//                 bg-gradient-to-tr
//                 from-[#E8C27A]/5
//                 via-transparent
//                 to-[#E8C27A]/10
//               "
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default HowStep;