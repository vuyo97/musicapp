const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contentSecurityPolicy  = require('helmet-csp');
const app = express();
var favicon = require('serve-favicon')
require('dotenv').config();
const movies = require('./routes/movies');
const deezer = require('./routes/deezer');
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');
// var directives = {
//     'default-src': [ "'self'" ],
//     'base-uri': [ "'self'" ],
//     'block-all-mixed-content': [],
//     'font-src': [ "'self'", 'http:'],
//     'frame-ancestors': [ "'self'" ],
//     'img-src': [ "'self'"],
//     'object-src': [ "'none'" ],
//     'script-src': [ "'self'" ],
//     'script-src-attr': [ "'none'" ],
//     'style-src': [ "'self'", 'http:', "'unsafe-inline'" ],
//     'script-src-elem':["'self'"],
//     'upgrade-insecure-requests': ["'none'"]
//   }


const port = process.env.PORT || 5000;


//  app.use(contentSecurityPolicy ({
//     reportOnly: false
//  }));
 console.log(contentSecurityPolicy.getDefaultDirectives())

// app.use(function (req, res, next) {
//     res.setHeader(
//       'Report-To',
//       '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"http://localhost:5000/__cspreport__"}],"include_subdomains":true}'
//     );
//     res.setHeader(
//       'Content-Security-Policy-Report-Only',
//       "script-src-elem 'unsafe-inline'; script-src 'unsafe-inline'; frame-src 'unsafe-inline'; report-to csp-endpoint; report-uri /__cspreport__;"
//     );
//     next();
//   });
  
//   app.use(
//     bodyParser.json({
//       type: [
//         'application/json',
//         'application/csp-report',
//         'application/reports+json',
//       ],
//     })
//   );
//   app.use(express.static(path.join(__dirname)));
  
//   app.post('/__cspreport__', (req, res) => {
//     console.log(req.body);
//   });

//middleware
app.use(favicon(path.join(__dirname, 'public','favicon.ico')))
app.use(express.static(path.join(__dirname,'/public/dist/musicdb-app-angular/')));
app.use(express.json());

//routes
//app.use('/api/movies', movies);
app.use('/api/deezer', deezer);
app.get('/*',(req,res)=>{
    res.sendFile(__dirname +'/public/dist/musicdb-app-angular/index.html');
});


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


