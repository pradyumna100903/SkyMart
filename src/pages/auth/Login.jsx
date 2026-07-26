import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MyStore } from "../../context/MyStore";

const Login = () => {
  const navigate = useNavigate();

  const { showPassword, setShowPassword } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      toast.success("Login successful! Welcome back 👋");

      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }

    reset();
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        lg:flex-row
        bg-[#080808]
        text-white
        font-sans
      "
    >
      {/* =====================================================
          LEFT SIDE
          Hidden on mobile/tablet
      ====================================================== */}

      <div
        className="
          hidden
          lg:flex
          relative
          w-1/2
          min-h-screen
          flex-col
          justify-between
          overflow-hidden
          px-10
          xl:px-16
          py-10
          xl:py-12
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            -left-32
            top-1/3
            h-72
            w-72
            rounded-full
            bg-amber-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-80
            w-80
            rounded-full
            bg-amber-600/10
            blur-[130px]
          "
        />

        {/* Logo */}

        <div className="relative z-10 flex items-center gap-3">
          <div
            className="
              h-12
              w-12
              rounded-xl
              bg-amber-600
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <ShoppingBag size={22} className="text-black" />
          </div>

          <h2 className="text-3xl font-bold tracking-wide">
            Sky<span className="text-amber-600">Mart</span>
          </h2>
        </div>

        {/* Hero */}

        <div
          className="
            relative
            z-10
            flex-1
            flex
            flex-col
            justify-center
            py-14
            max-w-xl
          "
        >
          <p
            className="
              uppercase
              tracking-[5px]
              text-xs
              font-bold
              text-amber-400
              mb-6
            "
          >
            Welcome Back
          </p>

          <h1
            className="
              text-4xl
              lg:text-5xl
              xl:text-7xl
              font-extrabold
              leading-[1.05]
            "
          >
            Shop the future.
            <br />
            <span className="text-amber-600">Today.</span>
          </h1>

          <p
            className="
              mt-8
              max-w-md
              text-gray-400
              text-base
              xl:text-lg
              leading-8
            "
          >
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>

        {/* Stats */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-3
            gap-4
            mt-10
          "
        >
          {[
            ["20K+", "Products"],
            ["50K+", "Users"],
            ["4.9★", "Rating"],
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#0F0F0F]
                p-5
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:border-amber-600
              "
            >
              <h3
                className="
                  text-2xl
                  xl:text-3xl
                  font-bold
                  text-amber-600
                "
              >
                {item[0]}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  uppercase
                  tracking-widest
                  text-gray-400
                "
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          DIVIDER
          Hidden on mobile/tablet
      ====================================================== */}

      <div
        className="
          hidden
          lg:flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-full
            w-px
            bg-white/20
          "
        />
      </div>

      {/* =====================================================
          RIGHT SIDE / LOGIN FORM
      ====================================================== */}

      <div
        className="
          w-full
          lg:w-1/2
          min-h-screen
          flex
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          py-8
          sm:py-10
        "
      >
        <div
          className="
            w-full
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            sm:p-8
            md:p-10
            shadow-2xl
          "
        >
          {/* Heading */}

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
            "
          >
            Sign in
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              mt-2
            "
          >
            Enter your credentials to continue
          </p>

          {/* Form */}

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="
              mt-8
              space-y-5
            "
          >
            {/* =================================================
                EMAIL
            ================================================== */}

            <div>
              <div className="relative">
                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className="
                    w-full
                    rounded-xl
                    bg-black/40
                    border
                    border-white/10
                    py-3.5
                    pl-12
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition
                    focus:border-amber-600
                    focus:ring-2
                    focus:ring-amber-600/30
                  "
                />
              </div>

              {errors.email && (
                <p
                  className="
                    mt-2
                    text-xs
                    text-red-400
                    bg-red-500/10
                    border
                    border-red-500/20
                    rounded-lg
                    px-3
                    py-2
                  "
                >
                  ⚠ {errors.email.message}
                </p>
              )}
            </div>

            {/* =================================================
                PASSWORD
            ================================================== */}

            <div>
              <div className="relative">
                <Lock
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters are required",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-xl
                    bg-black/40
                    border
                    border-white/10
                    py-3.5
                    pl-12
                    pr-12
                    text-sm
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition
                    focus:border-amber-600
                    focus:ring-2
                    focus:ring-amber-600/30
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-amber-400
                    transition
                    cursor-pointer
                  "
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p
                  className="
                    mt-2
                    text-xs
                    text-red-400
                    bg-red-500/10
                    border
                    border-red-500/20
                    rounded-lg
                    px-3
                    py-2
                  "
                >
                  ⚠ {errors.password.message}
                </p>
              )}
            </div>

            {/* =================================================
                LOGIN BUTTON
            ================================================== */}

            <button
              type="submit"
              className="
                w-full
                mt-3
                py-3.5
                rounded-xl
                bg-amber-500
                text-white
                font-semibold
                hover:bg-amber-600
                transition
                active:scale-95
                cursor-pointer
                shadow-lg
                shadow-amber-600/20
              "
            >
              Sign in →
            </button>

            {/* =================================================
                REGISTER LINK
            ================================================== */}

            <p
              className="
                text-center
                text-sm
                text-gray-500
                mt-6
              "
            >
              Don't have an account?
              <NavLink
                to="/register"
                className="
                  ml-2
                  text-white
                  font-medium
                  hover:text-amber-400
                  transition
                "
              >
                Create one
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
