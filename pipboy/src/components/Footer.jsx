import React from "react";
import "./css/footer.css"

const Footer = () => {
  return (
    <footer class="pip-footer relative py-25 md:py-20">
      <div className="absolute w-full bottom-10">
        <div class="grid grid-col-2 sm:grid-cols-4 gap-2 w-full">
          <div class="w-full"><p>HP 53/100</p></div>
          <div class="flex flex-col justify-center md:flex-row gap-1 items-center w-full sm:col-span-2">
            <p>LEVEL 5</p>
            <div class="level-progress">
              <div class="level-percent"></div>
            </div>
          </div>
          <div class="w-full">
            <p>  AP 50/70</p>
            </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
