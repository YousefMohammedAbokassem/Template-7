import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios, { AxiosResponse } from "axios";
import { setInterval } from "timers";
export default function Profile() {
  const [info, setInfo] = useState([]);
  const ProfileSection = document.getElementById("Profile");

  useEffect(() => {
    axios
      .get("js/data.json")
      .then((res: AxiosResponse) => {
        setInfo(res.data.resume);
      })
      .catch((err: Error) => {
        console.log(err);
      });
    // scroll part
    const progresses = document.querySelector(".progresses") as HTMLDivElement;
    const skills = document.querySelectorAll(
      ".progresses .skill"
    ) as NodeListOf<HTMLDivElement>;
    const spans = document.querySelectorAll(
      ".progresses .skill .span"
    ) as NodeListOf<HTMLSpanElement>;
    //  for count increment
    let status: boolean = true;
    let counte: number = 0;
    // handle setInterval
    let counter;
    window.addEventListener("scroll", function (): void {
      if (
        window.scrollY >=
        progresses.offsetTop + progresses.offsetHeight - this.window.innerHeight
      ) {
        //
        skills.forEach((skill: any) => {
          skill.style.width = skill.dataset.progress;
        });
        //
        if (status == true) {
          spans.forEach((span: any) => {
            let goal = span.dataset.progress;
            span.innerHTML = 0;
            let counter = this.setInterval(() => {
              span.textContent++;
              counte++;
              // console.log(counte);
              // console.log(span.dataset.progress);
              if (span.textContent == goal) {
                this.clearInterval(counter);
              }
            }, (1.5 * 1000) / goal);
          });
          status = !status;
        }
      } else {
        skills.forEach((skill: any) => {
          skill.style.width = "0";
        });
      }
    });
  }, []);
  const showInfo = () => {
    return (
      <ul className="list-unstyled">
        {info.map((item: any) => {
          return (
            <li key={item.id} className={item.class}>
              <span className="w-50 d-inline-block fw-bold">{item.info}</span>
              <span className="w-50 d-inline-block text-start">
                {item.InfoChild}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div id="Profile" className="py-5 container text-center text-md-start">
      <img src="/images/Portfolio/portfolio-img1.jpg" alt="" />
      <div className=" row">
        {/* profile */}
        <div className="col-md-6 mx-0 my-auto">
          <div className="profile">
            <h2 className="text-capitalize">my profile</h2>
            {showInfo()}
          </div>
        </div>
        {/* skills */}
        <div className="col-md-6">
          <div className="skills">
            <h2 className="text-capitalize m-3">my skills</h2>
            <p className="text-capitalize text-opacity-50 my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </p>
            <div className="progresses my-5">
              <div className="skill" data-progress="80%">
                <span>html</span>
                <span className="span" data-progress="80">
                  80%
                </span>
              </div>
              {/*  */}
              <div className="skill" data-progress="70%">
                <span>css</span>
                <span className="span" data-progress="70">
                  70%
                </span>
              </div>
              {/*  */}
              <div className="skill" data-progress="60%">
                <span>bootstrap</span>
                <span className="span" data-progress="60">
                  60%
                </span>
              </div>
              {/*  */}
              <div className="skill" data-progress="90%">
                <span>js</span>
                <span className="span" data-progress="90">
                  90%
                </span>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
