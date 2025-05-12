import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-white text-center h-[100vh] space-y-8 bg-[url('/src/assets/bg-img.jpg')] bg-cover bg-center">
      <h1 className="text-4xl md:text-6xl font-semibold">
        Welcome to My Website
      </h1>
      <p className="text-lg md:text-xl font-semibold">Your Journey Start</p>
      <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-xl text-xl font-medium hover:bg-white hover:text-blue-600 cursor-pointer">
        Purchase Products
      </button>
    </div>
  );
};

export default HeroSection;
