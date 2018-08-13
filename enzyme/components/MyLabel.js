import React from "react";
import PropTypes from "prop-types";

const MyLabel = ({ text }) => <span>{text}</span>;
MyLabel.propTypes = {
  text: PropTypes.string.isRequired
};
export default MyLabel;
