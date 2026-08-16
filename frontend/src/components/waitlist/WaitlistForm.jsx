// // function WaitlistForm() {
// //   return (
// //     <div className="mb-6 flex w-full max-w-xl rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

// //       <input
// //         type="email"
// //         placeholder="your@email.com"
// //         className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none"
// //       />

// //       <button className="rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black transition hover:scale-105">
// //         Notify Me →
// //       </button>

// //     </div>
// //   );
// // }

// // export default WaitlistForm;






// // function WaitlistForm() {
// //   return (
// //     <div
// //       className="
// //       w-full
// //       max-w-2xl
// //       rounded-[32px]
// //       border
// //       border-white/10
// //       bg-white/5
// //       p-2
// //       backdrop-blur-xl
// //       "
// //     >
// //       <div
// //         className="
// //         flex
// //         flex-col
// //         gap-3
// //         sm:flex-row
// //         "
// //       >
// //         <input
// //           type="email"
// //           placeholder="your@email.com"
// //           className="
// //           flex-1
// //           bg-transparent
// //           px-5
// //           py-4
// //           text-white
// //           placeholder:text-gray-500
// //           focus:outline-none
// //           "
// //         />

// //         <button
// //           className="
// //           rounded-full
// //           bg-[#E8C27A]
// //           px-8
// //           py-4
// //           font-semibold
// //           text-black
// //           transition-all
// //           duration-300
// //           hover:scale-105
// //           hover:shadow-[0_0_25px_rgba(232,194,122,.45)]
// //           "
// //         >
// //           Notify Me →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default WaitlistForm;





// // import { useState } from "react";
// // import SuccessCard from "./SuccessCard";

// // function WaitlistForm() {

// //   const [email, setEmail] = useState("");

// //   const [loading, setLoading] = useState(false);

// //   const [message, setMessage] = useState("");

// //   async function handleSubmit(e) {

// //     e.preventDefault();

// //     if (!email) {
// //       return;
// //     }

// //     setLoading(true);

// //     try {

// //       const response = await fetch(
// //         "http://127.0.0.1:8000/api/waitlist/",
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             email: email,
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       console.log(data);

// //       setMessage(data.message);

// //     } catch (error) {

// //       setMessage("Something went wrong.");

// //       console.error(error);

// //     } finally {

// //       setLoading(false);

// //     }

// //   }

// //   return (

// //     <form
// //       onSubmit={handleSubmit}
// //       className="mb-6 flex w-full max-w-xl rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
// //     >

// //       <input

// //         type="email"

// //         value={email}

// //         onChange={(e) => setEmail(e.target.value)}

// //         placeholder="your@email.com"

// //         className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none"

// //       />

// //       <button

// //         type="submit"

// //         disabled={loading}

// //         className="rounded-full bg-[#E8C27A] px-7 py-3 font-semibold text-black transition hover:scale-105"

// //       >

// //         {loading ? "Please Wait..." : "Notify Me →"}

// //       </button>

// //       {message && (

// //         <p className="absolute -bottom-10 left-0 text-sm text-[#E8C27A]">

// //           {message}

// //         </p>

// //       )}

// //     </form>

// //   );

// // }

// // export default WaitlistForm;










// import { useState } from "react";
// import SuccessCard from "./SuccessCard";

// function WaitlistForm() {
//   const [email, setEmail] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");

//   const [successData, setSuccessData] = useState(null);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     setError("");

//     // Email validation
//     if (!email.trim()) {
//       setError("Please enter your email.");
//       return;
//     }

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/waitlist/",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             email,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.detail || "Something went wrong."
//         );
//       }

//       setSuccessData(data);

//       setEmail("");

//     } catch (err) {

//       setError(err.message);

//       console.error(err);

//     } finally {

//       setLoading(false);

//     }
//   }


//   if (successData) {
//     return (
//       <SuccessCard
//         queuePosition={successData.queue_position}
        
