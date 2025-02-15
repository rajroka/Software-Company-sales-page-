"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Form = () => {
    const [message, setMessage] = useState<string>("All fields are required ");
    
    
    
    const [userData , setUserData] = useState({
        name :"",
        email:"",
        phoneNo:"",
    })

    

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setUserData( 
            {
                ...userData,
                [event.target.name]:event.target.value
            }
        )
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!userData.name || !userData.email || !userData.phoneNo) {
            setMessage("All fields are required.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setMessage("Form submitted successfully!");
        console.log(userData);

        setUserData({
            name :"",
            email:"",
            phoneNo:"",
        })

        alert("Form submitted successfully")


    }

  return (
    <div className=' font-inter w-screen h-screen bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 flex items-center justify-center px-6 md:px-12 lg:px-24 '>
      
    <form  className='bg-green-500 mx-auto p-8 md:p-16 lg:p-24   space-y-4 rounded  shadow-lg  ' onSubmit={handleSubmit}  >


      
        <div className='flex flex-col'><label htmlFor="" className='text-base font-medium'>Enter your name :</label>
        <input type="text" className='rounded px-4   py-2 outline-none '  name="name"  value={userData.name} onChange={handleChange}/></div>
        <div  className='flex flex-col'> <label htmlFor="" className='text-base font-medium' >Enter your email :</label>
        <input type="email"  className='rounded px-4   py-2 outline-none '  name="email" value={userData.email} onChange={handleChange}/></div>
        <div  className='flex flex-col'> <label htmlFor="" className='text-base font-medium'>Enter your phoneNo :</label>
        <input type="number" className='rounded px-4   py-2 outline-none '  name= "phoneNo" value={userData.phoneNo}  onChange={handleChange} /></div>
        
        <button className='bg-slate-500 px-4 py-2 rounded text-base font-medium'>Submit </button>
       
         
             <p className='text-white text-base  text-center font-medium'>{message}</p>
         

    </form>
    </div>
  )
}

export default Form
