// import { motion } from "framer-motion";

// function NavItem({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="
//       group
//       relative
//       text-sm
//       font-medium
//       text-gray-300
//       transition-colors
//       duration-300
//       hover:text-white
//       "
//     >
//       {children}

//       <motion.span
//         className="
//         absolute
//         -bottom-2
//         left-0
//         h-px
//         w-0
//         bg-[#E8C27A]
//         transition-all
//         duration-300
//         group-hover:w-full
//         "
//       />
//     </a>
//   );
// }

// export default NavItem;




import { Link } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="
      group
      relative
      text-sm
      font-medium
      text-gray-300
      transition-colors
      duration-300
      hover:text-white
      "
    >
      {children}

      <span
        className="
        absolute
        -bottom-2
        left-0
        h-[2px]
        w-0
        rounded-full
        bg-[#E8C27A]
        transition-all
        duration-300
        group-hover:w-full
        "
      />
    </Link>
  );
}

export default NavItem;




// function NavItem({ href, children }) {
//   return (
//     <a
//       href={href}
//       className="
//       group
//       relative
//       text-sm
//       tracking-wide
//       text-gray-300
//       transition-colors
//       duration-300
//       hover:text-white
//       "
//     >
//       {children}

//       <span
//         className="
//         absolute
//         -bottom-2
//         left-0
//         h-[2px]
//         w-0
//         rounded-full
//         bg-[#E8C27A]
//         transition-all
//         duration-300
//         group-hover:w-full
//         "
//       />
//     </a>
//   );
// }

// export default NavItem;