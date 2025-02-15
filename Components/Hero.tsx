import React from 'react'

const Hero = () => {
  return (
    
      
      <div  className='  font-inter  min-h-[570px] w-screen overflow-hidden  px-6 md:px-12 lg:px-24 bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100' >

        
       
                  {/* wraper */}
             <div className=' mx-auto  flex flex-col  lg:flex-row  '>
             

           {/* 1st div  */}
          <div className=' lg:w-1/2 pt-10  bg-yellow-300   item-center justify-center space-y-6  '>
           <p className='bg-[#1834E7] text-wrap rounded text-sm font-medium text-white px-1  py-2 inline-block mt-10  '>Welcome to gg digitals ,where your ideas become reality . </p>
           <h1 className='text-4xl font-bold '>We provide best services to our clients with our experienced team   </h1>
            <button className=' p-2  rounded border-none font-medium text-base bg-[#1834E7] text-white  ' >Book an appointment </button>
             
          </div>

          {/* 2nd div  */}
          <div className=' lg:w-1/2   mx-auto '>
          <img src="/image.png" alt="Man vector" height={550} width={550} className='object-cover  ' />
          </div>
         
              
          </div>

              
          
    </div>
    
  )
}

export default Hero
