import React from 'react'
import { PiCoffeeThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { PiClockUserThin } from "react-icons/pi";
import { PiBagThin } from "react-icons/pi";
const Funfacts = () => {

    const factsItems = [
        {
          id: 1,
          name: "Projects Done",
          image: <PiBagThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"5 +",
        },
        
        {
          id: 2,
          name: "Working Hours",
          image: <PiClockUserThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"2500 +",
        },
        {
          id: 3,
          name: "Awards Won",
          image: <PiMedalThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"4 +",
        },
        {
          id: 4,
          name: "Coffee Consumed",
          image: <PiCoffeeThin className='text-4xl mx-auto text-[#eb3b5a]' />,
          Note:"1200 +",
        },
      ];
    

  return (
    <div className="w-full   mt-7    ">
    <div className=" px-2 w-fit h-8 border-l-4  flex justify-center border-[#eb3b5a] items-center">
    <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
      Fun Facts
    </h1>
  </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 mt-10 gap-5">
    {
factsItems.map((fact)=>(
    <div key={fact.id} className=' px-6 py-12 rounded-md  border border-[#ecf0f1] text-center '>
    
    <div className='w-16 h-16 mx-auto bg-[#ecf0f1] rounded-md mb-4 flex items-center justify-center '>
    {
        fact.image 
       }
    </div>
    <h2 className='   text-[#eb3b5a] text-lg font-bold mb-1 '>{fact.name}</h2>
    <p className=' md:text-base text-sm text-gray-500'>{fact.Note}</p>
  </div>
))
    }
    </div>

    </div>
  )
}

export default Funfacts