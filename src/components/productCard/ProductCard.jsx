import React from "react";
import MyNavbar from "../navbar/MyNavbar";

const ProductCard = () => {
  return (
    <div>
      <div className="relative mb-3 w-full h-[600px] small:h-[720px] bg-[url('https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_small.jpg')] small:bg-[url('https://www.apple.com/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro__fqe1motd0ymy_largetall.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer">
        <div className="absolute top-10 small:top-13 left-1/2 -translate-x-1/2 z-10 w-full text-center text-white">
          <h1 className="text-4xl small:text-5xl font-bold">iPhone 18 Pro</h1>
          <h3 className="text-xl small:text-2xl">Pro further</h3>
          <div className="my-3">
            <button className="bg-[#0071E3] text-base small:text-lg px-4 py-2 rounded-full mx-2 cursor-pointer">
              Learn more
            </button>
            <button className="border border-blue-500 text-base small:text-lg px-5 py-1 rounded-full hover:bg-[#0071E3] cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="relative mb-3 w-full h-[600px] small:h-[720px] bg-[url('https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2_largetall.jpg')] small:bg-[url('https://www.apple.com/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2_small.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer">
        <div className="absolute top-10 small:top-13 left-1/2 -translate-x-1/2 z-10 w-full text-center">
          <h1 className="text-4xl small:text-5xl font-bold">iPhone Duo</h1>
          <h3 className="text-xl small:text-2xl">Hello , Hello</h3>
          <div className="my-3">
            <button className="bg-[#0071E3] text-base small:text-lg px-4 py-2 rounded-full mx-2 cursor-pointer text-white">
              Learn more
            </button>
            <button className="border border-blue-500 text-base small:text-lg px-5 py-1 rounded-full hover:bg-[#0071E3] cursor-pointer">
              View pricing
            </button>
          </div>
        </div>
      </div>
      <div className="relative mb-3 w-full h-[600px] small:h-[720px] bg-[url('https://www.apple.com/v/homepage/images/apple-watch-series-12/a/hero_apple_watch_series_12__n9rln7bzvwya_largetall.jpg')] small:bg-[url('https://www.apple.com/v/homepage/images/apple-watch-series-12/a/hero_apple_watch_series_12__n9rln7bzvwya_small.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer">
        <h2 className="text-2xl text-white absolute top-10 small:top-13 left-1/2 -translate-x-1/2">
          WHATCH SERIESE 12
        </h2>
        <div className="absolute bottom-10 small:bottom-13 left-1/2 -translate-x-1/2 z-10 w-full text-center text-white">
          <h4 className="text-lg small:text-xl font-bold">
            The most accurateheart rate sensing in a wearabke
          </h4>
          <div className="my-3">
            <button className="bg-[#0071E3] text-base small:text-lg px-4 py-2 rounded-full mx-2 cursor-pointer">
              Learn more
            </button>
            <button className="border border-blue-500 text-base small:text-lg px-5 py-1 rounded-full hover:bg-[#0071E3] cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
