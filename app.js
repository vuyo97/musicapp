const Joi = require('joi');
var cors = require('cors')
const express = require('express');
const cool = require('cool-ascii-faces');
const bodyParser = require('body-parser');
const path = require('path');
//const helmet=  require('helmet');
//const contentSecurityPolicy  = require('helmet-csp');
const app = express();

var favicon = require('serve-favicon')
require('dotenv').config();
const movies = require('./routes/movies');
const deezer = require('./routes/deezer');
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');


const port = process.env.PORT || 5000;

//  app.use(contentSecurityPolicy ({
//     reportOnly: false
//  }));
// app.use(
//     helmet()
//   );
//  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// //  app.use(helmet({ crossOriginEmbedderPolicy: true }));
// app.use(
//     helmet.frameguard({
//       action: "sameorigin",
//     })
//   );

//   app.use(
//     helmet.permittedCrossDomainPolicies({
//       permittedPolicies: "all",
//     })
//   );
 

  
  //app.use(helmet({ crossOriginOpenerPolicy: true }));


//console.log(helmet.contentSecurityPolicy.getDefaultDirectives())


//middleware
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOW-FROM  https://connect.deezer.com/");
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.options("/callback", cors());
app.get("/callback", cors(), (req, res) => {
  console.info("channel call works");
  res.sendFile(path.join(__dirname , 'channel.html'));
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


