import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="background-gradient py-8 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="space-y-6 w-full flex flex-col md:text-start text-center md:items-start items-center animate-fade-in-left">
          <h2 className="text-lg font-semibold text-yellow-400">
            UP TO 60% OFF & FREE SHIPPING
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold leading-tight">
            WIRELESS HEADPHONES REINVENTED
          </h1>
          <p>
            The Power And Performance Of Both A{" "}
            <span className="text-yellow-400">40mm</span> And{" "}
            <span className="text-yellow-400">30mm</span> Neodymiumdriver In
            Each Earcup!
          </p>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Read More
          </Button>
        </div>
        <div className="w-full animate-fade-in-right">
        <Image 
          src="/imgs/headphone.png"
          alt="wareless head phone"
          width={500} // Set the actual width of your image
  height={500}
          className="object-contain w-full"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;