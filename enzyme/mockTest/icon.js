import React, { Component } from 'react';

// const Icon = () => (
//     <div>
//         <img src='../img.png' />
//     </div>
// );

class Icon extends Component {
    render() {
        return (<div>
            <img src="../img.png" />
        </div>)
    }
}


//export default Icon;
export default 'bchen'
//so the idea here is, when writting jest mock, if a module returns a React Component, replace that with a string
//react would simply print out your string as tag name along with all the properties you passed in within your test;
//also notice that jest.mock('./path/to/real/module',()=>/* your mocked module export goes here!*/)
//jest.mock requires the second parameter to be a function, this part is to mock the node module frx, nothing to do with module implementation;
//*************  in short , REACT COMPONENT  === STRING , a react component can't be mocked as a simple function! */
//see ./HOC/form.spec.jsx
