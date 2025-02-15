import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { FaAdversal } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { TfiWordpress } from "react-icons/tfi";
import { Inter } from "next/font/google";




const Cards = () => {
  return (
    <div className=" z-10   font-inter w-screen items-center justify-center flex flex-col  py-10  bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 scroll-smooth px-6 md:px-12 lg:px-24  overflow-hidden   mx-auto  ">
      <div className="mt-10  mb-10 text-black bg-[#1834E7] px-4 py-2 rounded-lg  ">
        <h3 className="font-medium  text-center text-2xl  font-serif text-white   ">
          Our Services{" "}
        </h3>
      </div>
         
      {/* collection of  card div  */}
      <div className="items-center justify-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" bg-white  p-8 rounded-lg border text-black   hover:border-blue-500  border-white outline-none   transition-all transform hover:scale-105 duration-300">
          <MdDeveloperMode className="mb-6 w-[50px] h-[50px]" />
          <h4 className="mb-6  font-bold  font-inter  text-xl text-black ">
            Fullstack development
          </h4>
          <p className="mb-6 text-black">
            Comprehensive development of web applications using HTML,CSS,
            JavaScript, and modern frameworks for scalable solutions.
          </p>
          <ul className="mb-4 space-y-2 text-black text-base">
            <li>Web applications</li>
            <li>Frontend and backend </li>
            <li>API integration </li>
          </ul>
        </div>

        <div className=" bg-white  p-8 rounded-lg border text-black   hover:border-red-500  border-white outline-none   transition-all transform hover:scale-105 duration-300">
          <FaAdversal className="mb-6 w-[50px] h-[50px]" />
          <h4 className="mb-6  font-bold text-xl text-black ">
          Digital Marketing
          </h4>
          <p className="mb-6 text-black">
          Strategic planning and execution of online marketing campaigns using SEO, social media, email marketing,
           and data-driven insights to boost engagement and conversions.
          </p>
          <ul className="mb-4 space-y-2 text-black">
            <li>SEO </li>
            <li>Social media marketing   </li>
            <li>Email marketing </li>
          </ul>
        </div>

        <div className=" bg-white  p-8 rounded-lg border text-black   hover:border-yellow-500  border-white outline-none   transition-all transform hover:scale-105 duration-300">
          <MdOutlineAppSettingsAlt className="mb-6 w-[50px] h-[50px]" />
          <h4 className="mb-6  font-bold text-xl text-black ">
          App Development
          </h4>
          <p className="mb-6 text-black">
          Comprehensive design and development of mobile and web applications, ensuring
           functionality, usability, and performance with modern frameworks.
          </p>
          <ul className="mb-4 space-y-2 text-black">
            <li>Flutter </li>
            <li>Kotlin </li>
            <li>Swift  </li>
          </ul>
        </div>

        <div className=" bg-white  p-8 rounded-lg border text-black    hover:border-green-500   outline-none   transition-all transform hover:scale-105 duration-300">
          <MdDesignServices className="mb-6 w-[50px] h-[50px]" />
          <h4 className="mb-6  font-bold text-xl text-black ">
          Graphics Designing
          </h4>
          <p className="mb-6 text-black">
          Creative design solutions, including branding, UI/UX, and marketing collateral, using tools
           like Adobe Creative Suite for impactful visual communication.
          </p>
          <ul className="mb-4 space-y-2 text-black">
            <li>UI/UX</li>
            <li> Adobe Photoshop  </li>
            <li>Canva </li>
          </ul>
        </div>

        <div className=" bg-white p-8 rounded-lg border text-black   hover:border-pink-500   outline-none   transition-all transform hover:scale-105 duration-300">
        <TfiWordpress className="mb-6 w-[50px] h-[50px]" />

          <h4 className="mb-6  font-bold text-xl text-black ">
          WordPress Development
          </h4>
          <p className="mb-6 text-black">
          End-to-end development of WordPress websites, from theme customization to plugin development,
           delivering responsive and user-friendly sites.
          </p>
          <ul className="mb-4 space-y-2 text-black">
            <li>Designing</li>
            <li>Development  </li>
            <li>Hosting  </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
