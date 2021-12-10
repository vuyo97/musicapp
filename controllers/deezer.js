const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error');
const axios = require('axios');

const getArtists = async (req,res,result) => {

   const artist = await axios.get(`https://api.deezer.com/genre/0/artists`).then(artist => {
    res.status(200).json({data : artist.data})
}).catch(err =>{
    res.status(500).json({msg: err.message})
});
  return console.log(result);

 
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 }

 const getArtist = async (req,res) => {
    const {id : artistID} = req.params;
   console.log('get artist -  ' + req.params);
    console.log(req.params)
        await axios.get(`https://api.deezer.com/artist/${artistID}`).then(artist => {
            res.status(200).json({data : artist.data});
        }).catch(err =>{
            res.status(500).json({msg: err.message})
        });   
}

 
const login = asyncWrapper(async (req,res)=>{
    const apiAuth='https://connect.deezer.com/oauth/auth.php?app_id=514702&redirect_uri=http://localhost/&perms=basic_access,email';
  await axios.get(apiAuth).then(result => {
     res.status(200).send(result.data)
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const callback = asyncWrapper(async (req,res)=>{
     res.status(200).send('public/src/assets/player/dz.js')
 })

const search = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/search/artist?q=${artistID}`).then(artist => {

 const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })
const getArtistAlbums = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/albums`).then(artist => {

 const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistTop = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/top?limit=50`).then(artist => {

 const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistRelated = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/related`).then(artist => {

 const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistPlaylists = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/playlists`).then(artist => {

 const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const initRadio = asyncWrapper(async (req,res)=>{

  //  const {id : artistID} = req.params;
   // console.log(req.params.id);
  const result = await axios.get(`https://api.deezer.com/genre/0`).then(radio => {

 const {data}=radio;
   res.status(200).json({data});
    
 }).catch(err =>{
  res.status(500).json({msg: err.message})
});
 
 
 })


 module.exports = {
    getArtist,
    login,
    search,
    initRadio,
    getArtistAlbums,
    getArtistTop,
    callback
}