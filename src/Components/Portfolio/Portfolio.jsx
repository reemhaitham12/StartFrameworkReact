import React from "react";
import house from "../../assets/asset 0.png";
import cake from "../../assets/asset 1.png";
import circus from "../../assets/asset 2.png";

export default function Portfolio() {
  return (
    <div className="container py-10 flex flex-col items-center relative">
      <h2 className="text-customColor font-bold text-3xl uppercase">
        portfolio component
      </h2>
      <div className="flex justify-center items-center py-3 space-x-3">
        <i className="w-100 h-5 bg-customColor"></i>
        <i className="fa-solid fa-star text-customColor"></i>
        <i className="w-100 h-5 bg-customColor"></i>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { src: house, alt: "House" },
          { src: cake, alt: "Cake" },
          { src: circus, alt: "Circus" },
          { src: house, alt: "House" },
          { src: cake, alt: "Cake" },
          { src: circus, alt: "Circus" }
        ].map((item, index) => (
          <div key={index} className="p-5 rounded text-center relative group">
            <div className="relative">
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-lg w-full h-auto sm:w-80 md:w-60 lg:w-full"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-activeColor bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <i className="fa-solid fa-plus text-white text-9xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
