import React, { useState } from "react";
import "./Footer.css";
export default function Footer() {
  let copyright: any = document.querySelector(".Footer span");
  let date: Date = new Date();
  const [copy, setCopy] = useState(date.getFullYear());
  return (
    <div className="Footer text-center py-4" id="Footer">
      copyright © <span>{copy}</span> by ultra profile
    </div>
  );
}