//         referralLink={`http://localhost:5173/ref/${successData.referral_code}`}
//       />
//     );
//   }

//   return (
//     <div className="w-full max-w-xl">

//       <form
//         onSubmit={handleSubmit}
//         className="
//         flex
//         rounded-full
//         border
//         border-white/10
//         bg-white/5
//         p-2
//         backdrop-blur-xl
//         "
//       >
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="your@email.com"
//           className="
//           flex-1
//           bg-transparent
//           px-6
//           py-3
//           text-white
//           placeholder:text-gray-500
//           focus:outline-none
//           "
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="
//           rounded-full
//           bg-[#E8C27A]
//           px-8
//           py-3
//           font-semibold
//           text-black
//           transition
//           duration-300
//           hover:scale-105
//           disabled:cursor-not-allowed
//           disabled:opacity-60
//           "
//         >
//           {loading ? "Joining..." : "Notify Me →"}
//         </button>
//       </form>

//       {error && (
//         <p className="mt-4 text-center text-sm text-red-400">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

// export default WaitlistForm;











// // import GlassCard from "../common/GlassCard";

// // function WaitlistForm() {
// //   return (
// //     <GlassCard className="w-full max-w-2xl p-2">

// //       <div className="flex items-center gap-2">

// //         <input
// //           type="email"
// //           placeholder="your@email.com"
// //           className="
// //             flex-1
// //             bg-transparent
// //             px-6
// //             py-5
// //             text-lg
// //             text-white
// //             placeholder:text-white/35
// //             focus:outline-none
// //           "
// //         />

// //         <button
// //           className="
// //             rounded-full
// //             bg-[#E8C27A]
// //             px-8
// //             py-4
// //             font-semibold
// //             text-black
// //             transition-all
// //             duration-300
// //             hover:scale-105
// //             hover:shadow-[0_0_40px_rgba(232,194,122,.45)]
// //             active:scale-95
// //           "
// //         >
// //           Notify Me →
// //         </button>

// //       </div>

// //     </GlassCard>
// //   );
// // }

// // export default WaitlistForm;


// // import Button from "../ui/Button";
// // import Input from "../ui/Input";

// // function WaitlistForm() {
// //   return (
// //     <div
// //       className="
// //       mb-6
// //       flex
// //       w-full
// //       max-w-2xl
// //       items-center
// //       rounded-full
// //       border
// //       border-[var(--border)]
// //       bg-[var(--glass)]
// //       p-2
// //       backdrop-blur-xl
// //       "
// //     >
// //       <Input
// //         type="email"
// //         placeholder="your@email.com"
// //       />

// //       <Button>
// //         Notify Me →
// //       </Button>
// //     </div>
// //   );
// // }

// // export default WaitlistForm;



import { useState } from "react";
import SuccessCard from "./SuccessCard";
import ExperienceQuestions from "./ExperienceQuestions";

