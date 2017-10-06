// Manual mocks are defined by writing a module in a __mocks__/ subdirectory immediately adjacent to the module
const fetch = jest.genMockFromModule('./fetch');
fetch.default  = mock_fetch;

//-------------------------------------------
function mock_fetch(endpoint, options) {
    return Promise.resolve([
        {
            "id": 1111,
            "number": 1111,
            "title": "How to wrap events in React 16",
            "user": {
                "login": "tolmasky",
                "id": 23753,
                "avatar_url": "https://avatars2.githubusercontent.com/u/23753?v=4",
            },
            "labels": [
                {
                    "name": "Component: Core",
                },
                {
                    "name": "Type: Discussion",
                }
            ],
            "state": "open",
            "created_at": "2017-10-05T14:46:18Z",
        },
        {
            "id": 2222,
            "number": 2222,
            "title": "How to wrap events in React 16",
            "user": {
                "login": "anushreesubramani",
                "id": 3088823,
                "avatar_url": "https://avatars2.githubusercontent.com/u/23753?v=4",
            },
            "labels": [
                {
                    "name": "Component: Core",
                },
                {
                    "name": "Type: Discussion",
                }
            ],
            "state": "closed",
            "created_at": "2017-10-03T14:46:18Z",
        },
        {
            "id": 3333,
            "number": 3333,
            "title": "How to wrap events in React 16",
            "user": {
                "login": "bochen2014",
                "id": 1111,
                "avatar_url": "https://avatars2.githubusercontent.com/u/23753?v=4",
            },
            "labels": [
                {
                    "name": "Component: Core",
                },
                {
                    "name": "Type: Discussion",
                }
            ],
            "state": "open",
            "created_at": "2017-10-04T15:46:18Z",
        },
    ])
}

// for some reason, you don't have to use es5 pattern
// module.exports={default: function(){...}}
// it's not es5 syntax
module.exports = mock_fetch; 