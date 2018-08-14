import React from "react";

const MyCheckbox = ({ isChecked, onChange }) => (
  <div>
    <input type="checkbox" checked={isChecked} onChange={onChange} />
    {isChecked ? "On" : "Off"}
  </div>
);

export default MyCheckbox;
