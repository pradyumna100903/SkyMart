import React from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const WelcomeBanner = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning 👋";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon 👋";
    } else if (hour >= 17 && hour < 24) {
      return "Good Evening 👋";
    } else {
      return "Good Night 🌙";
    }
  };

  return (
    <div
      className="
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    py-6
    sm:py-8
    "
    >
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-[#0f0f0f]
        p-5
        sm:p-8
        lg:p-12
        border
        border-white/20
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
            w-full
            lg:w-2/3
            text-center
            lg:text-left
            "
          >
            <p
              className="
              flex
              justify-center
              lg:justify-start
              items-center
              gap-2
              text-amber-400
              font-semibold
              uppercase
              tracking-widest
              text-xs
              sm:text-sm
              mb-4
              "
            >
              <ShoppingBag size={16} />
              {getGreeting()}
            </p>

            <h1
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              "
            >
              Welcome Back,
              <br />
              <span className="text-amber-400">{currentUser?.fullname}</span>
            </h1>

            <p
              className="
              mt-5
              mx-auto
              lg:mx-0
              max-w-xl
              text-neutral-400
              text-sm
              sm:text-base
              leading-7
              "
            >
              Discover today's best products from Electronics, Fashion,
              Jewellery and more. Enjoy premium quality with exciting offers.
            </p>

            {/* BUTTONS */}

            <div
              className="
              mt-7
              flex
              flex-col
              sm:flex-row
              justify-center
              lg:justify-start
              gap-4
              "
            >
              <NavLink to="/shop">
                <button
                  className="
                  w-full
                  sm:w-auto
                  px-6
                  py-3
                  rounded-full
                  bg-amber-400
                  text-black
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-amber-300
                  transition
                  cursor-pointer
                  "
                >
                  Shop Now
                  <ArrowRight size={18} />
                </button>
              </NavLink>

              <NavLink to="/shop">
                <button
                  className="
                  w-full
                  sm:w-auto
                  px-6
                  py-3
                  rounded-full
                  border
                  border-neutral-700
                  text-white
                  hover:bg-neutral-900
                  transition
                  cursor-pointer
                  "
                >
                  View All Products
                </button>
              </NavLink>
            </div>
          </div>

          {/* RIGHT CARDS */}

          <div
            className="
            flex
            flex-row
            lg:flex-col
            justify-center
            gap-4
            w-full
            lg:w-auto
            "
          >
            {/* Products */}

            <div
              className="
              flex-1
              lg:w-44
              rounded-2xl
              border
              border-amber-400/20
              bg-amber-400/5
              p-4
              sm:p-5
              text-center
              "
            >
              <h2
                className="
                text-3xl
                sm:text-4xl
                font-bold
                text-amber-400
                "
              >
                20+
              </h2>

              <p
                className="
                mt-2
                text-[10px]
                sm:text-xs
                uppercase
                tracking-wider
                text-neutral-400
                "
              >
                Products
              </p>
            </div>

            {/* Delivery */}

            <div
              className="
              flex-1
              lg:w-44
              rounded-2xl
              border
              border-neutral-700
              bg-neutral-900
              p-4
              sm:p-5
              text-center
              "
            >
              <h2
                className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
                "
              >
                Free
              </h2>

              <p
                className="
                mt-2
                text-[10px]
                sm:text-xs
                uppercase
                tracking-wider
                text-neutral-400
                "
              >
                Delivery ₹999+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
