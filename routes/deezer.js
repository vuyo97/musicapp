const express = require('express');
const router = express.Router();
const axios = require('axios');

//import controller functions
const {getArtists,login,getArtist,search,initRadio,getArtistAlbums,getArtistTop,callback} = require('../controllers/deezer');



router.route('/artist/:id').get(getArtist);
router.route('/callback').get(callback);
router.route('/artist/:id/albums').get(getArtistAlbums);
router.route('/artist/:id/top').get(getArtistTop);
router.route('/radio').get(initRadio);
router.route('/search/:id').get(search);
router.route('/login').get(login);


module.exports = router;