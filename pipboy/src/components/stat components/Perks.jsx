import Data from "../json/Special.json";
import { useState } from "react";


const Perks = () => {
  const [perk,setHoveredPerk]=useState('')

  const handleperk=(perk)=>{
    setHoveredPerk(perk)
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-start">
            <div className="div1">
              {Data.perks.map((perk, index) => (
                <div className="item mb-4">
                  <p onMouseEnter={()=>handleperk(perk)} key={index} class="perk cursor-pointer px-2.5 py-1 hover:text-[#272b23] hover:bg-[#14fe17] hover:rounded-xs">{perk.name}</p>
                  <small>{perk.requirements !== 'None' && `Requires ${perk.requirements}`}</small>
                </div>
              ))}
            </div>
            <div className="div2 hidden sm:block">
              <div className="rw">
                  <div>
                    {/* if image is attribute is hovered on */}
                    {perk && (
                      <div>
                        <img src={perk.image} alt={perk.name} className="w-[300px] h-[250px] mx-auto " />
                        <div className="desc">
                          <p>{perk.description}</p>
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

export default Perks
