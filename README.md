#enzyme contains most real scenario examples
# if you want to just run one test, just do 
```
jest part_of_test_file_name
```
as jest treat file_name afterwards as a regex expression so you don't have to give the full file path


```
 "jest": {
    "globals": {
      "__API_HOST__": "",
      "__DEV__": false
    },
    "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/nova-framework/tools/jestTypeScriptPreProcessor.js"
    },
    "transformIgnorePatterns": [],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$",
    "setupTestFrameworkScriptFile": "test/setup.js",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "json"
    ],
    "modulePaths": [
      "<rootDir>/src",
      "<rootDir>/src/frankel-uk",
      "<rootDir>/src/frankel-uk/config",
      "<rootDir>/node_modules/nova-framework/src",
      "<rootDir>/node_modules/frankel/src",
      "<rootDir>/node_modules/frankel/common/actions/navigate"
    ],
    "unmockedModulePathPatterns": [
      "<rootDir>/node_modules/frankel/",
      "<rootDir>/node_modules/react/",
      "<rootDir>/node_modules/react-dom/",
      "<rootDir>/node_modules/react-motion/",
      "<rootDir>/node_modules/react-addons-test-utils/",
      "<rootDir>/node_modules/enzyme/",
      "<rootDir>/node_modules/sinon/",
      "<rootDir>/node_modules/nova-framework/"
    ]
  }
```