import React, { Component } from 'react';
import MyButton from './Mybutton'

class ToggleCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    console.log(' ---------------------- this.onChange is invoked  ---------------------- ')
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

export default ToggleCheckbox;