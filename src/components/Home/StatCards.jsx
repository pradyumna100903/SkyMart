import React, { useContext } from "react";
import { ShoppingCart, DollarSign, Star, Grid2x2 } from "lucide-react";
import { MyStore } from "../../context/MyStore";

const StatCards = () => {
  const { cartItems, shopsData } = useContext(MyStore);

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const cartValue = cartItems
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  const topProducts =
    shopsData?.filter((item) => item.rating?.rate >= 4.5).length || 0;

  const categories = [...new Set(shopsData?.map((item) => item.category) || [])]
    .length;

  const stats = [
    {
      title: "Cart Items",
      value: cartCount,
      description: "Products in cart",
      icon: ShoppingCart,
      color: "amber",
    },
    {
      title: "Cart Value",
      value: `$${cartValue}`,
      description: "Ready for checkout",
      icon: DollarSign,
      color: "amber",
    },
    {
      title: "Top Products",
      value: topProducts,
      description: "Highest rated",
      icon: Star,
      color: "yellow",
    },
    {
      title: "Categories",
      value: categories,
      description: "Browse categories",
      icon: Grid2x2,
      color: "purple",
    },
  ];

  const colors = {
    amber: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "hover:border-amber-500/40",
    },

    yellow: {
      icon: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-amber-500/40",
    },

    purple: {
      icon: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-amber-500/40",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      "
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          const style = colors[stat.color];

          return (
            <div
              key={stat.title}
              className={`
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
            ${style.border}
            `}
            >
              {/* Icon + Value */}
              <div className="flex items-center justify-between">
                <div
                  className={`
                ${style.bg}
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                group-hover:scale-110
                transition
                `}
                >
                  <Icon className={style.icon} size={24} />
                </div>

                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {stat.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-400">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatCards;
