// import Background from "../components/background/Background";
// import Navbar from "../components/common/Navbar";

// import JourneyHero from "../components/waitlistJourney/JourneyHero";
// import QueueCard from "../components/waitlistJourney/QueueCard";
// import ReferralTimeline from "../components/waitlistJourney/ReferralTimeline";
// import ReferralNetwork from "../components/waitlistJourney/ReferralNetwork";
// import Footer from "../components/common/Footer";
// import useLenis from "../hooks/useLenis";

// function WaitlistJourney() {
//   useLenis();
//   return (
//     <div className="relative min-h-screen bg-[var(--bg)] text-white">

//       <Background />

//       <Navbar />

//       <main className="relative z-10">

//         <JourneyHero />

//         <QueueCard />

//         <ReferralTimeline />

//         <ReferralNetwork />

//         <Footer />

//       </main>

//     </div>
//   );
// }

// export default WaitlistJourney;





import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Background from "../components/background/Background";

import JourneyHero from "../components/waitlistJourney/JourneyHero";
import QueueCard from "../components/waitlistJourney/QueueCard";
import ReferralNetwork from "../components/waitlistJourney/ReferralNetwork";
import ReferralTimeline from "../components/waitlistJourney/ReferralTimeline";

import useWaitlist from "../hooks/useWaitlist";
import useLenis from "../hooks/useLenis";

function WaitlistJourney() {
    useLenis();

    const {
        user,
        loading,
        error,
    } = useWaitlist();

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center text-red-400">
                {error}
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[var(--bg)] text-white">

            <Background />

            <Navbar />

            <JourneyHero user={user} />

            <QueueCard user={user} />

            <ReferralNetwork user={user} />

            <ReferralTimeline user={user} />

            <Footer />

        </div>
    );
}

export default WaitlistJourney;




// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";
// import Background from "../components/background/Background";

// import JourneyHero from "../components/waitlistJourney/JourneyHero";
// import QueueCard from "../components/waitlistJourney/QueueCard";
// import ReferralNetwork from "../components/waitlistJourney/ReferralNetwork";
// import ReferralTimeline from "../components/waitlistJourney/ReferralTimeline";
// import EmptyWaitlist from "../components/waitlistJourney/EmptyWaitlist";

// import useWaitlist from "../hooks/useWaitlist";
// import useLenis from "../hooks/useLenis";

// function WaitlistJourney() {
//   useLenis();

//   const {
//     user,
//     loading,
//     error,
//   } = useWaitlist();

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-red-400">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen bg-[var(--bg)] text-white">

//       <Background />

//       <Navbar />

//       {/* USER HAS NOT JOINED */}

//       {!user ? (
//         <EmptyWaitlist />
//       ) : (
//         <>
//           <JourneyHero user={user} />

//           <QueueCard user={user} />

//           <ReferralNetwork user={user} />

//           <ReferralTimeline user={user} />
//         </>
//       )}

//       <Footer />

//     </div>
//   );
// }

// export default WaitlistJourney;