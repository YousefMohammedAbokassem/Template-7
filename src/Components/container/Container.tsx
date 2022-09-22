import React, { Fragment, useEffect } from "react";
// import "./Container.css";
import Home from "../Home/Home";
// import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import GoUp from "../GoUp/GoUp";
import Work from "../Work/Work";
import About from "../About/About";
export default function Container() {
  // console.log(document.getElementById("Home"), "Home");
  useEffect(() => {
    // const Home = document.getElementById("Home") as HTMLDivElement;
    // const Work = document.getElementById("Work") as HTMLDivElement;
    // console.log(document.getElementById("Home"), "Home");
    // console.log(document.getElementById("Work"), "Work");
  });
  return (
    <Fragment>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <GoUp />
    </Fragment>
  );
}
