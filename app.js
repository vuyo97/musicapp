const Joi = require('joi');
var cors = require('cors')
const express = require('express');
const cool = require('cool-ascii-faces');
const bodyParser = require('body-parser');
const path = require('path');
//const helmet=  require('helmet');
//const contentSecurityPolicy  = require('helmet-csp');
const app = express();
var cors_proxy = require('cors-anywhere');

var favicon = require('serve-favicon')
require('dotenv').config();
const movies = require('./routes/movies');
const deezer = require('./routes/deezer');
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');

var host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;


//middleware
// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("X-Frame-Options", "ALLOW-FROM  https://www.deezer.com/");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
});

app.options("/callback", cors());
app.get("/callback", cors(), (req, res) => {
  console.info("channel call works");
  res.sendFile(path.join(__dirname,'channel.html'));
});



app.use(favicon(path.join(__dirname,'favicon.ico')))
app.use(express.static(path.join(__dirname,'/public/dist/musicdb-app-angular/')));
//app.use(express.static("public"))
app.use(express.json());

//routes
//app.use('/api/movies', movies);
app.use('/api/deezer', deezer);
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/dist/musicdb-app-angular/index.html'));
});
//app.get('/cool', (req, res) =>{ res.send(cool())});

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(port,()=> console.log(`listening on port ${port}...`))
// const start = async()=>{
// try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port,()=> console.log(`listening on port ${port}...`))
// } catch (error) {
//     console.log(error)
// }

// }

//start(); 


