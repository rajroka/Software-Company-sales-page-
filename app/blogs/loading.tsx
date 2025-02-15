import React from 'react'

const loading = () => {
  return (
    <div className="w-full min-h-svh px-6 md:px-12 lg:px-24  flex items-center flex-col  justify-center py-10  bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 ">

      <div className="  mt-12    w-10 h-5  bg-slate-500 text-3xl font-serif mb-10 rounded   ">
        
      </div>
      <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ">
           <div className='w-100 h-100  bg-slate-600'></div>
           <div className='w-100 h-100  bg-slate-600'></div>
           <div className='w-100 h-100  bg-slate-600'></div>
      </div>
    </div>
  )
}

export default loading
