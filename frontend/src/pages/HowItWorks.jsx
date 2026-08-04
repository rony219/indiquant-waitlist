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
          title="Verify Your Identity"
          description="Complete a one-time identity verification to ensure every assessment is securely linked to your profile and prevent duplicate registrations."
          image="/images/verify.jpg"
        />

        <HowStep
          reverse
          number="02"
          title="Complete Assessments"
          description="Showcase your abilities through aptitude tests, coding challenges, and practical real-world tasks designed to evaluate genuine skills."
          image="/images/assesments.jpg"
        />

        <HowStep
          number="03"
          title="Compete Live"
          description="Participate in recruitment tournaments where performance, consistency, and teamwork help you stand out from other candidates."
          image="/images/tournament.jpg"
        />

        <HowStep
          reverse
          number="04"
          title="Get Interview Opportunities"
          description="Top performers receive interview invitations, early hiring opportunities, and exclusive access to upcoming recruitment events."
          image="/images/interview.jpg"
        />

      </main>

      <Footer />

    </div>
  );
}

export default HowItWorks;