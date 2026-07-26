import { Heart, ShieldCheck, Star, Zap } from "lucide-react";

const features = [
  {
    title: "Trust",
    icon: ShieldCheck,
    color: "text-amber500",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    title: "Speed",
    icon: Zap,
    color: "text-yellow-500",
    desc: "We obsess over delivery times so your orders arrive exactly when promised.",
  },
  {
    title: "Community",
    icon: Heart,
    color: "text-amber500",
    desc: "Built around real customer feedback—not just business metrics.",
  },
  {
    title: "Quality",
    icon: Star,
    color: "text-yellow-500",
    desc: "Only the best products make it into our catalog. No filler. No junk.",
  },
];

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl bg-black text-white">
      {/* Story Section */}
      <section className="rounded-3xl border border-white bg-[#0F0F0F] p-6 sm:p-8 md:p-12 lg:p-14">
        <h2 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Our Story
        </h2>

        <div className="space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-neutral-400">
          <p>
            SkyMart started in 2022 as a small side project—two engineers tired
            of bloated, slow e-commerce experiences. We asked ourselves,
            <span className="font-medium text-white">
              {" "}
              what if shopping online was actually enjoyable?
            </span>
          </p>

          <p>
            Three years later, SkyMart proudly serves over
            <span className="font-semibold text-white"> 50,000+</span> customers
            across the country with electronics, fashion, jewelry, and everyday
            essentials.
          </p>

          <p>
            Although we've grown, our mission remains the same: delivering
            premium products, lightning-fast service, and an experience
            customers genuinely love.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-3xl border border-white bg-[#0F0F0F] p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-amber600"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 ${item.color}`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-7 text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
