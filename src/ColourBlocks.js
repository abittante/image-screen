import React, { useState, useEffect } from "react";
import "./App.css";

let colourRA = [
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2",
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2",
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2",
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2",
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2",
  "#340070",
  "#9886db",
  "#112d8a",
  "#7a002f",
  "#17e6e2"
];

colourRA.sort(() => Math.random() - 0.5);

let positionRA = new Array(colourRA.length);
let heightRA = new Array(colourRA.length);
let widthRA = new Array(colourRA.length);

for (let i = 0; i < positionRA.length; i++) {
  positionRA[i] = [
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  ];
  widthRA[i] = (Math.random() + 1) * 300;
  heightRA[i] = (Math.random() + 1) * 300;
}

const ColourBlock = props => {
  return (
    <div className="ColourHolder" style={{ overflow: "hidden" }}>
      {colourRA.map((item, key) => {
        return (
          <div
            style={{
              left: positionRA[key][0],
              top: positionRA[key][1],
              height: heightRA[key],
              width: widthRA[key],
              backgroundColor: item
            }}
            className="colourBlock"
          />
        );
      })}
    </div>
  );
};
export default ColourBlock;
