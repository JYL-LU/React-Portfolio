import React, { components } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Skills from "./components/skills";

import "./App.css";

export const App = () => {
  return (
    <div className="layout">
      <Navbar />
      <About />
      {/* <Projects />
      <Resume />
      <Skills /> */}
      <Contact />
    </div>
  );
};

//import logo from "./logo.svg";

//JSX Javascript and XML

//functional component
//a function that returns HTML

/*export const App = () => {
  const name = "Jane Lu";
  const projects = ["pdf 1", "pdf 2", "pdf 3"];

  return (
    <>
      <h1>Hello World!</h1>
      <ul id="myId">
        {projects.map((projects, index) => {
          return (
            <div key={index}>
              <h1>Projects</h1>
              <li id={index}>{projects}</li>
            </div>
          );
        })}
      </ul>
    </>*/
/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};*/

export default App;
//only can have 1 default export
