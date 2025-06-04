import { useState } from "react";
import "./css/Special.css";
import Data from "./json/Special.json";

const General = () => {
  return (
        <div>
        <div>
          <div class="item-list  grid grid-cols-1 sm:grid-cols-2 sm:place-items-start">
            <div className="div1">
              {Data.general.map((stat, index) => (
                <div onMouseEnter={()=>handleHoveredImage(stat)} className="flex justify-between item mb-4">
                  <p  key={index} class="">{stat.name}</p>
                  <p>{stat.count}</p>
                </div>
              ))}
            </div>
            <div className="div2 hidden sm:block w-full">
              <div className="flex justify-center items-center  ">
                  <div className="fixed top-4/12">
                    {/* static image */}
                        <p className="text-center">SEEKER</p>
                        <div className="pipboy-container">
                            
                            <img src={'../../public/assets/img/Neutral.webp'} alt="Neutrual" srcset="" className="neutral flex justify-center w-[150px] h-[200px] " />
                        </div>
                        <p className="text-center">NEUTRUAL</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default General
