import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { User, Mail, Lock, ShoppingBag, Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();

  const [passwordStrength, setPasswordStrength] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,

    handleSubmit,

    reset,

    watch,

    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const passwordValue = watch("password");

  // Password Strength Logic

  const checkPasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength("");

      return;
    }

    const upper = /[A-Z]/.test(password);

    const number = /[0-9]/.test(password);

    const special = /[^A-Za-z0-9]/.test(password);

    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (password.length >= 6 && password.length <= 8) {
      setPasswordStrength("Medium");
    } else if (password.length >= 9 && upper && number && special) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem(
      "users",

      JSON.stringify(users),
    );
    toast.success("Account created successfully! 🎉");
    reset();

    navigate("/login");
  };

  return (
    <div
      className="
min-h-screen
flex
items-center
justify-center
bg-[#080808]
px-4
py-10
font-sans
"
    >
      <div className="w-full max-w-md">
        {/* Logo */}

        <div
          className="
flex
justify-center
items-center
gap-2
mb-8
"
        >
          <div
            className="
h-10
w-10
rounded-xl
bg-amber-400
flex
items-center
justify-center
"
          >
            <ShoppingBag size={22} className="text-black" />
          </div>

          <span
            className="
text-2xl
font-bold
text-white
"
          >
            Sky
            <span className="text-amber-400">Mart</span>
          </span>
        </div>

        <div
          className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
shadow-2xl
p-6
sm:p-8
"
        >
          <h1
            className="
text-3xl
font-bold
text-white
"
          >
            Create account
          </h1>

          <p
            className="
text-sm
text-gray-500
mt-2
"
          >
            Join SkyMart and start shopping
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="
mt-8
space-y-4
"
          >
            {/* FULL NAME */}

            <div>
              <div className="relative">
                <User
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
                  {...register("fullname", {
                    required: "Full Name is Required",

                    minLength: {
                      value: 4,
                      message: "Minimum 4 characters required",
                    },

                    maxLength: {
                      value: 20,
                      message: "Maximum 20 characters allowed",
                    },
                  })}
                  placeholder="John Doe"
                  className="
w-full
rounded-xl
bg-black/40
border
border-white/10
py-3.5
pl-12
text-white
outline-none
 focus:border-amber-600
                  focus:ring-2
                  focus:ring-amber-600
"
                />
              </div>

              {errors.fullname && (
                <p
                  className="
      mt-2
      flex
      items-center
      gap-1
      text-xs
      font-medium
      text-red-400
      bg-red-400/10
      border
      border-red-400/20
      rounded-lg
      px-3
      py-2
      "
                >
                  ⚠️ {errors.fullname.message}
                </p>
              )}
            </div>

            {/* EMAIL */}

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
                    required: "Email is Required",
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
text-white
outline-none
 focus:border-amber-600
                  focus:ring-2
                  focus:ring-amber-600
"
                />
              </div>

              {errors.email && (
                <p
                  className="
      mt-2
      flex
      items-center
      gap-1
      text-xs
      font-medium
      text-red-400
      bg-red-400/10
      border
      border-red-400/20
      rounded-lg
      px-3
      py-2
      "
                >
                  ⚠️ {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}

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
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },

                    onChange: (e) => {
                      checkPasswordStrength(e.target.value);
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="
w-full
rounded-xl
bg-black/40
border
border-white/10
py-3.5
pl-12
pr-12
text-white
outline-none
 focus:border-amber-600
                  focus:ring-2
                  focus:ring-amber-600
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
text-gray-400
"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Password Strength */}

              {passwordStrength && (
                <div className="mt-3">
                  <p
                    className={`
              text-xs
              font-semibold

              ${
                passwordStrength === "Weak"
                  ? "text-red-400"
                  : passwordStrength === "Medium"
                    ? "text-yellow-400"
                    : "text-green-400"
              }

              `}
                  >
                    Password Strength : {passwordStrength}
                  </p>

                  <div
                    className="
              mt-2
              h-1.5
              w-full
              bg-white/10
              rounded-full
              overflow-hidden
              "
                  >
                    <div
                      className={`
                h-full
                transition-all
                duration-300

                ${
                  passwordStrength === "Weak"
                    ? "w-1/3 bg-red-400"
                    : passwordStrength === "Medium"
                      ? "w-2/3 bg-yellow-400"
                      : "w-full bg-green-400"
                }

                `}
                    ></div>
                  </div>
                </div>
              )}

              {errors.password && (
                <p
                  className="
          text-red-400
          text-xs
          mt-2
          "
                >
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}

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
                  {...register("confirmpassword", {
                    validate: (value) => {
                      return (
                        value === passwordValue || "Passwords do not match"
                      );
                    },

                    minLength: {
                      value: 6,

                      message: "Minimum 6 characters required",
                    },
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="
w-full
rounded-xl
bg-black/40
border
border-white/10
py-3.5
pl-12
pr-12
text-white
outline-none
 focus:border-amber-600
                  focus:ring-2
                  focus:ring-amber-600
"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="
absolute
right-4
top-1/2
-translate-y-1/2
text-gray-400
"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.confirmpassword && (
                <p
                  className="
text-red-400
text-xs
mt-2
"
                >
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
w-full
mt-4
rounded-xl
bg-amber-500
py-3.5
text-white
font-semibold
hover:bg-amber-600
active:scale-95
transition
cursor-pointer
"
            >
              Create Account →
            </button>

            {/* LOGIN LINK */}

            <p
              className="
text-center
text-sm
text-gray-500
mt-6
"
            >
              Already have an account?
              <NavLink
                to="/login"
                className="
ml-1
text-white
font-semibold
"
              >
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
