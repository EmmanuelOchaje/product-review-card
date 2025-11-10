import React from "react";
import mobile from "../../images/mobile.jpg";
import Image from "next/image";
import cart from "../../images/cart.png";
// import { Montserrat } from "next/font/google";

const Card = (props) => {
  return (
    <div className=" text-black font-Montserrat md:flex justify-center items-center bg-[#f2ebe3] md:h-screen">
      <div className="bg-[#f2ebe3] md:flex md:justify-center p-5">
        <Image
          src={mobile}
          alt=""
          className="rounded-tl-lg md:max-w-[400px] md:rounded-bl-lg md:rounded-tr-none rounded-tr-lg"
        />
        <div className="bg-white p-5 d:rounded-br-lg md:rounded-tr-lg md:max-w-[350px] rounded-bl-lg rounded-br-lg">
          <h2 className="text-gray-500 font-light">P E R F U M E</h2>
          <h1 className="font-fraunces text-4xl font-Fraunces max-w-xs my-2 font-bold">
            Gabrielle Essence Ear De Parfum
          </h1>
          <p className="text-gray-500 text-xl font-light text-balance my-3">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>

          <div className="flex gap-6 md:my-5 items-center">
            <p className="text-[#3d8168] text-4xl font-bold">$149.99</p>
            <p className="line-through text-gray-500 font-semibold">169.99</p>
          </div>
          <button className="bg-[#3d8168] rounded-lg my-5 w-full flex justify-center items-center gap-3 text-white py-3">
            <Image src={cart} alt="" className="w-6" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
