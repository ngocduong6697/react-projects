import React, { useState } from "react";
import "./color-box.styles.scss";

ColorBox.propTypes = {};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor =
      JSON.parse(localStorage.getItem("box_color")) || "deeppink";
    return initColor;
  });
  function getRandomColor() {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const randomIndex = Math.floor(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  }

  function handleBoxClick() {
    //get random color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", JSON.stringify(newColor));
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
