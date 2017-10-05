export const sortIssueByTimeStr = order => (i1, i2) => {
    const result = Date.parse(i1.dateCreated_raw) - Date.parse(i2.dateCreated_raw);
    return order === 'ascending' ? result : result * -1;
}
export const filterIssueByState = state => issue => {
    if (state === 'all') {
        return true;
    }
    return issue.state === state;
}
