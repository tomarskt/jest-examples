import React from 'react';

const issueItem = ({ issue }) => {
    const { user, tags } = issue;
    return <li className="issue-item">
        <div className="header">
            <a href={`#/issues/${issue.id}`} className="link title">{issue.title}</a>
            {
                tags.map((t, index) => <span key={index} className={`tag-${index % 3}`}>{t}</span>)
            }
        </div>
        <div className="content">
            <div>#{issue.number}</div>
            <img src={user.avatarUrl} className="avatar" />
            <div><a href={`#/users/${user.id}`} className="link">{user.name}</a>opened {issue.dateCraetedStr}</div>
        </div>
    </li>
};
export default issueItem;