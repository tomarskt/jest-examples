import React, { Component } from "react";
import { GelXIframe } from "lerna-test-library";

import DisplayLoader from "./displayloader";

class Sandbox extends Component {
  render() {
    const { url, postMessage } = this.props;
    return (
      <GelXIframe
        displayLoader={<DisplayLoader />}
        url={url}
        postMessage={postMessage}
      />
    );
  }
}

export default Sandbox;
