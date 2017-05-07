import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);

const isDevelopment = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'heroku');

const app = express();
if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '/../build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build', 'index.html'));
  console.log('Request /');
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build', 'index.html'));
  console.log(path.join(__dirname, '/../build'));
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server running at port 3000');
});

module.exports = app;
