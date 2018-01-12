jest.useFakeTimers(); // use setTimeout.mock provided by jest. see infiniteTimerGame.spec.js

import _ from 'lodash';

test('fails to mock Lodash timers correctly', function() {
  var test = jest.fn();
  var debounced = _.debounce(test, 1000);

  debounced();
  debounced();

  // jest.runAllTimers(); // because there is nested settimeout (i.e. calling setTimeout within setTimeout), this will be an infinite loop;
  jest.runOnlyPendingTimers();

  expect(test).toHaveBeenCalledTimes(1);
});