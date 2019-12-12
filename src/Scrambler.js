import React, { useState, useEffect } from "react";
import lightbulb1 from "./images/lightbulb1.png";
import lightbulb2 from "./images/lightbulb2.png";
import lightbulb3 from "./images/lightbulb3.png";
import lightbulb4 from "./images/lightbulb4.png";
import lightbulb5 from "./images/lightbulb5.png";
import "./App.css";

let imageRA = [
  lightbulb1,
  lightbulb2,
  lightbulb3,
  lightbulb4,
  lightbulb5,
  lightbulb1,
  lightbulb2,
  lightbulb3,
  lightbulb4,
  lightbulb5,
  lightbulb1,
  lightbulb2,
  lightbulb3,
  lightbulb4,
  lightbulb5,
  lightbulb1,
  lightbulb2,
  lightbulb3,
  lightbulb4,
  lightbulb5
];
let positionRA = new Array(imageRA.length);
let heightRA = new Array(imageRA.length);

for (let i = 0; i < positionRA.length; i++) {
  positionRA[i] = [
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  ];

  heightRA[i] = (Math.random() + 1) * 200;
}

const Scrambler = props => {
  const imagePos = useState();

  return (
    <div className="ScramblerHolder" style={{ overflow: "hidden" }}>
      {imageRA.map((item, key) => {
        return (
          <img
            style={{
              left: positionRA[key][0],
              top: positionRA[key][1],
              height: heightRA[key]
            }}
            className="image"
            src={item}
            alt=""
          />
        );
      })}
    </div>
  );
};
export default Scrambler;
