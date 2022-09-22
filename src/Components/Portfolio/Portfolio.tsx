// import React from "react";
import React, { useRef, useState, useEffect, useMemo } from "react";
// import axios for parse json file
import axios, { AxiosResponse } from "axios";
import "./Portfolio.css";

export default function Portfolio() {
  const [info, setInfo] = useState([]);
  const showInfo = () => {
    return (
      <>
        {info.map((item: any) => {
          return (
            <div className={item.type} key={item.id}>
              <div>
                <img src={item.image} className="w-100" alt="" />
              </div>
            </div>
          );
        })}
      </>
    );
  };
  // remove active from all and put it on target and filter gallery
  const lis = document.querySelectorAll(
      "#Portfolio ul li"
    ) as NodeListOf<HTMLLIElement>,
    div = document.querySelectorAll(
      "#Portfolio .row >div"
    ) as NodeListOf<HTMLDivElement>;
  // start filterGallery
  // const filterGallery = () => {

  //   console.log("filterGallery", "filterGallery");
  // };

  // end filterGallery
  // start show popup when I click on image
  const images = document.querySelectorAll(
    "#Portfolio .gallery .image div img"
  ) as NodeListOf<HTMLImageElement>;

  // const popup = () => {
  //   images.forEach((img: HTMLImageElement) => {
  //     img.addEventListener("click", (e) => {
  //       const target = e.target as HTMLImageElement;
  //       let div = document.createElement("div") as HTMLDivElement,
  //         span = document.createElement("span") as HTMLSpanElement,
  //         image = document.createElement("img") as HTMLImageElement;
  //       // put the target src
  //       div.classList.add("imagePopup");
  //       image.src = target.src;
  //       image.classList.add("w-75");
  //       // add image to the
  //       div.appendChild(image);
  //       // add X for exit
  //       let textX: Text = document.createTextNode("X");
  //       span.appendChild(textX);
  //       div.appendChild(span);
  //       //  exit image
  //       span.addEventListener("click", (e) => {
  //         const target = e.target as HTMLSpanElement;
  //         div.remove();
  //         console.log(`first`);
  //       });
  //       // add popup to the body
  //       document.body.appendChild(div);
  //       console.log("popup");
  //     });
  //   });
  // };

  useEffect(() => {
    axios
      .get("js/data.json")
      .then((res: AxiosResponse) => {
        setInfo(res.data.portfolio);
      })
      .catch((err: Error) => {
        console.log(err);
      });
    // filterGallery();
    lis.forEach((li) => {
      li.addEventListener("click", (e: MouseEvent) => {
        //remove class active from all
        lis.forEach((li) => {
          li.classList.remove("active");
        });
        // declare the element (like extends the interface)
        const target = e.target as HTMLElement;
        // add class active to target
        target.classList.add("active");
        // filter gallery give the class types from dataset of e.target
        div.forEach((item: any) => {
          item.style.cssText = "width:0; padding:0";
        });
        document
          .querySelectorAll(`${target.dataset.type}`)
          .forEach((item: any) => {
            item.style.cssText = "opacity:1";
          });
      });
    });
    // filterGallery();
    // popup();
    lis.forEach((li) => {
      li.addEventListener("click", (e: MouseEvent) => {
        //remove class active from all
        lis.forEach((li) => {
          li.classList.remove("active");
        });
        // declare the element (like extends the interface)
        const target = e.target as HTMLElement;
        // add class active to target
        target.classList.add("active");
        // filter gallery give the class types from dataset of e.target
        div.forEach((item: any) => {
          item.style.cssText = "width:0; padding:0";
        });
        document
          .querySelectorAll(`${target.dataset.type}`)
          .forEach((item: any) => {
            item.style.cssText = "opacity:1";
          });
      });
    });
    // console.log("filterGallery", "filterGallery");
    // randomNum();
    // popup();
    // put [] in the future and fix the problem
  });
  return (
    <div id="Portfolio" className="py-5">
      <div className="container-fluid text-center">
        <h2 className="text-capitalize my-4">my portfolio</h2>
        <ul className="list-unstyled my-3 d-flex align-items-center justify-content-center flex-sm-row flex-column">
          <li className="text-uppercase py-2 px-4 active" data-type=".all">
            all
          </li>
          <li className="text-uppercase py-2 px-4" data-type=".html">
            html
          </li>
          <li className="text-uppercase py-2 px-4" data-type=".css">
            css
          </li>
          <li className="text-uppercase py-2 px-4" data-type=".js">
            js
          </li>
          <li className="text-uppercase py-2 px-4" data-type=".react">
            react
          </li>
        </ul>
        <div className="gallery row">{showInfo()}</div>
      </div>
      <img src="/public/images/Portfolio/portfolio-img8.jpg" alt="" />
    </div>
  );
}
