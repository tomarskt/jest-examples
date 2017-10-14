//https://github.com/facebook/jest/issues/4545#issuecomment-332762365

/**
 * React also depends on requestAnimationFrame (even in test environments). A simple shim for testing environments would be:
 */
global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
};