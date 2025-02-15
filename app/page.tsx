import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Login from '../Components/Login'
import Cards from '../Components/Services'
import Form from '@/Components/Form'
import Footer from '@/Components/Footer'
import Contact from '@/Components/Contact'

const page = () => {
  return (
    <div className='smooth-scroll '>
        
      <Hero />
       
      <Cards />


      
      {/* <Login /> */}
      {/* <Form /> */}
      <Contact />
      <Footer />
      

    </div>
  )
}

export default page 
