const express = require('express');
const router = express.Router();
const axios = require('axios');

//import controller functions
const {callback,login,search,initRadio,
    getArtist,getArtistData,getArtistAlbums,getArtistTop,getArtistRelated,getArtistPlaylists,
    getArtistFans,
    getArtistRadio,
    chartTracks,
    chartPodcasts,
    chartAlbums,
    chartArtists} = require('../controllers/deezer');


router.route('/callback').get(callback);
router.route('/artist/:id').get(getArtist);
router.route('/artistdata/:id').get(getArtistData);
router.route('/artist/:id/albums').get(getArtistAlbums);
router.route('/artist/:id/related').get(getArtistRelated);
router.route('/artist/:id/playlists').get(getArtistPlaylists);
router.route('/artist/:id/top').get(getArtistTop);
router.route('/artist/:id/fans').get(getArtistFans);
router.route('/charts/tracks').get(chartTracks);
router.route('/charts/podcasts').get(chartPodcasts);
router.route('/charts/artists').get(chartArtists);
router.route('/charts/albums').get(chartAlbums);
router.route('/charts/radio').get(initRadio);
router.route('/search/:id').get(search);
router.route('/login').get(login);


module.exports = router;