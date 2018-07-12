module.exports = {
    "verbose": false,
    "bail": true,
    "testEnvironment": "jsdom",
    "setupFiles": ["<rootDir>/setup/shim.js", "<rootDir>/setup/index.js"],
    // enable to snapshot shalloed result
    "snapshotSerializers": ["enzyme-to-json/serializer"]
}