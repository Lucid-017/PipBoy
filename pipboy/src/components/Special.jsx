import { useState,useEffect } from "react";
import "./css/Special.css";
import Data from "./json/Special.json";
import LoittieWithFallBack from "./LoittieWithFallBack";


const Special = () => {
  const [hoveredImage,setHoveredImage] = useState(null);


  const handleHoveredImage = (atrri) =>{
    console.log(atrri)
    setHoveredImage(atrri)
  }
  /**for each of the attributes, display names to the left and on hover display the image to the div at the right */
  return (
    <div>
        <div>
          <div class="item-list  grid grid-cols-1 sm:grid-cols-2 sm:place-items-start">
            <div className="div1">
              {Data.attributes.map((attri, index) => (
                <div key={index} onMouseEnter={()=>{handleHoveredImage(attri)} } className="flex justify-between item mb-4">
                  <p  >{attri.name}</p>
                  <p>{attri.score}</p>
                </div>
              ))}
            </div>
            <div className="div2 hidden sm:block">
              <div className="rw">
                  <div>
                    {/* if image is attribute is hovered on */}
                    {hoveredImage && (
                      <div>
                        {/* <img src={hoveredImage.image} alt={hoveredImage.name} className="w-[300px] h-[300px] mx-auto " /> */}
                          <LoittieWithFallBack primaryLottieUrl={hoveredImage.lottieUrl} fallbackPath={hoveredImage.lottieFallback} alt={hoveredImage.name}/>
                        
                        <div className="desc">
                          <p>{hoveredImage.description}</p>
                        </div>

                      </div>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Special;
