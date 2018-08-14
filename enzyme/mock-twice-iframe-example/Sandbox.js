import React, { Fragment, Component } from "react";
import { GelXIframe } from "lerna-test-library";

import DisplayLoader from "./displayloader";
import { dispatch } from "./store";

class Sandbox extends Component {
  postMessage = e => {
    const {
      data: { value }
    } = e;
    console.warn(
      "********  you need to see me in your unit test  ************"
    );
    dispatch({ value: value + 1 });
  };
  render() {
    const { url, postMessage } = this.props;
    return (
      <Fragment>
        <DisplayLoader />
        <GelXIframe
          displayLoader={<DisplayLoader />}
          url={url}
          postMessage={this.postMessage}
        />
      </Fragment>
    );
  }
}

export default Sandbox;
