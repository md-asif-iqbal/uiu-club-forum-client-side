
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollTop.css";
const ScrollTop = () => {
     const [visible, setVisible] = useState(false);

     const toggleVisible = () => {
       const scrolled = document.documentElement.scrollTop;
       if (scrolled > 500) {
         setVisible(true);
       } else if (scrolled <= 500) {
         setVisible(false);
       }
     };

     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
         /* you can also use 'auto' behaviour
         in place of 'smooth' */
       });
     };

     window.addEventListener("scroll", toggleVisible);
    return (
      <div>
        <button className="buttons right-0 text-right mr-10 animate-bounce">
          <FaArrowCircleUp size={40}
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        </button>
      </div>
    );
};

export default ScrollTop;