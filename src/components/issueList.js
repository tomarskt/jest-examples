import React, { Component } from 'react';
import fetch from '../common/fetch';

class IssueList extends Component {
    constructor() {
        super();
        this.state = {
            issues: [],
            loading: true,
        }
    }
    componentDidMount() {
        fetch()
            .then(res => {
                const issues = res.map(r => ({
                    id: r.id,
                    state: r.state,
                    title: r.title,
                    user: {
                        avatar: r.user.avatar_url,
                        id: r.user.id,
                        login: r.user.login,
                    }
                }));
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
        return <div className="test">content</div>
    }
}


export default IssueList;