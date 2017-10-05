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
        fetch()
            .then(res => {
                const issues = normalize(res);
                this.setState({
                    loading: false,
                    issues,
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        const { issues, loading } = this.state;
        return <div className="issues-wrapper">
            {loading ? <h2>loading...</h2> :
                <div>
                    {issues.map( i=> <IssueItem key={`issue-${i.id}}`} issue={i}/> )}
                </div>
            }
            </div>
    }
}


export default IssueList;