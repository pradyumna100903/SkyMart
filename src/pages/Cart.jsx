import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyStore";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, isCartOpen, setIsCartOpen, setCartItems } =
    useContext(MyStore);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);

    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    toast.success("Order placed successfully 🛍️");

    setCartItems([]);

    setIsCartOpen(false);
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      // optional
    }
  }, [cartItems]);

  return (
    <>
      {/* Blur Background Overlay */}

      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="
        fixed
        inset-0
        z-40
        bg-black/40
        backdrop-blur-md
        "
        />
      )}

      {/* Cart Drawer */}

      <div
        className={`
      fixed
      top-0
      right-0
      z-50
      h-screen
      w-full
      max-w-md
      bg-[#0F0F0F]
      shadow-2xl
      transition-transform
      duration-300

      ${isCartOpen ? "translate-x-0" : "translate-x-full"}

      `}
      >
        {/* Header */}

        <div
          className="
      flex
      items-center
      justify-between
      border-b
      border-gray-700
      bg-[#111111]
      p-5
      "
        >
          <div
            className="
      flex
      items-center
      gap-3
      "
          >
            <ShoppingCart size={28} className="text-amber-500" />

            <h1
              className="
        text-2xl
        font-bold
        text-white
        "
            >
              Shopping Cart
            </h1>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="
      rounded-lg
      p-2
      text-white
      hover:bg-gray-800
      "
          >
            <X />
          </button>
        </div>

        {/* Body */}

        <div
          className="
    h-[calc(100vh-220px)]
    overflow-y-auto
    bg-[#0F0F0F]
    p-5
    "
        >
          {cartItems.length === 0 ? (
            <div
              className="
      flex
      h-full
      flex-col
      items-center
      justify-center
      text-white
      "
            >
              <ShoppingCart size={80} />

              <h2
                className="
        mt-5
        text-2xl
        font-bold
        "
              >
                Your Cart is Empty
              </h2>

              <p
                className="
        mt-2
        text-gray-400
        "
              >
                Go shop something cool!
              </p>

              <button
                onClick={() => {
                  setIsCartOpen(false);

                  navigate("/shop");
                }}
                className="
        mt-6
        rounded-xl
        bg-amber-600
        px-8
        py-3
        font-semibold
        text-white
        hover:bg-amber-700
        "
              >
                Browse Products
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="
      mb-5
      rounded-xl
      border
      border-gray-700
      bg-[#111111]
      p-4
      "
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
          h-24
          w-24
          rounded-lg
          bg-white
          object-contain
          p-2
          "
                  />

                  <div
                    className="
          flex-1
          text-white
          "
                  >
                    <h2
                      className="
          line-clamp-2
          font-semibold
          "
                    >
                      {item.title}
                    </h2>

                    <p
                      className="
          mt-2
          text-xl
          font-bold
          text-amber-500
          "
                    >
                      ${item.price}
                    </p>

                    <div
                      className="
          mt-4
          flex
          justify-between
          "
                    >
                      <div
                        className="
          flex
          items-center
          gap-3
          border
          border-gray-600
          rounded-lg
          px-3
          py-2
          "
                      >
                        <button onClick={() => decreaseQuantity(item.id)}>
                          <Minus size={18} />
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>
                          <Plus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="
          text-red-500
          "
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}

        {cartItems.length > 0 && (
          <div
            className="
      absolute
      bottom-0
      w-full
      border-t
      border-gray-700
      bg-[#0F0F0F]
      p-5
      text-white
      "
          >
            <div className="flex justify-between mb-2">
              <span>Total Items</span>

              <span>{totalItems}</span>
            </div>

            <div
              className="
      flex
      justify-between
      text-xl
      font-bold
      mb-5
      "
            >
              <span>Total</span>

              <span className="text-amber-500">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={clearCart}
              className="
      w-full
      mb-3
      rounded-xl
      border
      border-red-500
      py-3
      text-red-500
      hover:bg-red-500
      hover:text-white
      "
            >
              Clear Cart
            </button>

            <button
              onClick={handleCheckout}
              className="
      w-full
      rounded-xl
      bg-amber-600
      py-4
      font-semibold
      text-white
      hover:bg-amber-700 cursor-pointer
      "
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
