import React from "react";
import "./css/Status.css";
import centergif from "../assets/img/homescreen.gif";
import pistol from "../assets/img/996px-Pistol_icon.svg.png";
import crossHairs from "../assets/img/icons8-center-of-gravity-50.png";
import helmet from "../assets/img/military-helmet-svgrepo-com.svg";
import lightning from "../assets/img/icons8-lightning-bolt-90.png";
import danger from "../assets/img/icons8-nuclear-90.png";

const Status = () => {
  return (
    <div>
      <div className="container sm:max-w-5/12 mx-auto">
        <div className="grid grid-cols-4 grid-rows-4 sm:grid-rows-5 gap-2 w-full h-120 ">
          {/* main image span col2 to 3, rows 2 and 4 */}
          <div className="col-start-2 col-end-4 row-start-2 row-end-4 sm:row-end-5  place-content-center mx-auto">
            <div class="center-image place-content-center">
              <img className="w-full h-full" src={centergif} alt="pipboy" />
            </div>
          </div>
          {/* health bar on head row 1 col2 */}
          <div className="col-start-2 col-end-4 row-start-1 place-content-center mx-auto">
            <div className="text-center">
              <small className="mx-auto font-semibold">Head</small>
            </div>
            <div class="stat-bar w-[60px] h-[20px] md:w-[40px] md:h-[15px]">
              <div class="level-progress">
                <div class="level-percent l70"></div>
              </div>
            </div>
          </div>
          {/* health bar on left shoulder row 2 col1 */}
          <div className="col-start-1 row-start-2  place-content-end justify-self-end sm:justify-self-center">
            <div>
              <small className="text-center font-semibold">Left hand</small>
              <div class="stat-bar">
                <div class="level-progress">
                  <div class="level-percent l10"></div>
                </div>
              </div>
            </div>
          </div>
          {/* health bar on right shoulder row 2 col3 */}
          <div className="col-start-4 row-start-2  place-content-end justify-self-start sm:justify-self-center">
            <div>
            <small className="text-center font-semibold">Right hand</small>
            <div class="stat-bar">
              <div class="level-progress">
                <div class="level-percent l50"></div>
              </div>
            </div>
            </div>

          </div>
          {/* health bar on left leg row 4 col1 */}
          <div className="col-start-1 row-start-3 sm:col-start-1 sm:row-start-4 place-content-center justify-self-end sm:justify-self-center">
          <div>
            <small className="text-center font-semibold">Left Leg</small>
            <div class="stat-bar">
              <div class="level-progress">
                <div class="level-percent l50"></div>
              </div>
            </div>
            </div>
          </div>
          {/* health bar on right leg row 4 col3 */}
          <div className="col-start-4 row-start-3 sm:col-start-4 sm:row-start-4 place-content-center justify-self-start sm:justify-self-center">
          <div>
            <small className="text-center font-semibold">Right Leg</small>
            <div class="stat-bar">
              <div class="level-progress">
                <div class="level-percent l50"></div>
              </div>
            </div>
            </div>
          </div>
          {/* health bar on leg row 5 col2 */}
          <div className="col-start-2 col-end-4 row-start-4 sm:col-start-2 sm:row-start-5 place-content-start mx-auto">
            <div className="text-center">
              <small className="mx-auto font-semibold">Health</small>
            </div>
            <div class="stat-bar">
              <div class="level-progress">
                <div class="level-percent l50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ammo info */}
      <div className="belt w-1/2 mx-auto my-4">
        <div className="containerdiv flex flex-wrap space-y-1 justify-around">
          <div className="two flex items-center">
            <div className="row fullimg image p-1 flex justify-center items-center">
              <img className="max-w-10" src={pistol} alt="pistol image" srcset={pistol} />
            </div>
            <div className="row flex flex-col items-center space-y-1">
              <div className="img">
                <img className="max-w-6" src={crossHairs} alt="crosshair image" srcset={crossHairs}/>
              </div>
              <p className="num">18</p>
            </div>
          </div>
          <div className=" three flex space-x-1">
            <div className="row fullimg image p-1 flex justify-center items-center">
              <img className="max-w-10" src={helmet} alt="helmet image" srcset={helmet} />
            </div>
            <div className=" row statbox flex flex-col items-center space-y-1">
              <div className="img">
                <img className="max-w-6" src={lightning} alt="ligtning icon" srcset={lightning} />
              </div>
              <div className="num">18</div>
            </div>
            <div className="row statbox flex flex-col items-center space-y-1">
              <div className="img">
              <img className="max-w-6" src={danger} alt="biohazard icon" srcset={danger} />
              </div>
              <div className="num">18</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
