const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error');
const axios = require('axios');
const path = require('path');




 const getArtist = asyncWrapper(async (req,res) => {
    const {id : artistID} = req.params;
   console.log('get artist');
    console.log(req.params.id);
        await axios.get(`https://api.deezer.com/search/artist?q=${artistID}`).then(artist => {
          const {data} = artist;
          console.log(data)
            res.status(200).json({data});
         
        }).catch(err =>{
            res.status(500).json({msg: err.message})
        });   
});

const getArtistData = asyncWrapper(async (req,res) => {
  const {id : artistID} = req.params;
  console.log('get artist data');
  const artist = await axios.get(`https://api.deezer.com/artist/${artistID}`).then(artist => {
    const {data} = artist;
    console.log('Artist Data');
    console.log(data)
      res.status(200).json({data});
}).catch(err =>{
   res.status(500).json({msg: err.message})
});
});

 
const login = asyncWrapper(async (req,res)=>{
    const apiAuth=`https://connect.deezer.com/oauth/auth.php?app_id=514702&redirect_uri=https://deezer-node.herokuapp.com&perms=basic_access,email`;
  await axios.get(apiAuth).then(result => {
     res.status(200).send(result.data)
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const callback = asyncWrapper(async (req,res)=>{
  res.sendFile(__dirname + 'public/src/assets/player/channel.html');
 })

const search = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/search/artist?q=${artistID}`).then(artist => {
    console.log(artist.data);
    const {data}=artist;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistAlbums = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/albums`).then(albums => {

 const {data}=albums;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getAlbum = asyncWrapper(async (req,res)=>{

    const {id : albumID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/album/${albumID}`).then(album => {

 const {data}=album;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistTop = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/top?limit=50`).then(top => {

 const {data}=top;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistRelated = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/related`).then(related => {

 const {data}=related;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 })

const getArtistPlaylists = asyncWrapper(async (req,res)=>{

    const {id : artistID} = req.params;
    console.log(req.params);
  const result = await axios.get(`https://api.deezer.com/artist/${artistID}/playlists`).then(playlists => {

 const {data}=playlists;
   res.status(200).json({data});
    
 });
 //if(!genre) return next(createCustomError(`No Genre with id : ${id}`, 404));
 
 
 });

 const getArtistFans = asyncWrapper(async (req,res)=>{

  const {id : artistID} = req.params;
  console.log(req.params);
const result = await axios.get(`https://api.deezer.com/artist/${artistID}/fans`).then(fans => {

const {data}=fans;
 res.status(200).json({data});
  
  }); 
});

 const getArtistRadio = asyncWrapper(async (req,res)=>{

  const {id : artistID} = req.params;
  console.log(req.params);
const result = await axios.get(`https://api.deezer.com/artist/${artistID}/radio`).then(radio => {
  const {data}=radio;
  res.status(200).json({data});
  
  }); 
});

const initRadio = asyncWrapper(async (req,res)=>{

//  const {id : artistID} = req.params;
 // console.log(req.params.id);
const result = await axios.get(`https://api.deezer.com/radio/`).then(radio => {

const {data}=radio;
 res.status(200).json({data});
  
}).catch(err =>{
res.status(500).json({msg: err.message})
});


});

const chartArtists = asyncWrapper(async (req,res)=>{
const result = await axios.get(`https://api.deezer.com/chart/0/artists`).then(artists => {

const {data}=artists;
 res.status(200).json({data});
  
}).catch(err =>{
res.status(500).json({msg: err.message})
});
});

const chartAlbums = asyncWrapper(async (req,res)=>{
const result = await axios.get(`https://api.deezer.com/chart/0/albums`).then(albums => {

const {data}=albums;
 res.status(200).json({data});
  
}).catch(err =>{
res.status(500).json({msg: err.message})
});


});

const chartPodcasts = asyncWrapper(async (req,res)=>{
const result = await axios.get(`https://api.deezer.com/chart/0/podcasts`).then(podcasts => {

const {data}=podcasts;
 res.status(200).json({data});
  
}).catch(err =>{
res.status(500).json({msg: err.message})
});


});

// const chartPodcastChannel = asyncWrapper(async (req,res)=>{
// const result = await axios.get(`https://api.deezer.com/chart/0/podcasts`).then(podcasts => {

// const {data}=podcasts;
//  res.status(200).json({data});
  
// }).catch(err =>{
// res.status(500).json({msg: err.message})
// });


// });

const chartTracks = asyncWrapper(async (req,res)=>{
const result = await axios.get(`https://api.deezer.com/chart/0/tracks`).then(tracks => {

const {data}=tracks;
 res.status(200).json({data});
  
}).catch(err =>{
res.status(500).json({msg: err.message})
});


});

 module.exports = {
    getArtist,
    getArtistData,
    login,
    search,
    initRadio,
    getArtistAlbums,
    getAlbum,
    getArtistTop,
    callback,
    getArtistRelated,
    getArtistPlaylists,
    getArtistFans,
    getArtistRadio,
    chartTracks,
    chartPodcasts,
    chartAlbums,
    chartArtists,
    chartTracks
}