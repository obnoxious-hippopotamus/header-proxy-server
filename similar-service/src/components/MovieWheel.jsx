import React from 'react';
import MovieItem from './MovieItem.jsx';
import $ from "jquery";
import uniqid from 'uniqid';
import ScrollMenu from 'react-horizontal-scrolling-menu';





const MovieWheel = (props) => {



  return (
    
    <ul className="movieWheel">
      {props.moviePosters.map(eachPoster => {
        return (
          <MovieItem key={uniqid()} eachPoster={eachPoster} />
        )
      })}
    </ul>
  )
};




export default MovieWheel;