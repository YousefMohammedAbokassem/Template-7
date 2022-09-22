import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact/Contact";
import Container from "../container/Container";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./App.css";
import Option from "../Options/Options";
import "../../css/vendors/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Option />
      <Routes>
        <Route path="/Template-7" element={<Container />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
