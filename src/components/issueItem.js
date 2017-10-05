import React from 'react';

const issueItem = ({ issue }) => {
    const { user } = issue;
    return <div className="issue-item">
        <div className="title">
            <a href={`#/issues/${issue.id}`} className="link">{issue.title}</a>
        </div>
        <div className="content">
            <div>#{issue.number}</div>
            <img src={user.avatarUrl} className="avatar" />
            <div><a href={`#/users/${user.id}`} className="link">{user.name}</a>opened {issue.dateCraetedStr}</div>
        </div>
    </div>
};
export default issueItem;