import React from "react";
import { withRouter } from "react-router";

debugger;

const PageHeader = ({ location: { pathname } }) => {
  return (
    <div>
      {pathname === "/external" ? (
        <h1>back button</h1>
      ) : (
        <h1>hamburger menu</h1>
      )}
    </div>
  );
};

export default withRouter(PageHeader);
