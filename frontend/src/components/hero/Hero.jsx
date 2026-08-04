// import HeroBadge from "./HeroBadge";
// import HeroHeading from "./HeroHeading";
// import HeroDescription from "./HeroDescription";
// import WaitlistForm from "../waitlist/WaitlistForm";
// import Counter from "../waitlist/Counter";
// import ScrollIndicator from "./ScrollIndicator";

// function Hero() {
//   return (
//     <section className="relative flex min-h-screen items-center justify-center px-6">
//       <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

//         <HeroBadge />

//         <HeroHeading />

//         <HeroDescription />

//         <WaitlistForm />

//         <Counter />

//         <ScrollIndicator />

//       </div>
//     </section>
//   );
// }

// export default Hero;

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import WaitlistForm from "../waitlist/WaitlistForm";
import Counter from "../waitlist/Counter";
import ScrollIndicator from "./ScrollIndicator";
import Container from "../common/Container";

function Hero({ user }) {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      py-24
      md:py-32
      lg:py-40
      "
    >
      
      <Container className="px-5 sm:px-6 lg:px-8"> {/* change here */}
        <div className="flex flex-col items-center text-center">

          <HeroBadge />

          <HeroHeading />

          <HeroDescription />

          <WaitlistForm />

          {/* <Counter /> */}
          <Counter user={user} />

          <ScrollIndicator />

        </div>
      </Container>
    </section>
  );
}

export default Hero;

// import Container from "../ui/Container";
// import HeroBadge from "./HeroBadge";
// import HeroHeading from "./HeroHeading";
// import HeroDescription from "./HeroDescription";
// import WaitlistForm from "../waitlist/WaitlistForm";
// import Counter from "../waitlist/Counter";
// import ScrollIndicator from "./ScrollIndicator";

// function Hero() {
//   return (
//     <section className="relative flex min-h-screen items-center justify-center">
//       <Container>
//         <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

//           <HeroBadge />

//           <HeroHeading />

//           <HeroDescription />

//           <WaitlistForm />

//           <Counter />

//           <ScrollIndicator />

//         </div>
//       </Container>
//     </section>
//   );
// }

// export default Hero;