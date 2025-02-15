"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className=" z-[999]   sticky   top-0  bg-[#1834E7]  text-white">
      <div className="w-screen  mx-auto h-[70px] px-6 md:px-12 lg:px-24 flex items-center justify-between  ">
        <div className=" font-semibold  ">
          <Link href="/" className="flex ">
            <span className="flex justify-center items-center">
              {" "}
              <Image
                width={50}
                height={50}
                src="/logo.png"
                alt="Logo"
                className="rounded-xl"
              />{" "}
            </span>
          </Link>
        </div>

        {/* desktop navigation */}
        <div className="hidden md:flex font-medium">
          <ul className="flex items-center space-x-6 ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>

            <Link href="/book">
              <button className="bg-white  rounded p-2 text-black hover:text-white hover:bg-blue-400 border-none">
                Book a appointment
              </button>
            </Link>
          </ul>
        </div>

        {/* mobile navigation */}
        <div
          className="flex md:hidden p-2 bg-white rounded    "
          onClick={handleToggle}
        >
          {toggle ? <RxCross2 className="text-black" /> : <RxHamburgerMenu className="text-black" />}
        </div>

        <div
          className={`absolute top-16 right-0  px-6  w-full   backdrop-blur-sm    md:hidden ${
            toggle ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col  bg-slate-200  shadow-lg space-y-2 text-black font-inter text-base rounded   ">
            <Link href="/" onClick={() => setToggle(false)} className=" font-semibold hover:bg-slate-300 px-4 py-2 text-center">Home</Link>
            <Link href="/blogs" onClick={() => setToggle(false)} className=" font-semibold hover:bg-slate-300 px-4 py-2 text-center">Blogs</Link>
            <Link href="/services" onClick={() => setToggle(false)} className=" font-semibold hover:bg-slate-300 px-4 py-2 text-center">Services</Link>
            <Link href="/contact" onClick={() => setToggle(false)} className=" font-semibold hover:bg-slate-300 px-4 py-2 text-center">Contact</Link>
          </div>
        </div>

        {/* dropdown menu for mobile */}
        {/* {toggle && (
          <div className="fixed inset-0 bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 px-10 py-4 grid -grid-cols-1 items-start md:hidden">
            <div className="justify-between flex w-[100%]">
              <div className="flex gap-1 font-semibold ">
                <img src="" alt="hello" />
                <span>Ggdigitals</span>
              </div>

              <div
                className="flex md:hidden p-2 bg-white rounded "
                onClick={handleToggle}
              >
                {toggle ? <RxCross2 /> : <RxHamburgerMenu />}
              </div>
            </div>

            <div className="w-[100%] mb-[90%] ">
              <ul className="flex flex-col p-2 justify-center items-center font-medium font-sans space-y-1">
                <li className="bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-2 border-black p-2 flex w-[100%] justify-center rounded">
                  <Link href="/" className="w-full text-center">
                    Home
                  </Link>
                </li>
                <li className="bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-2 border-black p-2 flex w-[100%] justify-center rounded">
                  <Link href="/services" className="w-full text-center">
                    Services
                  </Link>
                </li>
                <li className="bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-2 border-black p-2 flex w-[100%] justify-center rounded">
                  <Link href="/contact" className="w-full text-center">
                    Contact
                  </Link>
                </li>
                <li className="bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-2 border-black p-2 flex w-[100%] justify-center rounded">
                  <Link href="/blogs" className="w-full text-center">
                    Blogs
                  </Link>
                </li>
                <button className="py-3 bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-2 border-black border-none rounded w-[100%]">
                  <Link href="/bookaappointment" className="w-full text-center">
                    Book an appointment
                  </Link>
                </button>
              </ul>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
