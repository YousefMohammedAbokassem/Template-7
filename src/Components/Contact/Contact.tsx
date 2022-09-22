import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact pt-5 " id="Contact">
      <div className=" info  text-center container">
        <h1 className="text-capitalize mb-4">Drop Me A line</h1>
        <form action="" className="w-75 m-auto">
          <div className="form-input  d-flex justify-content-center align-items-center flex-column">
            <div className="nameANDemail mt-4 w-100 d-flex align-items-center justify-content-between flex-lg-row flex-column">
              <input
                type="text"
                name=""
                id=""
                className="mb-3 w-100  me-0 me-lg-3"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name=""
                id=""
                className="mb-3 w-100   ms-0 ms-lg-3"
                placeholder="Your Email"
                required
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              className="mb-3  w-100 mx-3"
              placeholder="Your Subject"
              required
            />
            <textarea
              className=" w-100 pt-3 "
              placeholder="Your Message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
