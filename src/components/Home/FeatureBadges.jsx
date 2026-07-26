import React from "react";
import { Zap, ShieldCheck, Tag } from "lucide-react";

const FeatureBadges = () => {
  const badges = [
    {
      id: 1,
      icon: Zap,
      title: "Fast Delivery",
      desc: "Same-day on select items",
      iconColor: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "100% encrypted checkout",
      iconColor: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      id: 3,
      icon: Tag,
      title: "Best Prices",
      desc: "Price-match guarantee",
      iconColor: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <section className="w-full bg-black py-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <div
                key={badge.id}
                className="
                  w-full
                  min-h-22.5
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  border
                  border-white
                  bg-[#111111]
                  px-6
                  py-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:shadow-xl
                "
              >
                <div
                  className={`
                    h-12
                    w-12
                    rounded-xl
                    ${badge.bg}
                    flex
                    items-center
                    justify-center
                    shrink-0
                  `}
                >
                  <Icon size={24} className={badge.iconColor} />
                </div>

                <div className="flex-1">
                  <h4 className="text-white text-lg font-semibold">
                    {badge.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBadges;
