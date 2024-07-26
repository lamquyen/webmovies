import React, { useState } from 'react';
import './App.css';
import { data, initialMovie } from './data';
import Banner from './components/Banner';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(initialMovie);

  return (
    <div className="app">
      <header className="header">
        <h1>Anonime</h1>

        <a href="#home">Home</a>
        <a href="#list">List anime</a>

        <input type="text" placeholder="Search anime or movie" />
      </header>
      <div className='content'>
        <h2>Explore</h2>
        <p>What are you gonna watch today ?</p>
      </div>
      <main>
        <Banner movie={selectedMovie} />
        <section>
          <h2 className='newmovie'>New Release</h2>
          <div className="movie-list">
            {data.map(movie => (
              <div key={movie.id} className="movie-item" onClick={() => setSelectedMovie(movie)}>
                <div className="image-container">
                  <img src={movie.image} alt={movie.movieName} />
                  <div className="image-overlay"></div>
                </div>
                <div className="movie-item-text">
                  <p>{movie.movieName}</p>
                  <span>Episode {movie.episode}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
