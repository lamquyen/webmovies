import React from 'react';

const MovieItem = ({ movie, onClick }) => {
    return (
        <div className="movie-item" onClick={() => onClick(movie)}>
            <img src={movie.image} alt={movie.movieName} />
            <div className="movie-item-text">
                <p>{movie.movieName}</p>
                <span>Episode {movie.episode}</span>
            </div>
        </div>
    );
};

export default MovieItem;
