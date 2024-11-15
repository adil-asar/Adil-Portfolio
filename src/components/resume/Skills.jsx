import React from "react";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import Mongo from "../../assets/mongo.png";
import Sql from "../../assets/sql.png";
import GqlImg from "../../assets/gql.png";
import REduxImg from "../../assets/redux.png";
import Postgre from "../../assets/postgre.png";
import Tailwind from "../../assets/tailwind.png";
import Material from "../../assets/mui.png";
import next from "../../assets/next.png";
import Bstrp from "../../assets/bootstrap.png";
import Linux from "../../assets/linux.png";
import Nginx from "../../assets/nginx.png";
import Postman from "../../assets/postman.png";
import GtHub from "../../assets/github.png";
import vscode from "../../assets/vscode.png";
const Skills = () => {
  const categorizedSkills = [
    {
      category: "Frontend",
      skills: [
        { id: 1, name: "React", image: ReactImg, percent: "70" },
        { id: 2, name: "Next.js", image: next, percent: "60" },
        { id: 8, name: "Redux", image: REduxImg, percent: "50" },
        { id: 9, name: "Tailwind CSS", image: Tailwind, percent: "80" },
        { id: 10, name: "Material UI", image: Material, percent: "80" },
        { id: 11, name: "Bootstrap", image: Bstrp, percent: "80" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { id: 3, name: "Node.js", image: Node, percent: "60" },
        { id: 7, name: "GraphQL", image: GqlImg, percent: "65" },
      ],
    },
    {
      category: "Database",
      skills: [
        { id: 4, name: "SQL", image: Sql, percent: "70" },
        { id: 5, name: "MongoDB", image: Mongo, percent: "65" },
        { id: 6, name: "PostgreSQL", image: Postgre, percent: "70" },
      ],
    },
    {
        category: "Tools and Technologies",
        skills: [
          { id: 12, name: "Linux", image: Linux, percent: "50" },
          { id: 13, name: "nginx", image: Nginx, percent: "50" },
          { id: 14, name: "github", image: GtHub, percent: "70" },
          { id: 15, name: "vscode", image: vscode, percent: "75" },
        ],
      },
  ];

  return (
    <div className="w-full ">
      <div className=" px-2 w-fit h-8 border-l-2 text-center flex justify-center border-[#eb3b5a] items-center">
        <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
          Technologies
        </h1>
      </div>

      {categorizedSkills.map((category) => (
        <div key={category.category} className="mt-10  ">
          <h2 className="text-sm font-semibold text-[#eb3b5a]  mt-5 mb-4">
            {category.category}:
          </h2>
          <div className="grid sm:grid-cols-6 grid-cols-2 gap-8">
            {category.skills.map((skill) => (
              <div
                key={skill.id}
                className="w-[65px] h-[65px] mx-auto mb-5 bg-[#ecf0f1] flex justify-center items-center rounded-full relative"
              >
                <div className="bg-pink-200 text-[#eb3b5a] py-[3px] px-1.5 z-10 font-bold text-xs rounded w-fit absolute left-11 -top-1">
                  <p>{skill.percent}%</p>
                </div>
                <img src={skill.image} alt={skill.name} className="w-7 h-7" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
