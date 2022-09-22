import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Nav.css";
export default function Nav() {
  //nav icon
  // navIcon = document.querySelector(".navIcon") as HTMLDivElement;
  // state handle don't declare it inside the function because it will declare each time and will stay true every time
  let toggle: boolean = true;
  const Show = () => {
    let ul = document.querySelector("nav div ul") as HTMLUListElement;
    let spans = document.querySelectorAll(
      ".navIcon span"
    ) as NodeListOf<HTMLDivElement>;
    /////
    if (!toggle) {
      ul.style.cssText = " top: -300px;opacity: 0; pointer-events: none;";
      // rotate icons and opacity that in the middle
      spans.forEach((span: HTMLSpanElement) => {
        span.style.cssText = "width:39px;";
      });
      // rotate icons and opacity to return to the normal icon
      spans[0].style.cssText = "transform:rotate(0deg)";
      spans[1].style.cssText = "opacity:1";
      spans[2].style.cssText = "transform:rotate(0deg)";

      toggle = !toggle;
      // to go to the next step to return to the normal icon
    } else {
      ul.style.cssText = " top: 100px;opacity: 1; pointer-events: auto;";
      //rotate icon to show x to exit
      spans[0].style.cssText = "transform:rotate(45deg);width:39px;";
      spans[1].style.cssText = "opacity:0;width:39px;";
      spans[2].style.cssText = "transform:rotate(-45deg);width:39px;";
      // to go to the next step to return to the normal icon
      toggle = !toggle;
    }
    //nav icon
    // scroll Hover
  };
  useEffect(() => {
    // hover pointer when click show (moving it on the element that i will click it and remove classes )
    const links = document.querySelectorAll("nav ul li a"),
      hover = document.querySelector(".hover") as HTMLSpanElement;
    links.forEach((link) => {
      link.addEventListener("click", (ele) => {
        // remove classes active from all
        links.forEach((link) => {
          link.classList.remove("active");
        });
        //  add class active to target that i have put on it
        let target = ele.target as HTMLElement;
        target.classList.add("active");
        // close menu
        Show();
        if (link == links[0]) {
          hover.style.cssText = "width: 55px;left: 19px;";
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (link == links[1]) {
          hover.style.cssText = "width: 48px;left: 115px;";
        } else if (link == links[2]) {
          hover.style.cssText = "width: 79px;left: 203px;";
        } else if (link == links[3]) {
          hover.style.cssText = "width: 59px;left: 324px;";
        } else if (link == links[4]) {
          hover.style.cssText = "width: 57px;left: 424px;";
        } else if (link == links[5]) {
          hover.style.cssText = "width: 68px;left: 521px;";
        }
      });
      //  moving hover part when I arrive to the target section
      
      window.addEventListener("scroll", function (): void {
        const Work = document.getElementById("Work") as HTMLDivElement,
          Portfolio = document.getElementById("Portfolio") as HTMLDivElement,
          Profile = document.getElementById("Profile") as HTMLDivElement,
          About = document.getElementById("About") as HTMLDivElement,
          fromRight = document.querySelector(".fromRight") as HTMLDivElement,
          fromLeft = document.querySelector(".fromLeft") as HTMLDivElement;
        if (
          window.scrollY <=
          Work.offsetTop + Work.offsetHeight - this.window.innerHeight
        ) {
          // moving Hover to Home li
          hover.style.cssText = "width: 55px;left: 19px;";
          links.forEach(function (link: any): void {
            // remove active from all
            link.classList.remove("active");
            // add class active to home
            links[0].classList.add("active");
          });
        } else if (
          window.scrollY >
            Work.offsetTop + Work.offsetHeight - this.window.innerHeight &&
          window.scrollY <=
            Portfolio.offsetTop +
              Portfolio.offsetHeight -
              this.window.innerHeight
        ) {
          // moving Hover to work li
          hover.style.cssText = "width: 48px;left: 115px;";
          links.forEach(function (link: any): void {
            // remove active from all
            link.classList.remove("active");
            // add class active to work
            links[1].classList.add("active");
          });
        } else if (
          window.scrollY >
            Portfolio.offsetTop +
              Portfolio.offsetHeight -
              this.window.innerHeight &&
          this.window.scrollY <=
            Profile.offsetTop + Profile.offsetHeight - this.window.innerHeight
        ) {
          // moving Hover to work li
          hover.style.cssText = "width: 79px;left: 203px;";

          links.forEach(function (link: any): void {
            // remove active from all
            link.classList.remove("active");
            // add class active to work
            links[2].classList.add("active");
          });
        } else if (
          window.scrollY >
            Profile.offsetTop +
              Profile.offsetHeight -
              this.window.innerHeight &&
          window.scrollY <=
            About.offsetTop + About.offsetHeight - this.window.innerHeight
        ) {
          // moving Hover to work li
          hover.style.cssText = "width: 59px;left: 324px;";

          links.forEach(function (link: any): void {
            // remove active from all
            link.classList.remove("active");
            // add class active to work
            links[3].classList.add("active");
          });
        } else if (
          window.scrollY >
          About.offsetTop + About.offsetHeight - this.window.innerHeight
        ) {
          // moving Hover to work li
          hover.style.cssText = "width: 57px;left: 424px;";
          console.log('object');
          links.forEach(function (link: any): void {
            // remove active from all
            link.classList.remove("active");
            // add class active to work
            links[4].classList.add("active");
          });
        }
        // console.log('object');
      });
    });
    //
  },[]);
  /////
  return (
    <nav
      className=" nav container-fluid p-0"
      // onScroll={(event) => console.log(event)}
    >
      <div className="container  d-flex   align-items-center  justify-content-between">
        <h1 className="text-capitalize">ultra profile</h1>{" "}
        <ul className="list-unstyled d-flex  m-0 align-items-center justify-content-center">
          <li className="">
            <span className="hover d-none d-lg-inline"></span>
            <Link
              to="/Template-7"
              className="text-decoration-none text-capitalize active"
            >
              Home
            </Link>
          </li>
          <li className="">
            <a href="#Work" className="text-decoration-none text-capitalize">
              Work
            </a>
          </li>
          <li className="">
            <a
              href="#Portfolio"
              className="text-decoration-none text-capitalize"
            >
              Portfolio
            </a>
          </li>
          <li className="">
            <a href="#Profile" className="text-decoration-none text-capitalize">
              Profile
            </a>
          </li>
          <li className="">
            <a href="#About" className="text-decoration-none text-capitalize">
              About
            </a>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-decoration-none text-capitalize"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={Show} className="navIcon d-lg-none d-flex">
          <span className="mb-2"></span>
          <span className="mb-2"></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
