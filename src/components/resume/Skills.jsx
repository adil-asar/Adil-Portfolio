import React from 'react'
import ReactImg from "../../assets/react.png"; 
import Node from "../../assets/node.png"; 
import Mongo from "../../assets/mongo.png"; 
import Sql from "../../assets/sql.png"; 
import REduxImg from "../../assets/redux.png"; 

const Skills = () => {

    const skillsList = [
        {
            id:1,
            image:ReactImg,
            percent:"70"
        },
        {
            id:2,
            image:Node,
            percent:"70"
        },
        {
            id:3,
            image:Mongo,
            percent:"70"
        },
        {
            id:4,
            image:Sql,
            percent:"70"
        },
        {
            id:5,
            image:REduxImg,
            percent:"70"
        },
        {
            id:6,
            image:ReactImg,
            percent:"70"
        },
        {
            id:7,
            image:ReactImg,
            percent:"70"
        },
        {
            id:8,
            image:ReactImg,
            percent:"70"
        },
        {
            id:9,
            image:ReactImg,
            percent:"70"
        },
        {
            id:10,
            image:ReactImg,
            percent:"70"
        },
        {
            id:11,
            image:ReactImg,
            percent:"70"
        }


    ]
  return (
    <div className='w-full '>
    <div className=' w-40 h-8 border-l-2 text-center flex justify-center border-[#eb3b5a] items-center' >
    <h1 className='text-2xl font-semibold md:text-left text-center text-[#343a40]'>
      Technologies
    </h1>
    </div>
    <div className='mt-10 grid grid-cols-4 justify-center  items-center gap-10 ' >

    {
        skillsList.map(skill => (
            <div key={skill.id} className='w-24 h-24 mb-7 bg-[#ecf0f1] mx-auto flex justify-center items-center rounded-full relative  '>
            <div className='bg-pink-300 text-[#eb3b5a] py-1 px-2 z-10 font-bold text-xs rounded-md w-fit absolute left-16 -top-1 '>
            <p> {skill.percent}% </p>
             </div>
             <img src={skill.image} className='w-10 h-10 ' />
          </div>
        ))
    }
    
   
    
  
    

    </div>
 
    </div>
  )
}

export default Skills