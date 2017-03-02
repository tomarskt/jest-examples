// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      const compile_result = tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
      //console.log(`-------------------------  \n ${compile_result} \n-------------------------`)
      return compile_result;
    }

    return src;
  },
};
