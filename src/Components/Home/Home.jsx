import React from "react";
import person from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="container p-120 flex flex-col items-center bg-activeColor">
      <div className="flex items-center text-center flex-col">
        <img
          src={person}
          alt="Profile"
          className="w-250 h-250 rounded-full mb-4"/>
        <h2 className="text-white font-bold text-2xl uppercase">Start Framework</h2>
        <div className="flex justify-center items-center py-4 space-x-3">
          <i className="w-100 h-5 bg-white"></i>
          <i className="fa-solid fa-star text-white"></i>
          <i className="w-100 h-5 bg-white"></i>
        </div>
        <p className="text-lg text-white mt-2">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>

    </div>
  );
}
