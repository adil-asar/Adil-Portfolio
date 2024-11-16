import React from 'react'
import Offsetup from '../../assets/offsetup.png'
import Wready from '../../assets/wready.png'
import Dream from '../../assets/dream.png'
import tax  from '../../assets/tax.png'
const Portfolio = () => {

  const Projects = [
    {
      name: "Offsetup",
      image: Offsetup,
      link: "https://www.offsetup.com/",
      description: `IT company website`,
      skills: [
        { id: 1, skill: "NextJS" },
        { id: 2, skill: "Tailwind" },
        { id: 3, skill: "Context Api" }
      ]
    },
    {
      name: "Tax (Filer)",
      image: tax,
      link: "https://tax.filer.pk/",
      description: `Tax Filing System (Filer) Portal`,
      skills: [
        { id: 1, skill: "NextJS" },
        { id: 2, skill: "Tailwind" },
        { id: 3, skill: "Context Api" },
        { id: 4, skill: "NodeJS" },
        { id: 5, skill: "SQL" },
        { id: 6, skill: "GraphQL" }
      ]
    },
    {
      name: "Tax (Lawyer)",
      image: tax,
      link: "https://lawyer.filer.pk/",
      description: `Tax Filing System (Lawyer) Portal`,
      skills: [
        { id: 1, skill: "NextJS" },
        { id: 2, skill: "Tailwind" },
        { id: 3, skill: "Context Api" },
        { id: 4, skill: "NodeJS" },
        { id: 5, skill: "SQL" },
        { id: 6, skill: "GraphQL" }
      ]
    },
    {
      name: "Wready",
      image: Wready,
      link: "https://www.wready.com/",
      description: `Services website`,
      skills: [
        { id: 1, skill: "NextJS" },
        { id: 2, skill: "Tailwind" },
        { id: 3, skill: "Context Api" },
      
      ]
    },
    {
      name: "Dream",
      image: Dream,
      link: "https://shopping-cart-offsetup.netlify.app/",
      description: `Shopping Cart Site`,
      skills: [
        { id: 1, skill: "ReactJS" },
        { id: 2, skill: "Material UI" },
        { id: 3, skill: "Context Api" },
        { id: 3, skill: "Reducers" },
      
      
      ]
    }
  ];
  

  return (
    <div className="  px-6 py-10 bg-white mt-20  font-ubuntu  w-full ">
    <div className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto ">
    <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
    Portfolio
  </h1>
  <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
My Projects Showcase
  </div>

  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10    gap-8">

  {Projects.map((project) => (
    <a
      key={project.name}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shadow overflow-hidden shrink-0 group border-2 rounded-md border-[#ecf0f1]"
    >
      <img
        src={project.image} // Assuming you have an image path stored in each project object
        alt={`${project.name} Portfolio Image`}
        className=""
      />
      <div className="absolute inset-0 -ml-[100%] p-5 bg-white bg-opacity-90 flex flex-col justify-around overflow-hidden w-full group-hover:ml-0 transition-all duration-700 ease-in-out">
       <div>
       <h1 className="text-lg font-semibold text-[#eb3b5a] ">{project.name}</h1>
       <p className="text-sm text-gray-500">{project.description}</p>
       </div>
        <div className="mt-2 flex gap-5 flex-wrap">
          {project.skills.map((skill) => (
            <div key={skill.id} className="w-fit py-1 px-2 bg-[#eb3b5a]">
              <p className="text-xs text-white">{skill.skill}</p>
            </div>
          ))}

          </div>
        </div>
      </a>
    ))}

 



 
  
  </div>

    </div>
    </div>
  )
}

export default Portfolio