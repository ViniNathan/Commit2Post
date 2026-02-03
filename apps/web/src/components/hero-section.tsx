import React from "react";
import {
  FullScreenScrollFX,
  type FullScreenFXAPI,
} from "@/components/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Commit",
    title: <>Push Your Work</>,
    rightLabel: "GitHub",
    background: "",
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0d0d0d]" />
    ),
  },
  {
    leftLabel: "Analyze",
    title: <>AI Magic</>,
    rightLabel: "Agent",
    background: "",
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#111111]" />
    ),
  },
  {
    leftLabel: "Generate",
    title: <>Craft Your Post</>,
    rightLabel: "LinkedIn",
    background: "",
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a]" />
    ),
  },
  {
    leftLabel: "Share",
    title: <>Go Viral</>,
    rightLabel: "Growth",
    background: "",
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
    ),
  },
];

export default function HeroSection() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  React.useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 30) return;

      isScrolling = true;

      if (delta > 0) {
        apiRef.current?.next();
      } else {
        apiRef.current?.prev();
      }

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <FullScreenScrollFX
      apiRef={apiRef}
      sections={sections}
      header={
        <>
          <div>From Code</div>
          <div>To Post</div>
        </>
      }
      footer={
        <div className="text-[clamp(0.9rem,2vw,1.2rem)] font-medium opacity-80">
          Developer Experience Reimagined
        </div>
      }
      showProgress
      colors={{
        text: "rgba(255,255,255,0.95)",
        overlay: "rgba(0,0,0,0.45)",
        pageBg: "#0a0a0a",
        stageBg: "#000000",
      }}
    />
  );
}