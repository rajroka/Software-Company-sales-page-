"use client";
import { useRouter } from "next/navigation";
import React  from "react";
import { useForm } from "react-hook-form"

import { ToastContainer, toast } from "react-toastify";
const Form = () => {
 

  const router = useRouter();

   
   const {register , formState :{errors} , handleSubmit }  = useForm()

   

  function submitForm(data ) {
 
    //   setLoading(true)
    // try {
    //     console.log(data)
    // } catch (error) {
    //    console.error('error')
    // }
    // finally{
    //   setLoading(false)
    // }


    //  console.log(data)

    
    toast.success("Form submitted successfully", {
      autoClose: 1500,
      onClose: () => router.back(),
      
    });
    
    // toast.error('form is not submitted' ,{
    //   autoClose :1500 ,
    
    // })
   
  }

  return (
    <div className="w-screen h-svh    bg-gradient-to-r from-orange-100 via-purple-200 to-blue-100  flex items-center justify-center   px-6 md:px-12 lg:px-24 ">
      <form
        className=" mx-auto px-8 py-6 md:p-16 lg:py-18  lg:px-24    space-y-2  bg-gradient-to-r from-orange-200 via-purple-200 to-blue-200    backdrop-blur-4xl rounded-lg shadow-lg border border-white/20  "
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-base font-medium">
            Enter your name :
          </label>
          <input
            type="text"
            className="rounded px-4 border-black   py-2 outline-none "
            
            {...register('name', {required : "name is required field "})}
         
          />
           <p className=" text-red-600"> {errors.name?.message as string}</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <label htmlFor="" className="text-base font-medium">
            Enter your email :
          </label>
          <input
            type="email"
            className="rounded px-4   py-2 outline-none "
              
            {...register('email', {required : "email is required field "})}
          
          />
           <p className=" text-red-600"> {errors.email?.message as string}</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <label htmlFor="" className="text-base font-medium">
            Enter your phoneNo :
          </label>
          <input
            type="number"
            className="rounded px-4   py-2 outline-none "
            
            {...register('phoneNo', {required : "number is required field "})}
           
          />
           <p className=" text-red-600"> {errors.phoneNo?.message as string}</p>
        </div>
        <div className="flex flex-col">
          {" "}
          <label htmlFor="" className="text-base font-medium">
            Appointment reason :
          </label>
          <input
            type="text"
            className="rounded px-4   py-2 outline-none "
           
            {...register('workDetails', {required : " work details  is required field "})}
          
          />
          <p className=" text-red-600"> {errors.workDetails?.message as string}</p>
        </div>
        <button className="bg-[#1834E7] text-white  px-4 py-2 rounded text-base font-medium">
          Submit
        </button>

        
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form 

