const express = require('express');
const models = require('../models/movieModels')





const getSimilarMovies = (req, res) => {
  models.getSimilarMovies()
  .then(results => {
      res.status(201).json({ results })
  })
  .catch(err => {
      res.status(400).json({
          message: 'Failed to get Data!',
          err: err
      })
  })
}


const getMovieDetails = (req, res) => {
  const id = req.query.id
  models.getMovieDetails(id)
  .then(results => {
      console.log(req)
      res.status(201).json({ results })
  })
  .catch(err => {
      res.status(400).json({
          message: "Something went wrong!!",
          err: err
      })
  })
};








module.exports = {
    getSimilarMovies,
    getMovieDetails
}