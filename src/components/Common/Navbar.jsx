import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Store, Menu, X } from "lucide-react";
import { MyStore } from "../../context/MyStore";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const { cartItems, setIsCartOpen, scrolled, setScrolled } =
    useContext(MyStore);

  // ================= GET CURRENT USER =================

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    setCurrentUser(user);
  }, []);

  // ================= NAVBAR SCROLL =================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolled]);

  // ================= CART COUNT =================

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    setCurrentUser(null);
    setMenuOpen(false);

    setIsCartOpen(false);

    toast.success("You've been logged out successfully 👋");

    navigate("/login", { replace: true });
  };

  return (
    <nav
      className={`
        sticky
        top-0
        z-50
        border-b
        border-white/20
        transition-all
        duration-300
        ${scrolled ? "bg-black/40 backdrop-blur-xl" : "bg-black"}
      `}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          xl:px-12
          py-4
        "
      >
        {/* ================= MAIN NAVBAR ================= */}

        <div
          className="
            relative
            flex
            items-center
            justify-between
            gap-4
            md:gap-8
          "
        >
          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              md:hidden
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-white/10
              text-white
              transition
              hover:bg-white/20
              cursor-pointer
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* ================= LOGO ================= */}

          <div
            className="
              flex
              items-center
              gap-2
              absolute
              left-1/2
              -translate-x-1/2
              md:static
              md:translate-x-0
              shrink-0
            "
          >
            <Store size={28} className="text-amber-600" />

            <h1
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-amber-600
              "
            >
              SkyMart
            </h1>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div
            className="
              hidden
              md:flex
              items-center
              justify-center
              gap-8
              lg:gap-12
              flex-1
              text-gray-300
              font-medium
            "
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `
                transition
                ${isActive ? "text-amber-600" : "hover:text-amber-600"}
                `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `
                transition
                ${isActive ? "text-amber-600" : "hover:text-amber-600"}
                `
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `
                transition
                ${isActive ? "text-amber-600" : "hover:text-amber-600"}
                `
              }
            >
              About
            </NavLink>
          </div>

          {/* ================= RIGHT SECTION ================= */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              shrink-0
            "
          >
            {/* USER */}

            {currentUser && (
              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-2
                  sm:px-3
                  py-2
                "
              >
                {/* Avatar */}

                <div
                  className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    bg-amber-500
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  {currentUser?.fullname?.charAt(0).toUpperCase()}
                </div>

                {/* Username */}

                <span
                  className="
                    hidden
                    lg:block
                    max-w-32
                    truncate
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {currentUser?.fullname}
                </span>
              </div>
            )}

            {/* CART */}

            <button
              type="button"
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/10
                transition
                hover:bg-white/20
                cursor-pointer
              "
              aria-label="Shopping cart"
            >
              <ShoppingCart
                size={22}
                className="
                  text-white
                  transition
                  hover:text-amber-600
                "
              />

              {/* CART BADGE */}

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-1
                    -top-2
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-amber-600
                    text-xs
                    font-bold
                    text-black
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* DESKTOP / TABLET LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="
                hidden
                sm:flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/10
                text-white
                transition
                hover:bg-white/20
                cursor-pointer
              "
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div
            className="
              mt-5
              flex
              md:hidden
              flex-col
              gap-2
              rounded-2xl
              border
              border-white/20
              bg-black/95
              p-4
              shadow-xl
            "
          >
            {/* HOME */}

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                rounded-lg
                px-4
                py-3
                transition
                ${
                  isActive
                    ? "bg-amber-500/10 text-amber-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-amber-500"
                }
                `
              }
            >
              Home
            </NavLink>

            {/* SHOP */}

            <NavLink
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                rounded-lg
                px-4
                py-3
                transition
                ${
                  isActive
                    ? "bg-amber-500/10 text-amber-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-amber-500"
                }
                `
              }
            >
              Shop
            </NavLink>

            {/* ABOUT */}

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                rounded-lg
                px-4
                py-3
                transition
                ${
                  isActive
                    ? "bg-amber-500/10 text-amber-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-amber-500"
                }
                `
              }
            >
              About
            </NavLink>

            {/* MOBILE USER */}

            {currentUser && (
              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-amber-500
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  {currentUser?.fullname?.charAt(0).toUpperCase()}
                </div>

                <span
                  className="
                    truncate
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {currentUser?.fullname}
                </span>
              </div>
            )}

            {/* MOBILE LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="
                mt-2
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                border-red-500/20
                bg-red-500/5
                px-4
                py-3
                text-left
                text-red-400
                transition
                hover:bg-red-500/10
                cursor-pointer
              "
            >
              <LogOut size={18} />

              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
