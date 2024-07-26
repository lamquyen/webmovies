import React from 'react';

const Banner = ({ movie }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${movie.image})` }}>
            <div className="banner-overlay">
                <h2>{movie.movieName}</h2>
                <p>{movie.description}</p>
            </div>
        </div>
    );
};

export default Banner;
