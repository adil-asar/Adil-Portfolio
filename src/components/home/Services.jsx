import React from 'react'
import Dev from "../../assets/development.png"
import Ecom from "../../assets/ecommerce.png"
import RWD from "../../assets/responsive.png"
import Maintenance from "../../assets/maintenance.png"
const Services = () => {
    const servicesItem = [
        {
          id: 1,
          name: "Web Design and Development",
          image: Dev,
          Note:"As a proficient web developer, I specialize in designing and developing visually appealing and functional websites.",
        },
        
        {
          id: 2,
          name: "E-commerce Development",
          image: Ecom,
          Note:"I design and create online stores and platforms, to help companies successfully market their goods and services.",
        },
        {
          id: 3,
          name: "Responsive Web Design",
          image: RWD,
          Note:" I build websites that adjust and optimize their appearance and content depending on the device's screen size and orientation.",
        },
        {
          id: 4,
          name: "Website Maintenance",
          image: Maintenance,
          Note:"Website maintenance involves ongoing management to ensure websites remain functional and up to date.",
        },
       
      
      ];
    
  return (
    <div className='w-full py-8 border-t  '>
    <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
    Services
  </h1>
  <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
        Development, Maintenance, RWD
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6    md:gap-6 gap-5">
    {
        servicesItem.map(service => (
          <div key={service.id} className=' p-4 rounded-md text-center'>
            <img src={service.image} alt={service.name} className='w-11 mb-4 mx-auto' />
            <h2 className='  mb-1 text-[#eb3b5a] text-lg font-bold '>{service.name}</h2>
            <p className=' md:text-base text-sm text-[#343a40]'>{service.Note}</p>
          </div>
        ))
  
    }

</div>
    </div>
  )
}

export default Services