module.exports = {
    "verbose": false,
    "bail": true,
    "testEnvironment": "jsdom",
    "setupFiles": ["<rootDir>/setup/shim.js", "<rootDir>/setup/index.js"],
    "snapshotSerializers": ["enzyme-to-json/serializer"]
}