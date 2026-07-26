import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyStore";
import ProductCard from "../components/Common/ProductCard";
import Footer from "../components/Common/Footer";

const Shop = () => {
  const {
    shopsData,
    setShopsData,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  } = useContext(MyStore);

  const getShopsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setShopsData(res.data);
    } catch (error) {
      console.log("Error in API", error);
    }
  };

  useEffect(() => {
    getShopsData();
  }, []);

  let filteredProducts = shopsData
    .filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      }

      if (sort === "high-low") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="
        text-3xl
        sm:text-4xl
        font-bold
        text-white
        "
        >
          All Products
        </h1>

        <p
          className="
        mt-2
        text-sm
        text-neutral-400
        "
        >
          {filteredProducts.length} products found
        </p>
      </div>

      {/* Search + Filter + Sort */}

      <div
        className="
      mb-10
      flex
      flex-col
      gap-4

      border border-white px-4 py-4 rounded-2xl

      md:flex-row
      md:items-center
      md:justify-between
      "
      >
        {/* Search */}

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
        w-full
        md:w-300

        rounded-xl

        border
        border-white/20

        bg-[#111111]

        px-4
        py-3

        text-white

        placeholder:text-neutral-500

        outline-none

        transition

        focus:border-amber-500
        "
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
        w-full
        md:w-auto

        rounded-xl

        border
        border-white/20

        bg-[#111111]

        px-4
        py-3

        text-white

        outline-none

        cursor-pointer

        focus:border-amber-500
        "
        >
          <option value="all">All Categories</option>

          <option value="men's clothing">Men's Clothing</option>

          <option value="women's clothing">Women's Clothing</option>

          <option value="electronics">Electronics</option>

          <option value="jewelery">Jewelery</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
        w-full
        md:w-auto

        rounded-xl

        border
        border-white/20

        bg-[#111111]

        px-4
        py-3

        text-white

        outline-none

        cursor-pointer

        focus:border-amber-500
        "
        >
          <option value="default">Sort By Price</option>

          <option value="low-high">Price: Low to High</option>

          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}

      <div
        className="
      grid

      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4

      gap-6
      "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p
            className="
            col-span-full
            text-center
            text-lg
            text-neutral-500
            "
          >
            Product is loading...
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
