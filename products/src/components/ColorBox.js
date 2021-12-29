import React from "react";
import ChangeColorButton from "./ChangeColorButton.js";

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "red",
      width: "200px",
      height: "200px",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState((prevState) => {
      let newColor = prevState.backgroundColor === "red" ? "blue" : "red";
      return {
        backgroundColor: newColor,
      };
    });
  }
  render() {
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        <ChangeColorButton onClick={this.changeColor} />
      </div>
    );
  }
}

export default ColorBox;
