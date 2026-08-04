import Background from "../components/background/Background";
import Navbar from "../components/common/Navbar";

import PreviewHero from "../components/preview/PreviewHero";
import PlatformPreview from "../components/preview/PlatformPreview";
import FeatureGrid from "../components/preview/FeatureGrid";
import ComingSoon from "../components/preview/ComingSoon";
import PreviewCTA from "../components/preview/PreviewCTA";
import Footer from "../components/common/Footer";
import useLenis from "../hooks/useLenis";

function SneakPeek() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-white">

      <Background />

      <Navbar />

      <main className="relative z-10">

        <PreviewHero />

        <PlatformPreview />

        <FeatureGrid />

        <ComingSoon />

        <PreviewCTA />

        <Footer />

      </main>

    </div>
  );
}

export default SneakPeek;