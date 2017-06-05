# `babel-register`
`babel-register` tells `node.exe` to delegate all `.js` (or `.jsx, .ts, .tsx`, you need to tell `babel-register`) to `babel-core`; it extend `node`'s default moudle resolution system;
`babel-register` will internall call `source-map-support.install()` which will have source-map included in transpiled files (`"inline"` mode as well)


# `jest` v.s. `mocha`
`mocha` will consult `node.exe` for file extensions when `--compilers` is set;
 but `jest` won't; always use `node`'s default moudle resolution system;

# what does this mean?

1. `jest` use `babel` as its backing transpiler; 
2. `babel-register` doesn't work in `jest` althought it works perfectly with `mocha`;    
3.  when using `mocha`, you don't call `babel.transform(src, { sourceMaps: "inline", retainLines: true})` becuase you don't have to; 
    `node.js` will do that for you becuase `*.js` has been reserved by `babel`;
    when using `jest`, you will need to call `babel.transform(src, options)` explicitly because everything is handled by yourself;