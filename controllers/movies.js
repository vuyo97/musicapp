const Joi = require('joi');
const Movie = require('../models/movies');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error');
const axios = require('axios');
const movies=[
    {id:1,name:'Superman'},
    {id:2,name:'Iron man'},
    {id:3,name:'Infinity War'}
];

const getAllMovies = asyncWrapper(async (req,res) => {
    await axios.get(`https://api.deezer.com/genre/4`).then(posts=>{
        res.json({data : posts.data})
    });

//         const movies = await Movie.find({});
//  res.status(200).json({movies});
})

const AddMovie = asyncWrapper(async (req,res) => {
    const movie = await Movie.create(req.body)
    res.status(201).json({movie});
 
})


const editMovie = asyncWrapper(async (req,res) => {
    const {id : movieID} = req.params
    const movie = await Movie.findOneAndUpdate({_id:movieID},req.body,{new:true,
        runValidators:true});
        if(!movie) return next(createCustomError(`No Movie with id : ${id}`, 404));


    res.status(200).json({id: movieID, data:req.body})
    
})

const getMovie = asyncWrapper(async (req,res) => {
   const {id:movieID} = req.params;
   const movie = await Movie.findOne({_id:movieID});

   if(!movie) return next(createCustomError(`No Movie with id : ${id}`, 404));

  res.status(200).json({movie});

})

const deleteMovie = asyncWrapper(async (req,res) => {
    const {id:movieID} = req.params;
    const movie = await Movie.findOneAndDelete({_id:movieID});

    if(!movie) return next(createCustomError(`No Movie with id : ${id}`, 404));

    res.status(200).json({movie});


})

function validateMovie(movie){
    const schema = {
        name : Joi.string().min(5).required(),
        id : Joi.required()
    };
    
    const result = Joi.validate(movie, schema);
    
    return result;
    }

module.exports = {
    getAllMovies,
    AddMovie,
    getMovie,
    editMovie,
    deleteMovie
}