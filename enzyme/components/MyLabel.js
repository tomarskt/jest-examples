import React from "react";
import PropTypes from "prop-types";

const MyLabel = ({ text }) => <label>{text}</label>;
MyLabel.propTypes = {
  text: PropTypes.string.isRequired
};
export default MyLabel;
