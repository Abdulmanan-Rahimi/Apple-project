import React from "react";

const ProductGrid = ({
  img,
  title,
  text,
  buttonText,
  buttonBuy,
  dark,
  buttonColor,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="relative w-full h-[600px] small:h-[720px] bg-cover bg-center bg-no-repeat cursor-pointer"
    >
      <div className="absolute top-10 small:top-13 left-1/2 -translate-x-1/2 z-10 w-full text-center">
        <h1
          className={`text-4xl small:text-5xl font-bold ${dark ? "text-white" : "text-black"}`}
        >
          {title}
        </h1>

        <h3
          className={`text-xl small:text-2xl ${dark ? "text-white" : "text-black"}`}
        >
          {text}
        </h3>

        <div className="my-3">
          <button className="bg-[#0071E3] text-base small:text-lg px-4 py-2 rounded-full mx-2 cursor-pointer">
            {buttonText}
          </button>

          <button className="border border-blue-500 text- small:text-lg px-5 py-1 rounded-full text-[#0071E3] hover:bg-[#0071E3] hover:text-white cursor-pointer">
            {buttonBuy}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
