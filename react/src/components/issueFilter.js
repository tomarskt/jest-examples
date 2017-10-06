import React from 'react';
import { filterIssueByState } from '../common';

const IssueFilter = props => {
    const { issues, selectedFilter, sortOrder, onFilterChanged, onSortOrderChanged } = props;
    const totalCount = issues.length;
    const openIssuesCount = issues.filter(filterIssueByState('open')).length;
    const closedIssuesCount = issues.filter(filterIssueByState('closed')).length;
    const getFilterClassNames = filter => {
        return selectedFilter === filter ? 'active' : ''
    }
    return <div className="issue-item issue-item-filter">
        <div className="filter-by">
            <span onClick={onFilterChanged('all')} className={getFilterClassNames('all')}>{totalCount} All</span>
            <span onClick={onFilterChanged('open')} className={getFilterClassNames('open')}>{openIssuesCount} Open</span>
            <span onClick={onFilterChanged('closed')} className={getFilterClassNames('closed')}>{closedIssuesCount} Closed</span>
        </div>
        <div className="sort-by">
            <label htmlFor="sel_sort_order">Sort By</label>
            <select disabled={true}>
                <option>created date</option>
            </select>
            <select name='sel_sort_order' value={sortOrder} onChange={onSortOrderChanged}>
                <option value='descending'>latest first</option>
                <option value='ascending'>oldest first</option>
            </select>
        </div>
    </div>
}

export default IssueFilter;