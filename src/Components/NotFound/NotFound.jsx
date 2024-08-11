import React from "react";
import ErrorImage from "../../assets/404-Erorr.jpg";

export default function NotFound() {
  return (
    <div className="container p-120 flex flex-col items-center bg-activeColor">
      <div className="flex items-center text-center flex-col">
        <img
          src={ErrorImage}
          alt="Error"
          className="w-250 h-250 rounded-full mb-4"
        />
        <h2 className="text-white font-bold text-4xl uppercase">
          Page Not Found
        </h2>
        <div className="flex justify-center items-center py-4 space-x-3">
          <div className="w-100 h-5 bg-white"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="w-100 h-5 bg-white"></div>
        </div>
        <p className="text-lg text-white mt-2.5">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
