import React from "react";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import SocialmediaNavigation from "@/Components/SocialmediaNavigation";

const ContactPage = () => {
  return (
    <div className=" py-10 h-svh w-screen   px-6 md:px-12 lg:px-24 bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 space-y-4">
      

      <div className=" flex  items-center justify-center mt-10   ">
        <h3 className="font-bold text-center  px-4 py-2  text-2xl bg-[#1834E7] rounded-lg  font-serif text-white  inline-block ">
          Contact us{" "}
        </h3>
      </div>

      {/* Container */}
      <div className="w-full h-auto  font-inter  flex flex-col md:flex-row items-center mx-auto mb-10     ">
        {/* Image Section */}
        <div className=" lg:w-1/2 h-full  items-center justify-center flex mx-auto  ">
          <Image
            width={500}
            height={500}
            src="/contact.png" // Make sure the image is in the 'public' directory
            alt="Illustration representing contact"
            className="shrink-0"
          />
        </div>
        {/* Text Section */}
        <div className="   lg:w-1/2  px-8  pt-10 space-y-4   bg-white/80  backdrop-blur-sm   rounded-lg shadow-lg border border-white/20  ">
          {/* Add your text/content here */}
          <div>
            <h1 className="text-2xl font-bold mb-4 text-primary ">
              Get in Touch
            </h1>
            <p className="text-base  font-medium text-gray-700">
              We're here to help! Reach out to us for any inquiries, feedback,
              or support.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-base  flex items-center space-x-4  ">
              <MdOutlineEmail size={30} />
              Email
            </span>
            <span className="font-normal  text-base text-gray-700">rokaraaz@gmail.com </span>
          </div>
          <div className="flex flex-col">
            {" "}
            <span className="flex text-base font-medium items-center ">
              {" "}
              <FaPhone size={30} />
              Contact No :
            </span>
            <span className="font-inter text-base font-normal text-gray-700">
              {" "}
              +977 9847639271
            </span>
          </div>
          <div className="flex flex-col">
            {" "}
            <span className="flex text-base  font-medium items-center  ">
              {" "}
              <MdLocationPin size={30} />
              Based in{" "}
            </span>
            <span className="text-base font-normal text-gray-700 ">Pokhara ,Fulbari-11 </span>
          </div>
          <div>
            <Link href="/book">
              <button className="bg-[#1834E7] rounded p-2 text-white text-base  font-normal  border-none">
                Book a appointment
              </button>
            </Link>
          </div>

          <div className="flex flex-col   ">
            <div className="   ">
              <h1 className="text-center font-inter text-xs  text-gray-500 font-medium ">
                Follow us on:
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <SocialmediaNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