function WaitlistForm() {
  const [email, setEmail] =useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [successData, setSuccessData] = useState(null);

  const [showExperience, setShowExperience] = useState(false);

  // Read referral code if user opened a referral link
  // const referralCode = localStorage.getItem("referralCode");
  const referralCode =
  sessionStorage.getItem("referralCode") ||
  localStorage.getItem("referralCode");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        // "http://127.0.0.1:8000/api/waitlist/",
        "https://indiquant-waitlist-backend.onrender.com/api/waitlist/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            referral_code: referralCode, // <-- NEW
          }),
        }
      );

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(
  //         data.detail || "Something went wrong."
  //       );
  //     }

  //     setSuccessData(data);

  //     localStorage.setItem(
  //     "myReferralCode",
  //     data.referral_code      
  //  );

  //     setEmail("");


  const data = await response.json();

if (!response.ok) {
  throw new Error(
    data.detail || "Something went wrong."
  );
}

// =========================
// Debug Logs
// =========================

console.log("Backend Response:", data);

console.log("Referral Code:", data.referral_code);

// localStorage.setItem(
//   "myReferralCode",
//   data.referral_code
// );

// localStorage.setItem(
//   "waitlistJoined",
//   "true"
// );

sessionStorage.setItem(
  "myReferralCode",
  data.referral_code
);

sessionStorage.setItem(
  "waitlistJoined",
  "true"
);

console.log(
  "Saved:",
  sessionStorage.getItem("myReferralCode")
);

// =========================

setSuccessData(data);

setEmail("");

setShowExperience(true);  //  change here

    } catch (err) {

      setError(
        err.message || "Something went wrong."
      );

      console.error(err);

    } finally {

      setLoading(false);

    }
  }

  // Show Success Card




  // if (successData) {
  //   return (
  //     <SuccessCard
  //       queuePosition={successData.queue_position}
        
  //       referralLink={`https://join.indiquantresearch.in/ref/${successData.referral_code}`}
        
  //     />
  //   );
  // }



  if (showExperience) {
  return (
    <ExperienceQuestions
      email={successData.email}
      onComplete={() => {
        setShowExperience(false);
      }}
    />
  );
}

if (successData) {
  return (
    <SuccessCard
      queuePosition={successData.queue_position}
      referralLink={`https://join.indiquantresearch.in/ref/${successData.referral_code}`}
    />
  );
}




  return (
    <div className="w-full max-w-xl  px-2 sm:px-0"> {/* Change here */}

      {/* Referral Badge */}

      {referralCode && (
        <div
          className="
          mb-5
          rounded-full
          border
          border-[#E8C27A]/30
          bg-[#E8C27A]/10
          px-5
          py-3
          text-center
          text-sm
          font-medium
          text-[#E8C27A]
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(232,194,122,.12)]
          "
        >
          ✨ You've been invited by a friend.
          Join now for priority access.
        </div>
      )}

      {/* <form
        onSubmit={handleSubmit}
        className="
        flex
        rounded-full
        border
        border-white/10
        bg-white/5
        p-2
        backdrop-blur-xl
        transition-all
        duration-300
        focus-within:border-[#E8C27A]/40
        focus-within:shadow-[0_0_30px_rgba(232,194,122,.12)]
        "
      > */}
      <form
  onSubmit={handleSubmit}
  className="
    flex
    flex-col
    gap-3

    sm:flex-row
    sm:gap-0

    rounded-[30px]
    sm:rounded-full

    border
    border-white/10
    bg-white/5

    p-2

    backdrop-blur-xl

    transition-all
    duration-300

    focus-within:border-[#E8C27A]/40
    focus-within:shadow-[0_0_30px_rgba(232,194,122,.12)]
  "
>
        <input
          type="email"
          disabled={loading}
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="your@email.com"
          // className="
          // flex-1
          // bg-transparent
          // px-6
          // py-3
          // text-white
          // placeholder:text-gray-500
          // focus:outline-none
          // disabled:opacity-70
          // "
          className="
w-full
sm:flex-1

bg-transparent

px-6
py-4

text-white
placeholder:text-gray-500

focus:outline-none

disabled:opacity-70
"
        />

        <button
          type="submit"
          disabled={loading}
          // className="
          // rounded-full
          // bg-[#E8C27A]
          // px-8
          // py-3
          // font-semibold
          // text-black
          // transition-all
          // duration-300
          // hover:scale-105
          // hover:shadow-[0_0_25px_rgba(232,194,122,.35)]
          // disabled:cursor-not-allowed
          // disabled:opacity-60
          // "

          className="
w-full
sm:w-auto

rounded-full

bg-[#E8C27A]

px-8
py-4

font-semibold
text-black

transition-all
duration-300

hover:scale-105
hover:shadow-[0_0_25px_rgba(232,194,122,.35)]

disabled:cursor-not-allowed
disabled:opacity-60
"
        >
          {loading ? "Joining..." : "Notify Me →"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-center text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}

export default WaitlistForm;