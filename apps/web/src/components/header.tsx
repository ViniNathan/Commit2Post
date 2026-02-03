"use client";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center font-sans uppercase tracking-tight">
      <div className="flex items-center gap-2">
        <span className="font-black text-white/90 text-lg sm:text-xl tracking-tight">
          Commit2Post
        </span>
        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_0_12px_rgba(252,211,77,0.6)]" />
      </div>

      <button
        type="button"
        className="cursor-pointer px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 border border-amber-300/50 text-amber-300/95 backdrop-blur-sm hover:bg-gradient-to-br hover:from-amber-300 hover:to-amber-500 hover:text-black hover:shadow-[0_0_24px_rgba(252,211,77,0.5)]"
      >
        Get Started
      </button>
    </header>
  );
};

export default Header;