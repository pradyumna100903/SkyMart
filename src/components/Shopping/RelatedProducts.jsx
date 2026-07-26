import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../../context/MyStore";

const RelatedProducts = ({ category, currentId }) => {
  const navigate = useNavigate();

  const { cartItems, setCartItems, setIsCartOpen } = useContext(MyStore);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const getRelatedProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`,
      );

      const filteredProducts = res.data.filter(
        (item) => item.id !== Number(currentId),
      );

      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.log("Related Products Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      getRelatedProducts();
    }
  }, [category, currentId]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
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

  // Loading UI

  if (loading) {
    return (
      <section className="bg-black py-10">
        <div
          className="
          flex
          min-h-50
          items-center
          justify-center
          text-white
          text-2xl
          font-semibold
          "
        >
          Related Products is loading...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-8">
      <div
        className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        <h2
          className="
          mb-10
          text-2xl
          sm:text-3xl
          font-bold
          text-white
          "
        >
          Related Products
        </h2>

        {relatedProducts.length === 0 ? (
          <p
            className="
            text-center
            text-gray-400
            text-lg
            "
          >
            No Related Products Found
          </p>
        ) : (
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            "
          >
            {relatedProducts.map((product) => {
              const isAdded = cartItems.some((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="
                cursor-pointer
                overflow-hidden
                 group
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
  hover:shadow-amber-600/30
                
                "
                >
                  {/* Image */}

                  <div
                    className="
                  flex
                  h-60
                  items-center
                  justify-center
                  bg-white
                  p-5
                  "
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="
                    h-44
                    object-contain
                    transition
                    duration-300
                    hover:scale-110
                    "
                    />
                  </div>

                  {/* Content */}

                  <div
                    className="
                  bg-[#0F0F0F]
                  p-5
                  "
                  >
                    <span
                      className="
                    inline-block
                    rounded-full
                    bg-amber-100
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    capitalize
                    text-amber-600
                    "
                    >
                      {product.category}
                    </span>

                    <h3
                      className="
                    mt-4
                    h-12
                    line-clamp-2
                    font-semibold
                    text-white
                    "
                    >
                      {product.title}
                    </h3>

                    {/* Rating */}

                    <div
                      className="
                    mt-3
                    flex
                    items-center
                    gap-1
                    "
                    >
                      {[...Array(Math.round(product.rating?.rate || 0))].map(
                        (_, index) => (
                          <Star
                            key={index}
                            size={15}
                            className="
                          fill-yellow-400
                          text-yellow-400
                          "
                          />
                        ),
                      )}

                      <span
                        className="
                      ml-2
                      text-sm
                      text-gray-300
                      "
                      >
                        ({product.rating?.count})
                      </span>
                    </div>

                    <div
                      className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    "
                    >
                      <h2
                        className="
                      text-2xl
                      font-bold
                      text-amber-500
                      "
                      >
                        ${product.price}
                      </h2>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      px-4
                      py-2
                      font-semibold
                      text-white
                      
                      ${
                        isAdded
                          ? "bg-green-600"
                          : "bg-amber-600 hover:bg-amber-700"
                      }
                      `}
                      >
                        <ShoppingCart size={16} />

                        {isAdded ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
