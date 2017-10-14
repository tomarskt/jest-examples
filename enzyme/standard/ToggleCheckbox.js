// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import MyButton from './Mybutton'
export default class ToggleCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isChecked: false };

  }

  onChange = () => {
    console.log('............ this.onChange is invoked  ...')
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
          {this.state.isChecked ? 'On' : 'Off'}
        </label>
        <MyButton onClick={this.onChange} />
      </div>
    );
  }
}
