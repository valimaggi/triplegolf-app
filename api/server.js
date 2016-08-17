import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
//import config from '../config';
//import fs from "fs";
//import expressJwt from 'express-jwt';


  //Webpack
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';
const compiler = webpack(webpackConfig);
//process.env.NODE_ENV = 'production';
var isDevelopment = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'heroku' );

const app = express();
/*
//MongoDB
import mongoose from 'mongoose';
mongoose.connect(config[app.settings.env], function(err) {
    if(err){
        console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    }
    else {
        console.log('Connected to Database: ' + config[app.settings.env]);
    }
});*/


/*var jwtCheck = expressJwt({
  secret: config.secret,
    getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
});*/

//Routes
//import api from './routes';

if (isDevelopment) {
  //more webpack

  app.use(webpackDevMiddleware(compiler, {
      historyApiFallback: true,
      publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '/../build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
app.get('/uploads/:id', function (req, res) {
  // Validate that req.params.id is 16 bytes hex string
  // Get the stored image type for this image
  if (fs.existsSync('/../public/uploads/'+req.params.id)) {
    res.setHeader('Content-Type', ' application/octet-stream')
    fs.createReadStream(path.join(__dirname, '/../public/uploads/', req.params.id)).pipe(res)
  }
  else{
    res.status(404).send({ERROR: 'No file found!'});
  }

})
//app.use('/api/*', jwtCheck.unless({path: ['/api/authenticate']}));

app.use('/api/authenticate', authenticate);
app.use('/api',  api);
app.use('/api/applicants', applicant);
app.use('/api/jobapplications', jobApplication);
app.use('/api/jobads', jobAd);
app.use('/api/user', user);
app.use('/api/comment', comment);
app.use('/api/jobadstate', jobAdState);
app.use('/api/tagsuggestions', tagSuggestion);
*/


app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname + '/../build', 'index.html'));
  console.log('Request /');
});

app.use('*', function(req,res){
  res.sendFile(path.join(__dirname + '/../build', 'index.html'));
  console.log(path.join(__dirname, '/../build'));
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Server running at port 3000');
});

module.exports =  app;
