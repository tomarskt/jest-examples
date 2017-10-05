import React from 'react';

const issueItem = ({ issue }) => {
    const { user } = issue;
    return <div className="issue-item">
        <div className="title">
            {issue.title}
        </div>
        <div>
            <div>author: {user.name}</div>
            <div>created at: {issue.createdDateTime}</div>
        </div>
    </div>
};
export default issueItem;