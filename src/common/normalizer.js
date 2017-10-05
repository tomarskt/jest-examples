import moment from 'moment';

export default function (issusPayload) {
    return issusPayload.map(p => ({
        id: p.id,
        state: p.state,
        title: p.title,
        user: {
            id: p.user.id,
            avatarUrl: p.user.avatar_url,
            name: p.user.login,
        },
        createdDateTime: moment(p.created_at).format('YYYY-MM-DD HH:mm'),
        tags: p.labels.map(l => l.name)
    }));
}