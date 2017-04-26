// Splitting to two files suggested by Dan Abramov: https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
