import {
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { ChevronUp, ArrowUpRight } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://whatsapp.com/channel/0029VbCMqCEAe5VngmEunO2e",
    },
    {
      name: "X",
      icon: FaXTwitter,
      href: "https://x.com/indiquantlabs",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/indiquant-by-cawm",
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden px-5 pb-8 pt-16 md:px-8 md:pt-24">

      {/* -------------------------------- */}
      {/* Background Glows */}
      {/* -------------------------------- */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full  blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full  blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full blur-[120px]" />


      {/* -------------------------------- */}
      {/* Top Gold Line */}
      {/* -------------------------------- */}

      <div className="relative mx-auto mb-16 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#E8C27A]/50 to-transparent md:mb-20" />


      {/* -------------------------------- */}
      {/* Main Footer Content */}
      {/* -------------------------------- */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Logo */}

        <h2
          className="
            text-3xl
            tracking-[0.3em]
            text-white
            md:text-4xl
            md:tracking-[0.4em]
          "
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          INDIQUANT
        </h2>


        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-gray-400
            md:mt-7
            md:text-base
            md:leading-8
          "
        >
          One signal can change a trade.
          <br className="hidden md:block" />
          The right signals can change everything.
        </p>


        {/* -------------------------------- */}
        {/* Social Media */}
        {/* -------------------------------- */}

        <div className="mt-10 flex items-center justify-center gap-4 md:mt-12">

          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="
                  group
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-gray-400
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#E8C27A]/40
                  hover:bg-[#E8C27A]/10
                  hover:text-[#E8C27A]
                  hover:shadow-[0_0_30px_rgba(232,194,122,0.12)]
                  md:h-13
                  md:w-13
                "
              >

                {/* Inner Glow */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-[#E8C27A]/0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:bg-[#E8C27A]/10
                  "
                />

                {/* Icon */}

                <Icon
                  size={19}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </a>
            );
          })}

        </div>


        {/* Small Social Label */}

        <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-gray-600">
          Connect with IndiQuant
        </p>


        {/* -------------------------------- */}
        {/* Divider */}
        {/* -------------------------------- */}

        <div className="my-12 h-px bg-white/[0.08] md:my-14" />


        {/* -------------------------------- */}
        {/* Bottom Footer */}
        {/* -------------------------------- */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            md:flex-row
          "
        >

          {/* Copyright */}

          {/* <p className="text-xs text-gray-600 md:text-sm">
            © 2026 IndiQuant. All rights reserved.
          </p> */}


          {/* Back To Top */}

          <button
            onClick={handleBackToTop}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-2.5
              text-sm
              text-gray-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#E8C27A]/40
              hover:bg-[#E8C27A]/10
              hover:text-[#E8C27A]
            "
          >
            <span>Back to Top</span>

            <ChevronUp
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>


        {/* -------------------------------- */}
        {/* Bottom Tiny Brand */}
        {/* -------------------------------- */}

        <div className="mt-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-700">
          <span>Built for the next generation of quants</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;