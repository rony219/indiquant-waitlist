// import Aurora from "./Aurora";
// import Grid from "./Grid";
// import MouseGlow from "./MouseGlow";
// import Noise from "./Noise";
// import Particles from "./Particles";

// function Background() {
//   return (
//     <>
//       <Grid />
//       <Aurora />
//       <Particles />
//       <MouseGlow />
//       <Noise />
//     </>
//   );
// }

// export default Background;

import Aurora from "./Aurora";
import Grid from "./Grid";
import MouseGlow from "./MouseGlow";
import Noise from "./Noise";
import Particles from "./Particles";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Grid />
      <Aurora />
      <Particles />
      <MouseGlow />
      <Noise />
    </div>
  );
}

export default Background;