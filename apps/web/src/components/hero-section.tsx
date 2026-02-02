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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #000000 0%, #0d0d0d 100%)",
        }}
      />
    ),
  },
  {
    leftLabel: "Analyze",
    title: <>AI Magic</>,
    rightLabel: "Agent",
    background: "",
    renderBackground: () => (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)",
        }}
      />
    ),
  },
  {
    leftLabel: "Generate",
    title: <>Craft Your Post</>,
    rightLabel: "LinkedIn",
    background: "",
    renderBackground: () => (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
        }}
      />
    ),
  },
  {
    leftLabel: "Share",
    title: <>Go Viral</>,
    rightLabel: "Growth",
    background: "",
    renderBackground: () => (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        }}
      />
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
        <div
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
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