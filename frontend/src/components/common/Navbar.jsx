import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // ----------------------------------------
  // Preserve referral link on Home button
  // ----------------------------------------
  const referralCode = sessionStorage.getItem("referralCode");
  // const referralCode = localStorage.getItem("referralCode");

  const homeLink = referralCode
    ? `/ref/${referralCode}`
    : "/";

  return (
    <>
      <header
        className={`
        fixed
        left-1/2
        top-5
        z-50
        w-[95%]
        max-w-7xl
        -translate-x-1/2
        rounded-full
        border
        transition-all
        duration-500

        ${
          scrolled
            ? "border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,.35)]"
            : "border-transparent bg-transparent"
        }
        `}
      >
        <div className="flex h-16 items-center justify-between px-5 md:px-8">

          {/* Logo */}

          <Link
            to={homeLink}
            className="
            text-lg
            font-semibold
            tracking-[0.25em]
            text-white
            "
          >
            INDIQUANT
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">
            <NavItem to="/how-it-works">
              How It Works
            </NavItem>

            <NavItem to="/waitlist-journey">
              Waitlist Journey
            </NavItem>

            <NavItem to="/sneak-peek">
              Sneak Peek
            </NavItem>
          </nav>

          {/* Notify Button */}

          <Link
            to={homeLink}
            // to="/"
            className="
            hidden
            rounded-full
            border
            border-[#E8C27A]/40
            bg-[#E8C27A]/10
            px-5
            py-2.5
            text-sm
            font-medium
            text-[#E8C27A]
            transition-all
            duration-300
            hover:bg-[#E8C27A]
            hover:text-black
            lg:block
            "
          >
            Notify Me →
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          fixed
          left-4
          right-4
          top-24
          z-40
          rounded-3xl
          border
          border-white/10
          bg-black/80
          p-6
          backdrop-blur-2xl
          md:hidden
          "
        >
          <div className="flex flex-col gap-6">

            <Link
              to="/how-it-works"
              onClick={closeMenu}
              className="text-white transition hover:text-[#E8C27A]"
            >
              How It Works
            </Link>

            <Link
              to="/waitlist-journey"
              onClick={closeMenu}
              className="text-white transition hover:text-[#E8C27A]"
            >
              Waitlist Journey
            </Link>

            <Link
              to="/sneak-peek"
              onClick={closeMenu}
              className="text-white transition hover:text-[#E8C27A]"
            >
              Sneak Peek
            </Link>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
























// import { useEffect, useState } from "react";
// import { Menu, X, Sparkles } from "lucide-react";
// import NavItem from "./NavItem";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menu, setMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`
//         fixed
//         top-5
//         left-1/2
//         z-50
//         w-[95%]
//         max-w-7xl
//         -translate-x-1/2
//         rounded-full
//         transition-all
//         duration-500

//         ${
//           scrolled
//             ? "border border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,.45)]"
//             : "bg-transparent"
//         }
//         `}
//       >
//         <div className="flex h-16 items-center justify-between px-5 lg:px-8">
//           {/* Logo */}

//           <a
//             href="#hero"
//             className="flex items-center gap-2"
//           >
//             <Sparkles
//               size={18}
//               color="#E8C27A"
//             />

//             <span
//               className="
//               text-white
//               text-lg
//               tracking-[0.3em]
//               font-semibold
//               "
//             >
//               INDIQUANT
//             </span>
//           </a>

//           {/* Desktop */}

//           <nav className="hidden items-center gap-10 md:flex">
//             <NavItem href="#how-it-works">
//               How It Works
//             </NavItem>

//             <NavItem href="#waitlist-journey">
//               Waitlist Journey
//             </NavItem>

//             <NavItem href="#sneak-peek">
//               Sneak Peek
//             </NavItem>
//           </nav>

//           {/* Button */}

//           <a
//             href="#hero"
//             className="
//             hidden
//             rounded-full
//             border
//             border-[#E8C27A]/30
//             bg-[#E8C27A]/10
//             px-6
//             py-2.5
//             text-sm
//             font-medium
//             text-[#E8C27A]
//             transition-all
//             duration-300
//             hover:scale-105
//             hover:bg-[#E8C27A]
//             hover:text-black
//             lg:block
//             "
//           >
//             Notify Me →
//           </a>

//           {/* Mobile */}

//           <button
//             onClick={() => setMenu(!menu)}
//             className="text-white md:hidden"
//           >
//             {menu ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </header>

//       {menu && (
//         <div
//           className="
//           fixed
//           top-24
//           left-4
//           right-4
//           z-40
//           rounded-3xl
//           border
//           border-white/10
//           bg-black/80
//           p-6
//           backdrop-blur-2xl
//           md:hidden
//           "
//         >
//           <div className="flex flex-col gap-6 text-white">
//             <a href="#how-it-works">How It Works</a>

//             <a href="#waitlist-journey">Waitlist Journey</a>

//             <a href="#sneak-peek">Sneak Peek</a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;