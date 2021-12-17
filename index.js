const Joi = require('joi');
const express = require('express');
const path = require('path');
const app = express();
var favicon = require('serve-favicon')
require('dotenv').config();
const movies = require('./routes/movies');
const deezer = require('./routes/deezer');
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler')


const port = process.env.PORT || 5000;

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


