const express = require('express');
const router = express.Router();
const controllers = require('../controllers/movieControllers');







router.get(`/api/descriptions`, controllers.getMovieDetails);


router.get('/api/similars', controllers.getSimilarMovies);








module.exports = router;