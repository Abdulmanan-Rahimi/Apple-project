import React from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import ProductCard from "../../components/productCard/ProductCard";
import ProductGrid from "../../components/productGrid/ProductGrid";
import { useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "WATCH ULTRA4",
      text: "A battery you can't outurn",
      img: "https://www.apple.com/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4__e4r3qertak2u_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
      dark: true,
      buttonColor: "#0071E3",
    },
    {
      id: 2,
      title: "MacBook Air",
      text: "Now superchangred by M5",
      img: "https://www.apple.com/v/homepage/images/macbook-air-m5/a/promo_macbook_air_m5__e5xk2yysqiie_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
    },
    {
      id: 3,
      title: "iPad Air",
      text: "Now superchangred by M4",
      img: "https://www.apple.com/v/homepage/images/ipad-air-m4/a/promo_ipad_air_m4__bgcv7t286k8y_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
    },
    {
      id: 4,
      title: "Upgrade",
      text: "Love it. Lease it. Upgrade it.",
      img: "https://www.apple.com/v/homepage/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
    },
    {
      id: 5,
      title: "AirPods Pro 3",
      text: "The world's in-ear Active Noise Cancellation",
      img: "https://www.apple.com/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
    },
    {
      id: 6,
      title: "Card",
      text: "Get up to 3% Daily Cash back with every purchase",
      img: "https://www.apple.com/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_medium.jpg",
      buttonText: "Learn more",
      buttonBuy: "Buy",
    },
  ]);

  return (
    <>
      <MyNavbar />
      <ProductCard />
      <div className="grid grid-cols-1 small:grid-cols-2 gap-3 px-2">
        {products.map((product) => (
          <ProductGrid key={product.id} {...product} />
        ))}
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
