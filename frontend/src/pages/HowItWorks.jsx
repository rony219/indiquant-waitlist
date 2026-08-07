// import Background from "../components/background/Background";
// import Navbar from "../components/common/Navbar";

// import HowHero from "../components/howitworks/HowHero";
// import HowStep from "../components/howitworks/HowStep";
// import useLenis from "../hooks/useLenis";




// function HowItWorks() {
//   useLenis();



//   return (
//     <div className="relative min-h-screen bg-[var(--bg)] text-white">

//       <Background />

//       <Navbar />

//       <main className="relative z-10">

//         <HowHero />

//         <HowStep
//           number="01"
//           title="Verify Your Identity"
//           description="Secure your profile once. Every assessment is permanently linked to your identity."
//           image="/images/verify.jpg"
//         />

//         <HowStep
//           reverse
//           number="02"
//           title="Complete Assessments"
//           description="Coding challenges, aptitude tests, and real-world problem solving."
//           image="/images/assesments.jpg"
//         />

//         <HowStep
//           number="03"
//           title="Compete Live"
//           description="Participate in recruitment tournaments and showcase your abilities."
//           image="/images/tournament.jpg"
//         />

//         <HowStep
//           reverse
//           number="04"
//           title="Get Interview Opportunities"
//           description="Top candidates receive interview invitations and early access."
//           image="/images/interview.jpg"
//         />

//       </main>
//     </div>
//   );
// }

// export default HowItWorks;

import Background from "../components/background/Background";
import Navbar from "../components/common/Navbar";

import HowHero from "../components/howitworks/HowHero";
import HowStep from "../components/howitworks/HowStep";
import SectionDivider from "../components/common/SectionDivider";
import Footer from "../components/common/Footer";
import useLenis from "../hooks/useLenis";


function HowItWorks() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-white">

      <Background />

      <Navbar />

      <main className="relative z-10">

        <HowHero />
        <SectionDivider />

        <HowStep
          number="01"
          title="Every Great Quant Starts With One Idea"
          description="Become part of a community of researchers, traders, and data scientists building the future of quantitative intelligence."
          image="/images/verify2.jpg"
        />

        <HowStep
          reverse
          number="02"
          title="Turn Data Into Decisions"
          description="Develop, backtest, and refine quantitative models using institutional-grade research tools and market data."
          image="/images/assesments1.jpg"
        />

        <HowStep
          number="03"
          title="Let the Numbers Decide"
          description="Our AI continuously evaluates every model, separating robust signals from market noise."
          image="/images/tournament2.jpg"
        />

        <HowStep
          reverse
          number="04"
          title="Performance Speaks Loudest"
          description="The highest-performing research rises through merit and contributes to the future of systematic investing."
          image="/images/interview2.jpg"
        />

      </main>

      <Footer />

    </div>
  );
}

export default HowItWorks;