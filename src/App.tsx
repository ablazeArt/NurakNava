import { useState, useRef, useEffect, FormEvent } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/HomeComponents";

export type Todo = {};

const App = () => {
  return (
    <div className="components">
      <Navbar />
      <div className="body">
        <HomeComponent />
      </div>
    </div>
  );
};

export default App;
