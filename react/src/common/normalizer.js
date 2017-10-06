import moment from 'moment';

export default function (issusPayload) {
    return issusPayload.map(p => ({
        id: p.id,
        number: p.number,
        state: p.state,
        title: p.title,
        user: {
            id: p.user.id,
            avatarUrl: p.user.avatar_url,
            name: p.user.login,
        },
        dateCreated_raw:p.created_at,
        dateCraetedStr: moment(p.created_at).fromNow(),
        tags: p.labels.map(l => l.name)
    }));
}