
const axios = require('axios');
const connection = require('./database/connection');
var faker = require('faker');


 async function seedDbData() {

  var movieIds = [];
  var page = 1;
  
  while (page <= 6) {
    var moviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=5ee6c27316d948d0a1d5833299d57422&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`;
    await axios.get(moviesEndpoint)
      .then(response => {
        var movies = response.data.results;
        movies.map(movie => {
          movieIds.push(movie.id);
        });
      })
      .catch(err => console.log(err));
      page++
    }


  for (var i = 0; i < movieIds.length; i++) {
    var descriptionEndpoint = `https://api.themoviedb.org/3/movie/${movieIds[i]}?api_key=5ee6c27316d948d0a1d5833299d57422&language=en-US`
    await axios.get(descriptionEndpoint)
    .then(response => {
      console.log(response.data);
      var queryString = `INSERT INTO attributes(movieId, title, studio, audioLanguages, poster, supportingActors1, supportingActors2, supportingActors3, producers, subtitles, purchaseRights, formats, devices, genre) 
      VALUES(${response.data.id}, "${response.data.original_title}", "${response.data.production_companies[0].name}", "${response.data.original_language}", "${response.data.poster_path}", "${faker.name.findName()}",
       "${faker.name.findName()}", "${faker.name.findName()}", "${faker.name.findName()}", "Yes", "Stream Instantly Details", "Prime Video (streaming online video)", "Available to watch on supported devices", "${response.data.genres[0].name}")`;
      connection.query(queryString, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
    })
    .catch(err => {console.log(err)});
  }
};

seedDbData();



