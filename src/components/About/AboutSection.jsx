import React from "react";
import { Link } from "react-router";
import { ShoppingBag, Package, Users, Star, Truck } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "20K+",
    label: "Products",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Customers",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Rating",
  },
  {
    icon: Truck,
    value: "99%",
    label: "On-Time Delivery",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <Link
          to="/"
          className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ShoppingBag size={28} />
        </Link>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
          About <span className="text-amber-600">SkyMart</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 sm:leading-6 text-gray-400">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 justify-items-center">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-full max-w-125 rounded-2xl border border-white bg-[#181818] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-600"
              >
                <Icon className="mx-auto text-amber-600" size={26} />

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
