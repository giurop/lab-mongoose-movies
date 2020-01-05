const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('../views/movies/index.hbs', { movies });
  })
  .catch(err => console.log(err));
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('../views/movies/show.hbs', { movie })
  })
  .catch(err => console.log(err));
});

module.exports = router;