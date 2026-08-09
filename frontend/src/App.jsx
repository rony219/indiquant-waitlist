// import Background from "./components/background/Background";
// import Hero from "./components/hero/Hero";

// function App() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
//       <Background />

//       <main className="relative z-50">
//         <Hero />
//       </main>
//     </div>
//   );
// }

// export default App;







// import "./App.css";

// import Background from "./components/background/Background";
// import Hero from "./components/hero/Hero";

// import Journey from "./components/sections/Journey";
// import useLenis from "./hooks/useLenis";
// import FutureSection from "./components/sections/FutureSection";
// import Navbar from "./components/common/Navbar";
// import SectionDivider from "./components/common/SectionDivider";



// function App() {
//   useLenis();

//   return (
//     <div className="relative min-h-screen  bg-[var(--bg)] text-[var(--white)]">
//       <Background />

//       <main className="relative z-10">
//         <Navbar />
//         <Hero />
        
//         <Journey />
//         <SectionDivider />
//         <FutureSection />
//       </main>
//     </div>
//   );
// }

// export default App;





// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import HowItWorks from "./pages/HowItWorks";
// import WaitlistJourney from "./pages/WaitlistJourney";
// import SneakPeek from "./pages/SneakPeek";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/how-it-works"
//           element={<HowItWorks />}
//         />

//         <Route
//           path="/waitlist-journey"
//           element={<WaitlistJourney />}
//         />

//         <Route
//           path="/sneak-peek"
//           element={<SneakPeek />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;














// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import HowItWorks from "./pages/HowItWorks";
// import WaitlistJourney from "./pages/WaitlistJourney";
// import SneakPeek from "./pages/SneakPeek";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

        
//         <Route
//           path="/ref/:referralCode"
//           element={<Home />}
//         />

//         <Route
//           path="/how-it-works"
//           element={<HowItWorks />}
//         />

//         <Route
//           path="/waitlist-journey"
//           element={<WaitlistJourney />}
//         />

//         <Route
//           path="/sneak-peek"
//           element={<SneakPeek />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








import "./App.css";

import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import WaitlistJourney from "./pages/WaitlistJourney";
import SneakPeek from "./pages/SneakPeek";


function ReferralTracker() {
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(
      /^\/ref\/([^/]+)$/
    );

    if (match) {
      const referralCode = match[1];

      localStorage.setItem(
        "referralCode",
        referralCode
      );

      console.log(
        "Referral code saved:",
        referralCode
      );
    }
  }, [location.pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>

      {/* Track referral links */}
      <ReferralTracker />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Referral Link */}
        <Route
          path="/ref/:referralCode"
          element={<Home />}
        />

        {/* How It Works */}
        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        {/* Waitlist Journey */}
        <Route
          path="/waitlist-journey"
          element={<WaitlistJourney />}
        />

        {/* Sneak Peek */}
        <Route
          path="/sneak-peek"
          element={<SneakPeek />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;