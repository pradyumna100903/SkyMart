import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Star, Zap, Shield, Tag, ShoppingBag, ArrowRight } from "lucide-react";

import { MyStore } from "../../context/MyStore";

const ProductLists = () => {
  const navigate = useNavigate();

  const { shopsData, setSingleProductData } = useContext(MyStore);

  const topRatedProducts = shopsData
    ?.filter((product) => product.rating?.rate >= 4)
    .slice(0, 5);

  const newArrivals = shopsData?.slice(-5).reverse();

  const handleProductClick = (product) => {
    setSingleProductData(product);

    navigate(`/product/${product.id}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= TOP RATED ================= */}

        <div
          className="
bg-[#111111] border border-white
rounded-3xl
p-6
"
        >
          <div
            className="
flex
items-center
justify-between
mb-6
"
          >
            <div
              className="
flex
items-center
gap-3
"
            >
              <div
                className="
bg-yellow-400/20
p-2
rounded-xl
"
              >
                <Star
                  size={22}
                  className="
text-yellow-500
fill-yellow-500
"
                />
              </div>

              <h2
                className="
text-xl
font-bold
text-white
"
              >
                Top Rated
              </h2>
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="
  flex items-center gap-1
  bg-black
  text-amber-400
  px-4 py-2
  rounded-full cursor-pointer
  text-xs
  font-semibold
  hover:opacity-80
  transition
  "
            >
              See All
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {topRatedProducts?.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="
flex
items-center
justify-between
bg-neutral-100
rounded-2xl
p-3
cursor-pointer
hover:bg-neutral-200
transition
"
              >
                <div
                  className="
flex
items-center
gap-4
"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
w-14
h-14
rounded-xl
object-contain
bg-white
p-2
"
                  />

                  <div>
                    <h3
                      className="
text-sm
font-semibold
text-black
line-clamp-1
/max-w-[170px]
"
                    >
                      {product.title}
                    </h3>

                    <div
                      className="
flex
items-center
gap-1
mt-1
"
                    >
                      <Star
                        size={13}
                        className="
text-yellow-400
fill-yellow-400
"
                      />

                      <span
                        className="
text-xs
text-neutral-600
"
                      >
                        {product.rating?.rate}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className="
text-amber-600
font-bold
text-sm
"
                >
                  ${product.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= NEW ARRIVALS ================= */}

        <div
          className="

bg-[#111111] border border-white
rounded-3xl
p-6
"
        >
          <div
            className="
flex
items-center
justify-between
mb-6
"
          >
            <div
              className="
flex
items-center
gap-3
"
            >
              <div
                className="
bg-amber-400/20
p-2
rounded-xl
"
              >
                <Zap
                  size={22}
                  className="
text-amber-500
fill-amber-500
"
                />
              </div>

              <h2
                className="
text-xl
font-bold
text-white
"
              >
                New Arrivals
              </h2>
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="
  flex items-center gap-1
  bg-black
  text-amber-400
  px-4 py-2
  rounded-full
  text-xs
  font-semibold cursor-pointer
  hover:opacity-80
  transition
  "
            >
              See All
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {newArrivals?.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="
flex
items-center
justify-between
bg-neutral-100
rounded-2xl
p-3
cursor-pointer
hover:bg-neutral-200
transition
"
              >
                <div
                  className="
flex
items-center
gap-4
"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
w-14
h-14
rounded-xl
object-contain
bg-white
p-2
"
                  />

                  <div>
                    <h3
                      className="
text-sm
font-semibold
text-black
line-clamp-1
/max-w-[170px]
"
                    >
                      {product.title}
                    </h3>

                    <p
                      className="
text-xs
text-neutral-500
mt-1
"
                    >
                      New Product
                    </p>
                  </div>
                </div>

                <span
                  className="
text-amber-600
font-bold
text-sm
"
                >
                  ${product.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
