import React from 'react'
import Hero from '../../pages/Hero'
import heroImage from '../../assets/show.jpg'


function Main() {
    const gradientStyle = {
        background: 'linear-gradient(120deg, #000000, #333333)',
        minHeight: '50vh', // Ensures the gradient covers the entire viewport height
        // Add other styles as needed
      };
    
  return (
    <div>
      
    <div className="h-[80vh] flex" style={gradientStyle}>
      {/* <div className='relative'>
      <div className='circle bg-[#0ea5e9] w-[50vh] h-80 absolute rounded-full top-[30vh] filter blur-3xl right-[40vh]'></div></div> */}
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center text-center">
        <div>
          <Hero />
        </div>
      </div>
      

      {/* Right Section */}
      {/* <div className="flex-1 flex items-center justify-center">
        <div className="max-h-full max-w-full rounded-3xl overflow-hidden mr-40">
          <img src={heroImage} alt="Hero Image" className="w-full h-auto" />
        </div>
      </div> */}
    </div>
    </div>
  )
}

export default Main