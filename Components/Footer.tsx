"use client";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link"; // Import Link for navigation

import Image from "next/image";
import { getSubscribe } from "@/app/api/Subscribe";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [Loading ,setLoading]  = useState(false)
  const router = useRouter() ;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("")
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail("")

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
        try{
         
          // console.log(email)
            await  getSubscribe( email );
           toast.success("Email sent successfully" , {
            autoClose : 1500 ,
            onClose : ()=>( router.push("/"))
           })
         
          
        }
        catch(error){
           console.error("error has occurred ")
           toast.error("Email not sent " , {
            autoClose : 1000 
           })

          
        }

        finally{
          setLoading(false)
         }
        
  }
 

  return (
    <div className=" font-inter w-screen h-auto bg-gradient-to-r     from-orange-100 via-purple-100 to-blue-100    ">
    <div className="w-screen    px-6 md:px-12 lg:px-24 flex items-center justify-center py-10   bg-[#1834E7] rounded-tl-full ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8  mt-20 bg">
          <span className="  rounded-xl  "><Image width={50} height={50} src="/logo.png" alt="Logo" className="rounded-xl" /></span>
          <p className="font-normal text-base font-inter  text-start  text-white  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            fuga incidunt, ipsam except quos sapient
          </p>
        </div>
        <div className="items-center justify-center flex flex-col p-8 mx-auto w-[100%] space-y-4  text-white">
          <h2 className="text-center font-medium text-2xl lg:text-3xl">
            Links
          </h2>
          <ul className="font-normal   text-base w-[100%] justify-center flex items-center flex-col space-y-1 ">
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
              <Link href="/Bookaappointment" className="hover:underline">
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex rounded-sm outline-none hover:outline-none items-center justify-center mx-auto w-[100%]  ">
          <form onSubmit={handleSubmit} className="mx-auto flex  space-x-2 ">
            <input
              type="email"
              value={email}
              className="rounded outline-none px-2  py-2 text-black"
              required
              onChange={ handleChange}
            />
            <button
              className="rounded px-4 py-2 border-2 bg-black  text-white   hover:bg-blue-600 font-sans font-medium"
              type="submit"
              
            >
               {Loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default Footer;
