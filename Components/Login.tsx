"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { text } from 'stream/consumers'; 


const Login = () => {
    
      const[addPassword , setAddPassword] =useState("");

     

      const [showPasswords , setShowPasswords] = useState(["hello"])
       
        


      

    
      
     
       


    const[password , setPassword] = useState(false);
   const handlePassword =()=>{
      setPassword(!password);


   }

   
   

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        
        
        event.preventDefault();
        setShowPasswords( [...showPasswords, addPassword])
        console.log(showPasswords);
       
   
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setAddPassword(event.target.value);
     
    }

  return (
    <div className='w-screen h-screen  flex items-center justify-center   px-6 md:px-12 lg:px-24  '>
      
       
        <form   onSubmit ={handleSubmit} className=' space-y-4    p-14 md:p-16 lg:p-24     rounded  bg-red-300 flex items-center flex-col justify-center mx-auto my-auto  '  >
        <div className='flex flex-col mb-2  '>
          <span className='font-medium'>Full name :</span>
          <input type="text" name="" id="" className='outline-none hover:border-1 hover:border-blue-300 hover:outline-emerald-400 rounded py-2 px-4  ' />
        </div>

        <div className='flex flex-col  mb-2   '>
          <span className='font-medium'>Enter your Email :</span>
          <input type="email" name="" id="" className='outline-none hover:outline-1 hover:outline-emerald-400 rounded py-2 px-4  ' />
        </div>
                    
        <div className=' flex flex-col  mb-2  '>
          <span className='font-medium'> Enter your password :</span>
          <div>
          <input    type={ password ? "text" : "password"}   name="" id="" value={addPassword} onChange={handleChange}  className='outline-none hover:outline-1 hover:outline-emerald-400 rounded py-2 px-4  ' />
        
        <button onClick={handlePassword} type='button' className=" focus:outline-none">
          { password ? (
            <FiEye className="text-gray-600 -ml-10" />
          ) : (
            <FiEyeOff className="text-gray-600 -ml-10 " />
          )}
        </button></div></div>
        </form>

        
       
       </div>
        
    
  )
}

export default Login
