import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import axios from "axios";
import { MyStore } from "../context/MyStore";

import {
  ShoppingCart,
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import RelatedProducts from "../components/Shopping/RelatedProducts";

const ProductDetail = () => {
  const {
    singleProductData,
    setSingleProductData,
    cartItems,
    setCartItems,
    setIsCartOpen,
  } = useContext(MyStore);

  const navigate = useNavigate();

  const { id } = useParams();

  const [showMore, setShowMore] = useState(false);

  const getSingleProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setSingleProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProductData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === singleProductData.id);

    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === singleProductData.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );

      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...singleProductData,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const isAdded = cartItems.some((item) => item.id === singleProductData.id);

  return (
    <div className="min-h-screen bg-black py-5">
      <div
        className="
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
"
      >
        {/* Breadcrumb */}

        <p
          className="
mb-5
text-sm
text-gray-500
overflow-hidden
"
        >
          <NavLink to="/" className="hover:text-amber-600">
            Home /
          </NavLink>

          <NavLink to="/shop" className="ml-1 hover:text-amber-600">
            Shop /
          </NavLink>

          <span
            className="
ml-1
text-amber-600
font-semibold
capitalize
"
          >
            {singleProductData.category}
          </span>
        </p>

        {/* Main Section */}

        <div
          className="
grid
grid-cols-1
gap-8

lg:grid-cols-2
items-center
"
        >
          {/* Image */}

          <div
            className="
bg-white
rounded-2xl
shadow-lg
p-4
sm:p-6
"
          >
            <div
              className="
bg-gray-100
rounded-xl
h-72
sm:h-96
flex
items-center
justify-center
overflow-hidden
cursor-pointer

"
            >
              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="
h-56
sm:h-72
object-contain
transition
duration-300
hover:scale-105
"
              />
            </div>
          </div>

          {/* Details */}

          <div
            className="
flex
flex-col
justify-center
"
          >
            <span
              className="
w-fit
rounded-full
bg-amber-100
px-4
py-1
text-sm
sm:text-base
font-semibold
capitalize
text-amber-600
"
            >
              {singleProductData.category}
            </span>

            <h1
              className="
mt-3
text-2xl
sm:text-3xl
lg:text-4xl
font-bold
leading-tight
text-white
"
            >
              {singleProductData.title}
            </h1>

            {/* Rating */}

            <div
              className="
mt-3
flex
flex-wrap
items-center
gap-2
"
            >
              <div className="flex">
                {[
                  ...Array(Math.round(singleProductData.rating?.rate || 0)),
                ].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="
fill-yellow-400
text-yellow-400
"
                  />
                ))}
              </div>

              <span className="text-white font-semibold">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            <h2
              className="
mt-3
text-3xl
sm:text-4xl
font-bold
text-amber-600
"
            >
              ${singleProductData.price}
            </h2>

            <p
              className="
mt-3
text-sm
sm:text-base
leading-7
text-white
"
            >
              {showMore
                ? singleProductData.description
                : `${singleProductData.description?.slice(0, 100)}...`}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="
mt-2
text-left
font-semibold
text-amber-500
"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

            {/* Buttons */}

            <div
              className="
mt-5
flex
flex-col
sm:flex-row
gap-3
"
            >
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`
flex-1
flex
items-center
justify-center
gap-3
rounded-xl cursor-pointer
py-3
font-semibold
text-white

${isAdded ? "bg-green-600" : "bg-amber-600 hover:bg-amber-700"}

`}
              >
                <ShoppingCart size={20} />

                {isAdded ? "Added" : "Add To Cart"}
              </button>

              <button
                className="
rounded-xl
border
border-gray-600
bg-black
p-4
text-white
hover:text-red-500

"
              >
                <Heart size={22} />
              </button>
            </div>

            {/* Features */}

            <div
              className="
mt-5
grid

grid-cols-1
sm:grid-cols-3

gap-3
"
            >
              <div
                className="
rounded-xl
border
border-gray-700
bg-black
p-4
text-center
text-white
"
              >
                <Truck className="mx-auto text-amber-600" />

                <h3 className="mt-2 font-semibold">Free Delivery</h3>

                <p className="text-sm text-gray-500">On Orders Above $50</p>
              </div>

              <div
                className="
rounded-xl
border
border-gray-700
bg-black
p-4
text-center
text-white
"
              >
                <ShieldCheck className="mx-auto text-amber-600" />

                <h3 className="mt-2 font-semibold">Secure Payment</h3>

                <p className="text-sm text-gray-500">256-bit SSL</p>
              </div>

              <div
                className="
rounded-xl
border
border-gray-700
bg-black
p-4
text-center
text-white
"
              >
                <RotateCcw className="mx-auto text-amber-600" />

                <h3 className="mt-2 font-semibold">Easy Returns</h3>

                <p className="text-sm text-gray-500">30 Days Return</p>
              </div>
            </div>

            {/* Navigation */}

            <div
              className="
mt-5
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
            >
              <button
                onClick={() => {
                  const prevId = Number(id) === 1 ? 20 : Number(id) - 1;

                  navigate(`/product/${prevId}`);
                }}
                className="
flex
items-center
justify-center
gap-2
rounded-xl
border
border-amber-600
bg-amber-500
hover:bg-amber-600
py-3
font-semibold
text-white
cursor-pointer
"
              >
                <ArrowLeft />
                Previous Product
              </button>

              <button
                onClick={() => {
                  const nextId = Number(id) === 20 ? 1 : Number(id) + 1;

                  navigate(`/product/${nextId}`);
                }}
                className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-amber-600
py-3
font-semibold
text-white cursor-pointer
"
              >
                Next Product
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts category={singleProductData.category} currentId={id} />
    </div>
  );
};

export default ProductDetail;
