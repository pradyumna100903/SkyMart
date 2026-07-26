import React, { useContext } from "react";
import { ArrowRight, Laptop, Shirt, Gem, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../../context/MyStore";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { setCategory } = useContext(MyStore);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      value: "electronics",
      count: "Products",
      icon: Laptop,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      id: 2,
      name: "Men's Clothing",
      value: "men's clothing",
      count: "Products",
      icon: Shirt,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      id: 3,
      name: "Jewellery",
      value: "jewelery",
      count: "Products",
      icon: Gem,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      id: 4,
      name: "Women's Clothing",
      value: "women's clothing",
      count: "Products",
      icon: ShoppingBag,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  const handleCategoryClick = (value) => {
    setCategory(value);
    navigate("/shop");
  };

  const handleViewAll = () => {
    setCategory("all");
    navigate("/shop");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Categories
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Shop by Category
          </h2>
        </div>

        <button
          onClick={handleViewAll}
          className="hidden sm:flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition"
        >
          View All
          <ArrowRight size={17} />
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.value)}
              className="
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
  hover:shadow-amber-600/30 cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className={`
                ${category.bg}
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                mb-4
                group-hover:scale-110
                transition
                `}
              >
                <Icon className={category.color} size={24} />
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm md:text-base">
                {category.name}
              </h3>

              {/* Count */}
              <p className="text-neutral-400 text-xs mt-1">{category.count}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile View All Button */}
      <div className="flex justify-center mt-6 sm:hidden">
        <button
          onClick={handleViewAll}
          className="flex items-center gap-2 text-amber-400 font-semibold"
        >
          View All
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
};

export default ShopByCategory;
