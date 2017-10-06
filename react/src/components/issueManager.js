import React, { Component } from 'react';
import { sortIssueByTimeStr, filterIssueByState, normalize, fetch } from '../common';
import IssueFilter from './issueFilter';
import IssueItem from './issueItem';

class IssueManager extends Component {
    constructor() {
        super();
        this.state = {
            fetchUrl: 'https://api.github.com/repos/facebook/react/issues?state=all',
            issues: [],
            loading: false,
            selectedFilter: 'all',
            sortOrder: 'descending',
        }
    }
    componentDidMount() {
        this.updateRepo();
    }

    onRepoChanged = e => {
        const { target: { value } } = e;
        const { fetchUrl } = this.state;
        if (value !== fetchUrl) {
            this.setState({
                fetchUrl: value,
            })
        }
    }

    updateRepo = e => {
        const { fetchUrl, sortOrder } = this.state;
        this.setState({
            loading: true,
            selectedFilter: 'all',
            sortOrder: 'descending',
        });

        fetch(fetchUrl)
            .then(res => {
                const issues = normalize(res).sort(sortIssueByTimeStr(sortOrder));
                this.setState({
                    loading: false,
                    issues,
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    onSortOrderChanged = e => {
        const { target: { value: newOrder } } = e
        const { issues: issuesOld } = this.state;
        // Note that the array is sorted in place, and no copy is made.
        const issuesNew = [...issuesOld].sort(sortIssueByTimeStr(newOrder))
        this.setState({
            sortOrder: newOrder,
            issues: issuesNew
        })
    }

    onFilterChanged = newFilter => e => {
        const { issues } = this.state;
        this.setState({
            selectedFilter: newFilter,
        })
    }

    render() {
        const { issues, fetchUrl, loading, selectedFilter, sortOrder } = this.state;
        let totalCount, openIssuesCount, closedIssuesCount, issues2Display;
        if (!loading) {
            issues2Display = issues.filter(filterIssueByState(selectedFilter))
        }
        return <div>
            <div id="change-repo">
                <label htmlFor="repo-url">repo url:</label>
                <input type="text" name="repo-url" style={{ width: 600 }}
                    value={fetchUrl} onChange={this.onRepoChanged} />
                <button onClick={this.updateRepo}>Update</button>
            </div>
            <div id="issue-container">
                {loading ? <h2>loading issue list...</h2> :
                    <div className="issues-wrapper">
                        <IssueFilter issues={issues}
                            selectedFilter={selectedFilter}
                            sortOrder={sortOrder}
                            onFilterChanged={this.onFilterChanged}
                            onSortOrderChanged={this.onSortOrderChanged} />
                        <ul>
                            {issues2Display.map(i => <IssueItem key={`issue-${i.id}}`} issue={i} />)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    }
}


export default IssueManager;