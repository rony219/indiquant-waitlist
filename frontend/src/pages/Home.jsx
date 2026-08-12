// import Background from "../components/background/Background";
// import Hero from "../components/hero/Hero";
// import Journey from "../components/sections/Journey";
// import FutureSection from "../components/sections/FutureSection";
// import Navbar from "../components/common/Navbar";
// import SectionDivider from "../components/common/SectionDivider";
// import Footer from "../components/common/Footer";
// import useLenis from "../hooks/useLenis";

// function Home() {
//   useLenis();

//   return (
//     <div className="relative min-h-screen bg-[var(--bg)] text-[var(--white)]">
//       <Background />

//       <main className="relative z-10">
//         <Navbar />

//         <Hero />

//         <Journey />

//         <SectionDivider />

//         <FutureSection />
//         <Footer />
//       </main>
//     </div>
//   );
// }

// export default Home;


// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// import Background from "../components/background/Background";
// import Hero from "../components/hero/Hero";
// import Journey from "../components/sections/Journey";
// import FutureSection from "../components/sections/FutureSection";
// import Navbar from "../components/common/Navbar";
// import SectionDivider from "../components/common/SectionDivider";
// import Footer from "../components/common/Footer";
// import useLenis from "../hooks/useLenis";

// function Home() {
//   useLenis();

  
//   const { referralCode } = useParams();

//   useEffect(() => {
//     if (referralCode) {
//       localStorage.setItem("referralCode", referralCode);

//       console.log("Referral Code Saved:", referralCode);
//     }
//   }, [referralCode]);

//   return (
//     <div className="relative min-h-screen bg-[var(--bg)] text-[var(--white)]">
//       <Background />

//       <main className="relative z-10">
//         <Navbar />

//         <Hero />

//         <Journey />

//         <SectionDivider />

//         <FutureSection />

//         <Footer />
//       </main>
//     </div>
//   );
// }

// export default Home;


import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Background from "../components/background/Background";
import Hero from "../components/hero/Hero";
import Journey from "../components/sections/Journey";
import FutureSection from "../components/sections/FutureSection";
import Navbar from "../components/common/Navbar";
import SectionDivider from "../components/common/SectionDivider";
import Footer from "../components/common/Footer";
import useLenis from "../hooks/useLenis";
import useWaitlist from "../hooks/useWaitlist";

function Home() {
  useLenis();

  const { user } = useWaitlist();

  const { referralCode } = useParams();

  useEffect(() => {
    if (referralCode) {
      // User opened a referral link
      // localStorage.setItem("referralCode", referralCode);
      sessionStorage.setItem("referralCode", referralCode);
      
      console.log("Referral Code Saved:", referralCode);
    } else {
      // User opened the normal homepage
      sessionStorage.removeItem("referralCode");
      // localStorage.removeItem("referralCode");

      console.log("Referral Code Removed");
    }
  }, [referralCode]);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--white)]">
      <Background />

      <main className="relative z-10">
        <Navbar />

        {/* <Hero /> */}
        <Journey />
        <SectionDivider />
        <Hero user={user} />



        <FutureSection />

        <Footer />
      </main>
    </div>
  );
}

export default Home;