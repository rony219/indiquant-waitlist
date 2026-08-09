// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function useLenis() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       touchMultiplier: 1.5,
//       wheelMultiplier: 0.9,
//       infinite: false,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);
// }








import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    // Disable Lenis on mobile / touch devices.
    // Native scrolling is smoother and lighter on phones.
    const isMobile =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      infinite: false,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);
}