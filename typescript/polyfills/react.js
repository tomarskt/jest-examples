var react = require('react');
// short for module.exports;
exports = react; // targeting CommonJS consumers; can do require('./react');
module.exports.default=react;  // targeting TypeScript consumers; can do import React from './react';