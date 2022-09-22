// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import App from "./Components/App/App";
// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// const swiper = new Swiper
const container = document.getElementById("root") as HTMLDivElement;
const root: ReactDom.Root = ReactDom.createRoot(container);
function render(): void {
  root.render(<App />);
}
render();
