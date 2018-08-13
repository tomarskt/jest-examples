import React, { Component } from "react";
import MyButton from "./Mybutton";
import chalk from "chalk";
import MyCheckbox from "./MyCheckbox";

class ToggleCheckbox extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    isChecked: false
  };

  onChange() {
    console.log(
      chalk.cyan(
        " ---------------------- this.onChange is invoked  ---------------------- "
      )
    );
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { isChecked } = this.state;
    return (
      <div>
        <MyCheckbox isChecked={isChecked} onChange={this.onChange} />
        <MyButton onClick={this.onChange} />
        <label>{isChecked ? "On" : "Off"}</label>
      </div>
    );
  }
}

export default ToggleCheckbox;
