import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onClick }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} onClick={onClick} />
            ))}
        </div>
    );
};

export default MovieList;
