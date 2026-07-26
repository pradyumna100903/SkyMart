import { useEffect, useState } from "react";
import axios from "axios";
import { MyStore } from "./MyStore";

export const ContextProvider = ({ children }) => {
  const [shopsData, setShopsData] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("default");

  const [singleProductData, setSingleProductData] = useState({});

  const [scrolled, setScrolled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Load Cart from LocalStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // ==========================
  // Fetch Products
  // ==========================

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setShopsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ==========================
  // Save Cart to LocalStorage
  // ==========================

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <MyStore.Provider
      value={{
        shopsData,
        setShopsData,

        search,
        setSearch,

        category,
        setCategory,

        sort,
        setSort,

        singleProductData,
        setSingleProductData,

        cartItems,
        setCartItems,

        isCartOpen,
        setIsCartOpen,
        scrolled,
        setScrolled,
        showPassword,
        setShowPassword,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
