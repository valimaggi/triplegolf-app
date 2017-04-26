// Splitting to two files suggested by Dan Abramov: https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
