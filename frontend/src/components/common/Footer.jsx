import { ChevronUp, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://whatsapp.com/channel/0029VbCMqCEAe5VngmEunO2e",
      description: "Connect with us",
    },
    {
      name: "X / Twitter",
      icon: Twitter,
      href: "https://x.com/indiquantlabs",
      description: "Follow our updates",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/indiquant-by-cawm",
      description: "Join our network",
    },
  ];

  return (
    <footer className="relative overflow-hidden px-5 pb-10 pt-10 md:px-8">

      {/* ============================= */}
      {/* Top Glow Line */}
      {/* ============================= */}

      <div className="mx-auto mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-[#E8C27A]/70 to-transparent" />

      {/* ============================= */}
      {/* Background Glow */}
      {/* ============================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[#E8C27A]/5
          blur-[120px]
        "
      />

      {/* ============================= */}
      {/* Main Content */}
      {/* ============================= */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Logo */}

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl
            tracking-[0.3em]
            text-white
            sm:text-4xl
            md:text-5xl
          "
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          INDIQUANT
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            px-2
            text-sm
            leading-7
            text-gray-400
            md:text-base
            md:leading-8
          "
        >
          One signal can change a trade. The right signals can change
          everything.
        </motion.p>

        {/* ============================= */}
        {/* Social Links */}
        {/* ============================= */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-3
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#E8C27A]/40
                  hover:bg-[#E8C27A]/10
                  hover:shadow-[0_10px_40px_rgba(232,194,122,0.08)]
                "
              >

                {/* Hover Glow */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.06]
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                {/* Icon */}

                <span
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    text-gray-300
                    transition-all
                    duration-300
                    group-hover:border-[#E8C27A]/30
                    group-hover:text-[#E8C27A]
                  "
                >
                  <Icon size={17} strokeWidth={1.8} />
                </span>

                {/* Text */}

                <span className="relative text-left">

                  <span
                    className="
                      block
                      text-sm
                      font-medium
                      text-gray-200
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {social.name}
                  </span>

                  <span className="hidden text-[11px] text-gray-500 sm:block">
                    {social.description}
                  </span>

                </span>

              </motion.a>
            );
          })}

        </div>

        {/* ============================= */}
        {/* Navigation */}
        {/* ============================= */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">

          {/* Uncomment when needed */}

          {/*
          <a
            href="/how-it-works"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-[#E8C27A]
            "
          >
            How It Works
          </a>

          <a
            href="/waitlist-journey"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-[#E8C27A]
            "
          >
            Waitlist Journey
          </a>

          <a
            href="/sneak-peek"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-[#E8C27A]
            "
          >
            Sneak Peek
          </a>
          */}

        </div>

        {/* ============================= */}
        {/* Divider */}
        {/* ============================= */}

        <div className="my-14 h-px bg-white/10" />

        {/* ============================= */}
        {/* Bottom */}
        {/* ============================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            text-sm
            text-gray-500
            md:flex-row
          "
        >

          {/* Copyright */}

          {/*
          <p>
            © 2026 IndiQuant. All rights reserved.
          </p>
          */}

          {/* Back To Top */}

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#E8C27A]/40
              hover:bg-[#E8C27A]/10
              hover:text-[#E8C27A]
            "
          >
            Back to Top

            <ChevronUp
              size={18}
              className="
                transition
                duration-300
                group-hover:-translate-y-1
              "
            />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;