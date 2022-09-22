import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Work.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WOW from "wowjs";
export default function Work() {
  // let info:string;
  let [info, setInfo] = useState([]);
  const showInfo = () => {
    return (
      <div id="Work" className="py-5">
        <div className="container">
          <h1 className="text-capitalize mb-4">my work</h1>
          <div className="info row d-flex justify-content-center align-items-center">
            {info.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="text-center my-3 col-md-4 col-sm-6  d-flex align-items-center justify-content-center flex-column"
                >
                  <div className="infoChild py-5">
                    <div className="icon mb-3 ">
                      <i className={item.icon_name}></i>
                    </div>
                    <h2>{item.title}</h2>
                    <hr></hr>
                    <p className="px-3">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  // Hover span scroll 
    
  useEffect(() => {
    axios
      .get("js/data.json")
      .then((res) => setInfo(res.data.works))
      .catch((err) => console.log("object"));
  }, []);
  return <>{showInfo()}</>;
}
