const express = require('express');
const router = express.Router();
const axios = require('axios');


//app.use(express.json());

const {getAllMovies,AddMovie,editMovie,getMovie,deleteMovie} = require('../controllers/movies');


router.route('/').get(getAllMovies).post(AddMovie);
router.route('/:id').get(getMovie).patch(editMovie).delete(deleteMovie);

// router.get('/genre',(req,res)=>{
// axios.get('https://jsonplaceholder.typicode.com/posts').then(posts=>{
//     res.json(posts.data)
// })
// })

// router.route('/api/movies/:id').get((req,res)=>{
// const movie = movies.find(m => m.id === parseInt(req.params.id));
// if(!movie) res.status(404).send("Movie not found.");

// res.send(movie);
        
// });

// router.route('/api/movies').post((req,res)=>{
// const {error}= validateMovie(req.body);
// if (error) return res.status(404).send(result.error.details[0].message);
   
// const movie = {
// id:movies.length+1,
// name:req.body.name
// };

// movies.push(movie);
// res.send(movie);

// });

// router.route('/api/movies/:id').put((req,res)=>{
// const movie = movies.find(m => m.id === parseInt(req.params.id));
// if(!movie) return res.status(404).send("Movie not found.");

// const {error}= validateMovie(req.body);
// if (error) return  res.status(404).send(error.details[0].message);

// movie.name=req.body.name;
// res.send(movie);
// });

// router.route('/api/movies/:id').delete((req,res)=>{
// const movie = movies.find(m => m.id === parseInt(req.params.id));
// if(!movie) return res.status(404).send("Movie not found.");

// const index =  movies.indexOf(movie);
// movies.splice(index,1);
// res.send(movies);
// });



module.exports = router;
