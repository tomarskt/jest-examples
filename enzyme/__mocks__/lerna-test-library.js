import React, { PureComponent } from "react";
export { default as Button } from "lerna-test-gel-button";
import * as themes from "lerna-test-gel-themes";

/* only mock the module that you want to mock; keep the rest as actual modules in case they are used somewhere else */
class GelXIframe extends PureComponent {
  firePostMessage(message) {
    // allow postMessage to be explicitly invoked
    const { postMessage } = this.props;
    postMessage(message);
  }
  render() {
    const { url, displayLoader } = this.props;
    return (
      <div>
        {displayLoader}
        <div>mocked ver :iframe source ={url}</div>
      </div>
    );
  }
}


module.exports = {
  ...themes,
  Button,
  GelXIframe
};