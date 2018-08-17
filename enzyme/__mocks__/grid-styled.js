import React, { Fragment } from 'react';
const Box = ({ children }) => <Fragment>{children}</Fragment>;
Box.displayName = 'Box';

const Flex = ({ children }) => <Fragment>{children}</Fragment>;
Flex.displayName = 'Flex';

module.exports = {
  Box,
  Flex,
};
