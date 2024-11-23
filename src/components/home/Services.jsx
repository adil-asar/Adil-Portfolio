import React from 'react'

import { PiLaptopThin } from "react-icons/pi";
import { PiCodeThin } from "react-icons/pi";
import { PiGearThin } from "react-icons/pi";
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
const Services = () => {
    const servicesItem = [
        {
          id: 1,
          name: "Web Design and Development",
          image: <PiLaptopThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"As a proficient web developer, I specialize in designing and developing visually appealing and functional websites.",
        },
        
        {
          id: 2,
          name: "E-commerce Development",
          image: <PiCodeThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"I design and create online stores and platforms, to help companies successfully market their goods and services.",
        },
        {
          id: 3,
          name: "Responsive Web Design",
          image: <PiDeviceMobileSpeakerLight className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:" I build websites that adjust and optimize their appearance and content depending on the device's screen size and orientation.",
        },
        {
          id: 4,
          name: "Website Maintenance",
          image: <PiGearThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"Website maintenance involves ongoing management to ensure websites remain functional and up to date.",
        },
       
      
      ];
    
  return (
    <div className='w-full  mt-10  '>
    <div className=" px-2 w-fit h-8 border-l-4  flex justify-center border-[#eb3b5a] items-center">
    <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
      Services
    </h1>
  </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10    md:gap-6 gap-5">
    {
        servicesItem.map(service => (
          <div key={service.id} className=' p-4 rounded-md text-center border border-[#ecf0f1]'>
          <div className='w-16 h-16 mx-auto bg-[#ecf0f1] rounded-md mb-4 flex items-center justify-center '>
          {
              service.image 
             }
          </div>
            <h2 className='  mb-1 text-[#eb3b5a] text-lg font-bold '>{service.name}</h2>
            <p className=' md:text-base text-sm text-gray-500'>{service.Note}</p>
          </div>
        ))
  
    }

</div>
    </div>
  )
}

export default Services