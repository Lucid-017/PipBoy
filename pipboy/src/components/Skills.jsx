import Data from "./json/Special.json";
import { useState } from "react";

const Skills = () => {
    const [skills,setHoveredSkills]=useState()

    const handleSkill=(skill)=>{
        setHoveredSkills(skill)
        console.log(skill)
    }

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-start">
            <div className="div1">
              {Data.skills.map((skill, index) => (
                <div onMouseEnter={()=>handleSkill(skill)} key={index} className="item flex justify-between mb-4 cursor-pointer px-2.5 py-1 hover:text-[#272b23] hover:bg-[#14fe17] hover:rounded-xs">
                  <p class="skill ">{skill.name}</p>
                  <p>{skill.score}</p>
                </div>
              ))}
            </div>
            <div className="div2 hidden sm:block">
                <div className="rw fixed">
                  <div>
                    {/* if image is attribute is hovered on */}
                    {skills && (
                      <div>
                        {/* <img src={skills.image} alt={skills.name} className="w-[300px] h-[300px] mx-auto " /> */}
                        <div className="desc">
                          <p>{skills.description}</p>
                        </div>

                      </div>
                    )}
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
