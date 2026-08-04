// import CountUp from "react-countup";

// function Counter() {
//   return (
//     <p className="mt-2 text-gray-400">

//       <CountUp
//         end={2419}
//         duration={3}
//         separator=","
//       />

//       {" "}people already on the waitlist.

//     </p>
//   );
// }

// export default Counter;




// function Counter() {
//   return (
//     <p className="mt-2 text-gray-400">
//       <span className="font-semibold text-white">2,419</span>{" "}
//       people already on the waitlist.
//     </p>
//   );
// }

// export default Counter;




// function Counter() {
//   return (
//     <p
//       className="
//       mt-5
//       text-sm
//       sm:text-base
//       text-gray-400
//       "
//     >
//       <span className="font-semibold text-white">
//         2,419
//       </span>{" "}
//       people have already joined the waitlist.
//     </p>
//   );
// }

// export default Counter;

// import CountUp from "react-countup";
// import { default as CountUp } from "react-countup";













// import { Users } from "lucide-react";

// function Counter({ user }) {
//   return (
//     <div
//       className="
//       mt-8
//       inline-flex
//       items-center
//       gap-3
//       rounded-full
//       border
//       border-white/10
//       bg-white/5
//       px-6
//       py-3
//       backdrop-blur-2xl
//       shadow-[0_0_25px_rgba(232,194,122,.08)]
//       "
//     >
//       <div
//         className="
//         flex
//         h-10
//         w-10
//         items-center
//         justify-center
//         rounded-full
//         bg-[#E8C27A]/10
//         "
//       >
//         <Users
//           size={18}
//           className="text-[#E8C27A]"
//         />
//       </div>

//       <p className="text-sm text-gray-300 md:text-base">
//         <span className="text-lg font-semibold text-white">


//           <span>{user?.total_users || 0}</span>
//         </span>

//         {" "}people have already joined the waitlist.
//       </p>
//     </div>
//   );
// }

// export default Counter;




import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { getWaitlistStats } from "../../services/waitlistApi";

function Counter() {

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {

    async function loadStats() {

      try {

        const data = await getWaitlistStats();

        setTotalUsers(data.total_users);

      } catch (err) {

        console.error(err);

      }

    }

    loadStats();

    const interval = setInterval(
      loadStats,
      30000
    );

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      className="
      mt-8
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/5
      px-6
      py-3
      backdrop-blur-2xl
      shadow-[0_0_25px_rgba(232,194,122,.08)]
      "
    >

      <div
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-[#E8C27A]/10
        "
      >

        <Users
          size={18}
          className="text-[#E8C27A]"
        />

      </div>

      <p className="text-sm text-gray-300 md:text-base">

        <span className="text-lg font-semibold text-white">

          {totalUsers.toLocaleString()}

        </span>{" "}

        people have already joined the waitlist.

      </p>

    </div>

  );

}

export default Counter;



















// function Counter() {
//   return (
//     <p className="mt-4 text-[var(--secondary)]">
//       <span className="font-semibold text-white">
//         2,419
//       </span>{" "}
//       professionals already joined the waitlist.
//     </p>
//   );
// }

// export default Counter;