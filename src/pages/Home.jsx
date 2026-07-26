import React from "react";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import StatCards from "../components/Home/StatCards";
import ShopByCategory from "../components/Home/ShopByCategory";
import ProductLists from "../components/Home/ProductLists";
import FeatureBadges from "../components/Home/FeatureBadges";
import Footer from "../components/Common/Footer";

const Home = () => {
  return (
    <div>
      <WelcomeBanner />
      <StatCards />
      <ShopByCategory />
      <ProductLists />
      <FeatureBadges />
    </div>
  );
};

export default Home;
