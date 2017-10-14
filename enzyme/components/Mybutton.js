import React, {Component} from 'react';
class MyButton extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        this.props.onClick()
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me!</button>
            </div>
        );
    }
}

export default MyButton;