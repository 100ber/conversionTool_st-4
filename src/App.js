import React from "react";
import Content from "./content";
import Navbar2 from "./navbar";


const Home = () => {
  return (
    <Navbar2></Navbar2>
  );
};

const About = () => {
  return (
    <>
      
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
     
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
    <Navbar2></Navbar2>

    <Content></Content>
    </>
  );
};

export default App;
