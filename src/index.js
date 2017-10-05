import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './styles/index.less'

import IssueManager from './components/issueManager';
class App extends Component {
    render() {
        return <IssueManager />
    }
}

ReactDom.render(<App/>,document.querySelector('#root'));