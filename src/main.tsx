// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import "./style/normalize.scss";
import "./style/all.min.css";
import Navbar from "./sections/navbar";
import Landing from "./sections/landing";
import Features from "./sections/features";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Landing />
    <Features />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>
);
