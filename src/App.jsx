import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "../../../Tasks/login-signup/src/Components/Mainlayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
