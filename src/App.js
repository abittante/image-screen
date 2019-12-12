import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Scrambler from "./Scrambler.js";
import Title from "./Title.js";
import ColourBlock from "./ColourBlocks.js";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      <ColourBlock />
      <Scrambler />
      <Title />
    </div>
  );
}

export default App;
