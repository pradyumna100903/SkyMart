import { Link, useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";

const CallToActionBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl bg-black text-white mb-20">
      <div className="rounded-3xl border border-white px-6 py-10 sm:px-8 sm:py-8 lg:px-10 lg:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Ready to shop?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-7 text-neutral-400">
          Explore thousands of products at unbeatable prices.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm sm:text-base cursor-pointer font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
        >
          Browse Products
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
