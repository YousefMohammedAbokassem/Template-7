import React, { useEffect } from "react";
import "./GoUp.css";
export default function Resume() {
  const GoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const BtnGoUp = document.querySelector(".GoUp") as HTMLButtonElement;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        BtnGoUp.style.cssText = "bottom:10%; opacity:1;";
      } else {
        BtnGoUp.style.cssText = "bottom:5%; opacity:0;";
      }
    });
  },[]);
  return (
    <button onClick={GoUp} className="GoUp  position-fixed fw-bold fs-5">
      GoUp
    </button>
  );
}
