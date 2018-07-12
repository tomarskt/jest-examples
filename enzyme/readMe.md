
### jest.genMockFromModule(moduleName)
Given the name of a module, use the automatic mocking system to generate a mocked version of the module for you.

This is useful when you want to create a manual mock that extends the automatic mock's behavior.

Example:

```js
// utils.js
export default {
  authorize: () => {
    return 'token';
  },
  isAuthorized: secret => secret === 'wizard',
};



// __tests__/genMockFromModule.test.js
const utils = jest.genMockFromModule('../utils').default;
utils.isAuthorized = jest.fn(secret => secret === 'not wizard');

test('implementation created by jest.genMockFromModule', () => {
  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized('not wizard')).toEqual(true);
});
```


## mock node modules
> see the example of mocking `lerna-test-gel-iframe`
https://jestjs.io/docs/en/manual-mocks#mocking-node-modules


## manual mock
https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
