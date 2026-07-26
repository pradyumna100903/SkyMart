import React, { useContext } from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../../context/MyStore";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { cartItems, setCartItems, setIsCartOpen } = useContext(MyStore);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const isAdded = cartItems.some((item) => item.id === product.id);

  return (
    <div
      className=" group
  rounded-2xl
  bg-[#111111]
  border
  border-white/10
  p-4
  transition-all
  duration-300
  hover:-translate-y-2
  hover:border-amber-500
  hover:shadow-2xl
  hover:shadow-amber-600/30"
    >
      {/* Image */}
      <div
        onClick={() => navigate(`/detail/${product.id}`)}
        className="relative flex h-60 sm:h-64 items-center justify-center overflow-hidden bg-gray-100 p-6 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <button className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-md transition hover:scale-110">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-medium capitalize text-amber-600">
          {product.category}
        </span>

        <h2 className="mt-4 min-h-14 text-lg font-semibold leading-7 text-white line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm text-white font-medium">
              {product.rating.rate}
            </span>

            <span className="text-sm text-gray-300">
              ({product.rating.count})
            </span>
          </div>

          <h3 className="text-2xl font-bold text-amber-600">
            ${product.price}
          </h3>
        </div>

        {/* Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`mt-6 flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl py-3 font-semibold transition-all duration-300 ${
            isAdded
              ? "cursor-not-allowed bg-green-600 text-white"
              : "bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg"
          }`}
        >
          <ShoppingCart size={18} />
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
