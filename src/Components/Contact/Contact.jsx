import React from "react";
import house from "../../assets/asset 0.png";
import cake from "../../assets/asset 1.png";
import circus from "../../assets/asset 2.png";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="container py-10 flex flex-col items-center">
      <h2 className="text-customColor font-bold text-3xl uppercase">
        Contact Section
      </h2>
      <div className="flex justify-center items-center py-3 space-x-3">
        <i className="w-100 h-5 bg-customColor"></i>
        <i className="fa-solid fa-star text-customColor"></i>
        <i className="w-100 h-5 bg-customColor"></i>
      </div>

      <form class="container max-w-4xl mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            class="block py-5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-activeColor focus:outline-none focus:ring-0 focus:border-activeColor peer"
            placeholder=""
            required
          />
          <label
            for="floating_text"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-activeColor peer-focus:dark:text-activeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            class="block py-5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-activeColor focus:outline-none focus:ring-0 focus:border-activeColor peer"
            placeholder=""
            required
          />
          <label
            for="floating_text"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-activeColor peer-focus:dark:text-activeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Age
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-activeColor focus:outline-none focus:ring-0 focus:border-activeColor peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-activeColor peer-focus:dark:text-activeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Email
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-activeColor focus:outline-none focus:ring-0 focus:border-activeColor peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-activeColor peer-focus:dark:text-activeColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Password
          </label>
        </div>
        <button
          type="submit"
          class="text-white  bg-activeColor  focus:ring-4 focus:outline-none focus:ring-activeColor font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-activeColor dark:hover:bg-activeColor dark:focus:ring-activeColor"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
}
