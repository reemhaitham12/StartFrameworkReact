import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-customColor w-full  bottom-0 left-0">
        <div className="container py-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className=" p-4 rounded text-center text-white">
              <h3 className="font-bold py-3 text-2xl">LOCATION</h3>
              <p className="py-2">2215 John Daniel Drive</p>
              <p className="py-2">Clark, MO 65243</p>
            </div>
            <div className=" p-4 rounded text-center text-white">
              <h3 className="py-3 text-2xl font-bold">AROUND THE WEB</h3>
              <div className="flex justify-center text-white space-x-4 rounded-full">
                <div className="rounded-full border border-white p-2 w-10 h-10 ">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="rounded-full border border-white p-2 w-10 h-10">
                  <i class="fa-brands fa-twitter "></i>
                </div>
                <div className="rounded-full border border-white p-2 w-10 h-10">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="rounded-full border border-white p-2 w-10 h-10">
                  <i class="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="p-4 rounded text-center text-white">
              <h3 className="text-xl font-bold py-3">ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className="bg-footerColor w-full">
        {/* <div className="container w-full"> */}
          <div className="text-center text-white py-5 ">
            <p>Copyright &copy; Your Website 2021</p>
          </div>
        {/* </div> */}
      </div>
      </div>
      
    </>
  );
}
