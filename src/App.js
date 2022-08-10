import React from "react";
import "./App.scss";
import { Navbar } from "./components/index";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
