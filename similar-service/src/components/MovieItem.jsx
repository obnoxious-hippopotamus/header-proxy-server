import React from 'react';
import unqid from 'uniqid';


const MovieItem = (props) => {
    return (
        <div className="eachMovie">
                <img key={unqid()} className="moviePoster" src={`https://image.tmdb.org/t/p/original/${props.eachPoster.poster}`} />
                {/* <tooltip/>
            </controller> */}
        </div>
    )
};









export default MovieItem;