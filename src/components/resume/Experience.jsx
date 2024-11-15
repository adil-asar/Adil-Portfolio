import React from "react";

const Experience = () => {

  const expList = [
    {
      id: 1,
      title: "Mern Developer",
      company: "OffSetup",
      location: "Islamabad, Pakistan",
      startDate: "Jan 2024",
      endDate: "Present",
      description:`As a Mern Developer, I create responsive, user-friendly interfaces with React and JavaScript. I also enhance user experiences
       by implementing frontend features and contribute to backend development using Node.js, GraphQL, and SQL. Transformed design concepts into top-notch code for
 optimal functionality. Effectively communicated technical issues to team
 members and clients in a clear and concise manner. `
    },
    {
      id: 1,
      title: "Former Intern",
      company: "OffSetup",
      location: "Islamabad, Pakistan",
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      description:`As a Intern, I  Studied the technologies behind web applications,
 focusing on both frontend and backend development. Developed proficiency in working with databases,
 including SQL and MongoDB. Gained expertise in frontend development using
 JavaScript, React, and Next.js, along with UI frameworks
 like Material-UI and Tailwind CSS. Acquired skills in backend development using Node.js with
 Express and PHP.`
    }
  ];


  return (
    <div className="w-full ">
      <div className=" px-2 w-fit h-8 border-l-2  flex justify-center border-[#eb3b5a] items-center">
        <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
          Experience
        </h1>
      </div>
      <div className="flex flex-col gap-6 mt-6">
      {
        expList.map((exp) => (
          <div className="w-full p-5 gap-5 flex sm:flex-row flex-col items-center justify-center border-2 border-[#ecf0f1] rounded-md  ">
          <div className=" md:w-1/4 sm:w-1/3 w-full bg-[#ecf0f1] p-6 rounded-md  md:text-left text-center ">
          <div className="px-2 py-0.5 text-xs mb-1 text-white md:mx-0 mx-auto  w-fit bg-[#eb3b5a]   ">
          {exp.startDate} - {exp.endDate}
        </div>
            <h1 className="text-[#343a40] text-base  font-semibold">
            {exp.title}
            </h1>
            <p className="text-xs text-[#eb3b5a] font-semibold ">{ exp.company }</p>
            <p className="text-xs text-gray-500 font-semibold ">
            { exp.location }
            </p>
          </div>
          <div className="md:w-3/4 sm:w-2/3 w-full">
            <p className="text-sm text-gray-500  text-justify">
             {
               exp.description
             }
            </p>
          </div>

         
        </div>
        ))
      }
       
      </div>
    </div>
  );
};

export default Experience;
