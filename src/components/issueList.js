import React, { Component } from 'react';
import fetch from '../common/fetch';
import normalize from '../common/normalizer';
import IssueItem from './issueItem';

class IssueList extends Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            loading: false,
        }
    }
    componentDidMount() {
        this.setState({
            loading: true,
        });

        // fetch()
        //     .then(res => {
        //         const issues = normalize(res);
        //         this.setState({
        //             loading: false,
        //             issues,
        //         })
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })

        
        const self=this;
        setTimeout(function () {
            const issues=[{"id":263082153,"number":11108,"state":"open","title":"Clear previous children when SVG node doesn't have innerHTML","user":{"id":2384068,"avatarUrl":"https://avatars3.githubusercontent.com/u/2384068?v=4","name":"OriR"},"dateCreated_raw":"2017-10-05T10:55:42Z","dateCraetedStr":"14 minutes ago","tags":["CLA Signed"]},{"id":263081500,"number":11107,"state":"open","title":"Document that deep equality checks and JSON.stringify() in shouldComponentUpdate() are a bad idea","user":{"id":810438,"avatarUrl":"https://avatars0.githubusercontent.com/u/810438?v=4","name":"gaearon"},"dateCreated_raw":"2017-10-05T10:53:09Z","dateCraetedStr":"17 minutes ago","tags":["Component: Documentation & Website"]},{"id":263051011,"number":11106,"state":"open","title":"Asynchronous ComponentWillUnmount in React 16","user":{"id":8241115,"avatarUrl":"https://avatars0.githubusercontent.com/u/8241115?v=4","name":"aj-anuragjain"},"dateCreated_raw":"2017-10-05T09:01:18Z","dateCraetedStr":"2 hours ago","tags":["Component: Core","Type: Question"]}]
            self.setState({
                loading: false,
                issues,
            });

        }, 100);

    }
    render() {
        const { issues, loading } = this.state;
        return <div  >
            {loading ? <h2>loading...</h2> :
                <div className="issues-wrapper">
                    {issues.map(i => <IssueItem key={`issue-${i.id}}`} issue={i} />)}
                </div>
            }
        </div>
    }
}


export default IssueList;