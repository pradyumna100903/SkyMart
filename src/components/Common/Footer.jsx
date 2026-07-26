import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-center py-8 border-t border-white ">
      <div className="flex flex-col items-center justify-center gap-1.5 px-4">
        {/* Brand Name */}
        <h3 className="text-2xl font-bold text-amber-600 tracking-wide select-none">
          SkyMart
        </h3>

        {/* Copyright & Tech Stack Info */}
        <p className="text-[10px] sm:text-xl text-white font-medium tracking-tight ">
          © 2026 SkyMart • Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
