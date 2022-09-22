import React, { useEffect } from "react";
import "./Home.css";
export default function Home() {
  useEffect(() => {});
  return (
    <div className="container-fluid" id="Home">
      <div className="container w-100">
        <h1 className="text-capitalize ">yousef abokassem</h1>
        <h2 className="text-capitalize ">Front end developer</h2>
        <p className="text-capitalize opacity-50 my-3  w-100">
          I am a <b> Front-End Developer</b> creating modern and
          responsive designs to Web sites. Let us work together. Thank you.
        </p>
        <button className="py-3 px-4 border-none fw-bold">Let's Begin</button>
      </div>
    </div>
  );
}
