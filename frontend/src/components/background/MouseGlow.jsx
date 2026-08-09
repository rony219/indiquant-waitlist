// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function MouseGlow() {
//   const [{ x, y }, setPosition] = useState({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <motion.div
//       animate={{
//         x: x - 225,
//         y: y - 225,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 60,
//         damping: 25,
//         mass: 1,
//       }}
//       className="pointer-events-none fixed z-0 h-[450px] w-[450px] rounded-full"
//       style={{
//         background:
//           "radial-gradient(circle, rgba(232,194,122,.10) 0%, rgba(232,194,122,.05) 35%, transparent 70%)",
//         filter: "blur(90px)",
//       }}
//     />
//   );
// }

// export default MouseGlow;





import { useEffect, useRef } from "react";

function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window
    ) {
      return;
    }

    const glow = glowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    let animationId;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glow) {
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-20 hidden md:block"
      
      style={{
      mixBlendMode: "screen",
  }}
    >
      <div
        className="rounded-full"
        style={{
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(232,194,122,0.18) 0%, rgba(232,194,122,0.08) 35%, rgba(232,194,122,0.02) 60%, transparent 75%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default MouseGlow;