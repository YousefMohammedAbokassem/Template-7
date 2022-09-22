import React, { useEffect } from "react";
import "./Options.css";
export default function Options() {
  useEffect(() => {
    let myOption = document.querySelector(".option") as HTMLElement;
    let myGear = document.querySelector(".fa-gear") as HTMLElement;
    let optionButton = document.querySelector(".option .optionButton");
    myGear.addEventListener("click", function () {
      console.log("first");
      myOption.classList.toggle("active");
      myGear.classList.toggle("fa-spin");
    });
    // session storage
     let spans = document.querySelectorAll(".option .color span ");
     let localColor = sessionStorage.getItem("color1");

     if (localColor !== null) {
       document.documentElement.style.setProperty(
         "--SpText-color",
         sessionStorage.getItem("color1")
       );
       spans.forEach(function (span: any) {
         span.classList.remove("active");

         if (span.dataset.color1 === localColor) {
           span.classList.add("active");
         }
       });
     }
     spans.forEach(function (span) {
       span.addEventListener("click", function (el: any) {
         spans.forEach(function (e) {
           e.classList.remove("active");
         });
         el.target.classList.add("active");
         // set item
         sessionStorage.setItem("color1", el.target.dataset.color1);

         // set item
         document.documentElement.style.setProperty(
           "--SpText-color",
           el.target.dataset.color1
         );

       });
     });
    // session storage
  }, []);
  return (

    <div className="option">
      <div className="option-list">
        <i className="fa fa-gear text-light"></i>
      </div>
      <div className="colors">
        <h5>Colors</h5>
        <div className="color">
          <span data-color1="#eb5424" className="active"></span>
          <span data-color1="#e91e63"></span>
        </div>
      </div>
    </div>
    //   {/* <!-- end option  --> */}
  );
}
