// Server entry that allows for babel to use webpack config files.
const babelRegister = require(`babel-register`);
babelRegister();

require(`./server`);
