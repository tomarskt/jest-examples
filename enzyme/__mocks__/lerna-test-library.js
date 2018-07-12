import React, { PureComponent } from "react";

/* only mock the module that you want to mock; keep the rest as actual modules in case they are used somewhere else */
export * from "lerna-test-gel-themes";
export { default as Button } from "lerna-test-gel-button";

// export * from 'lerna-test-gel-x-iframe';  //===========> this is the one that we want to mock
export class GelXIframe extends PureComponent {
  firePostMessage(message) {
    // allow postMessage to be explicitly invoked
    const { postMessage } = this.props;
    postMessage(message);
  }
  render() {
    const { url } = this.props;
    return <div>mocked ver :iframe source ={url}</div>;
  }
}
