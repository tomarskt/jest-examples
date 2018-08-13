import React, { Component } from "react";
import MyButton from "./Mybutton";

class ToggleCheckbox extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    isChecked: false
  };

  onChange() {
    debugger;
    console.log(
      " ---------------------- this.onChange is invoked  ---------------------- "
    );
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? "On" : "Off"}
        </label>
        <MyButton onClick={this.onChange} />
      </div>
    );
  }
}

export default ToggleCheckbox;
