import { Suspense, lazy } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
// Note: The Canvas-specific Loader uses @react-three/drei <Html>,
// which requires a Canvas context. For Suspense outside Canvas,
// use a simple DOM-based fallback instead.

const Hero3D = lazy(() => import("../components/Hero3D"));

const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <Suspense
        fallback={
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-700 border-t-white" />
            <span className="sr-only">Loading 3D…</span>
          </div>
        }
      >
        <Hero3D />
      </Suspense>
    </section>
  );
};

export default Hero;
