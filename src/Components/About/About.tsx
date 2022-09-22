import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
export default function About() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("js/data.json")
      .then((res) => {
        setInfo(res.data.social);
      })
      .catch((err) => console.log(err));
    // console.log(info);
  }, []);
  const showInfo = () => {
    return (
      <div className="row ">
        {info.map((item: any) => {
          return (
            <div key={item.id} className={item.social}>
              <div className=" me-3 p-3 bg-white text-black-50">
                <i className={item.icon}></i>
              </div>
              <div>
                <span className="d-block fw-bold text-white fs-3">{item.title}</span>
                <span className="d-block text-white fs-4">{item.body}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div id="About" className="container-fluid">
      {/* start info */}
      <div className="container py-5">
        <div className="info w-50 ms-auto text-md-end text-center  ">
          <h1 className="text-capitalize">this is me</h1>
          <h2 className="text-capitalize">creative director</h2>
          <p className="my-3 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            adipisci ab sequi, corporis magni nobis recusandae, eos officia
            vitae dolore perferendis explicabo voluptates commodi distinctio
            voluptatibus cumque maxime, et ut?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            adipisci ab sequi, corporis magni nobis recusandae, eos officia
            vitae dolore perferendis explicabo voluptates commodi distinctio
            voluptatibus cumque maxime, et ut?
          </p>
        </div>
      </div>
      {showInfo()}
      {/* start Icons */}
    </div>
  );
}
