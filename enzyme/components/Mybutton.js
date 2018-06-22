import React, { Component } from "react";
import PropTypes from "prop-types";
import MyLabel from "./MyLabel";

class MyButton extends Component {
  constructor(props) {
    super(props);
    console.log('*****************  MyButton is constructed')
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick();
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>
          <MyLabel />
        </button>
      </div>
    );
  }
}

MyButton.propTypes = {
  onClick1: PropTypes.func.isRequired
};

export default MyButton;
