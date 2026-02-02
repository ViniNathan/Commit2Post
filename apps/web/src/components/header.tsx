"use client";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center"
      style={{
        fontFamily:
          '"Rubik Wide", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        textTransform: "uppercase",
        letterSpacing: "-0.02em",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="font-black text-white/90 text-xl tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Commit2Post
        </span>
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: "linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)",
            boxShadow: "0 0 12px rgba(252, 211, 77, 0.6)",
          }}
        />
      </div>

      <button
        type="button"
        className="cursor-pointer px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
        style={{
          border: "1px solid rgba(252, 211, 77, 0.5)",
          color: "rgba(252, 211, 77, 0.95)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)";
          e.currentTarget.style.color = "#000";
          e.currentTarget.style.boxShadow =
            "0 0 24px rgba(252, 211, 77, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "transparent";
          e.currentTarget.style.color = "rgba(252, 211, 77, 0.95)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Get Started
      </button>
    </header>
  );
};

export default Header;