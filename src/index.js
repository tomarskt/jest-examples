import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './styles/index.less'

import IssueList from './components/issueList';
class App extends Component {
    render() {
        return <IssueList />
    }
}

ReactDom.render(<App/>,document.querySelector('#root'));