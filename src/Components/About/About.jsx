import React from "react";

export default function About() {
  return (
    <div className="container md:p-195 flex flex-col items-center bg-activeColor">
      <div className="flex items-center text-center flex-col">
        <h2 className="text-white font-bold text-4xl uppercase pt-8">
          about component
        </h2>
        <div className="flex justify-center items-center py-4 space-x-3">
          <i className="w-100 h-5 bg-white"></i>
          <i class="fa-solid fa-star text-white"></i>
          <i className="w-100 h-5 bg-white"></i>
        </div>
        {/* <p className="text-lg text-white mt-2.5">
          Graphic Artist - Web Designer - Illustrator
        </p> */}
        <div className="">
          <div className="container py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="rounded-lg text-center text-white mb-6 mt-0 p-4">
                <p className="text-sm text-left leading-snug ">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="rounded-lg text-center text-white mb-6 mt-0 p-4 ">
                <p className="text-sm text-left leading-snug ">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
