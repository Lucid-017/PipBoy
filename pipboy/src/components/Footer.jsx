import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer class="pip-footer relative py-25 md:py-20">
      <div className="absolute w-full bottom-10">
        <div className="grid grid-col-2 sm:grid-cols-5  gap-2 w-full">
          <div className="w-full place-content-center place-items-center">
            <p>HP 53/100</p>
          </div>
          <div className="flex flex-col justify-around md:flex-row gap-1 items-center w-full sm:col-span-2">
            <p>LEVEL 5</p>
            <div className="level-progress">
              <div className="level-percent"></div>
            </div>
          </div>
          <div className="w-full place-content-center place-items-center">
            <p> AP 50/70</p>
          </div>
          <div className="w-full place-content-center place-items-center">
            <p> XP 37/200</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
