// place me inside a __mocks__/ **subdirectory immediately adjacent** to the REAL module


// genMockFromModule: Given the name of a module, use the automatic mocking system to generate a mocked version of the module for you.
const fetchModule = jest.genMockFromModule('../fetch'); // imagine your '../fetch' modlue has 1000 exports, this will mock all of them automatically;
function callApi(endpoint, options) {
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

// mimicking real module (like React/lib/React.js)
fetchModule.default = callApi; // standard babel@6 transpiled result


// mimicking wrapper module (like React/index.js)
// babel es6 consumers are fine with both ways, but perfer the 1st approach as it's the babel@6 transpile behavior; 2nd is babel@5 and is deprecated now
module.exports.default = fetchModule; // targeting typescript consumers; (can do import Fetch from './fetch';)

// `exports=xyz` is short for `module.exports=xyz`; **doesn't work here**
module.exports = fetchModule; //targeting es5 consumers; 

// this is what `babel-plugin-add-module-exports` does essentially; (commonJS can do var fetch = require('./fetch'); )

// if the module being mocked is small, you can also do module.exports = mock_fetch;