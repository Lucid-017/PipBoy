import React from "react";
import "./css/footer.css"

const Footer = () => {
  return (
    <footer class="pip-footer">
      <div class="grid grid-col-2 sm:grid-cols-4 gap-2 w-full">
        <div class="w-full">HP 50/100</div>
        <div class="flex flex-wrap gap-1 items-center w-full sm:col-span-2">
          <p>LEVEL 1</p>
          <div class="level-progress">
            <div class="level-percent"></div>
          </div>
        </div>
        <div class="w-full">AP 50/70</div>
      </div>
    </footer>
  );
};

export default Footer;
