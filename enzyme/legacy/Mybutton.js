import React, {Component} from 'react';
class MyButton extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        console.log('&&&&&&&&&&&& Mybutton is clicked  &&&&&&&&&&&&&')
        // try to comment this line out;
        // you shallow render test still pass, while deep rendering one will fail
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