const express = require('express');
const connection = require('../../database/connection');





  const getSimilarMovies = () => {
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT poster FROM attributes WHERE genre="Action"';
      connection.query(queryString, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


  const getMovieDetails = (id) => {
    return new Promise ((resolve, reject) => {
      const queryString = `SELECT * FROM attributes WHERE movieId=${id}`
      connection.query(queryString, (err, results, fields) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      });
    });
  };











module.exports = {
  getSimilarMovies, 
  getMovieDetails
}