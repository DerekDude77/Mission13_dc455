// This is the main component for the Movies page.

import { useState } from 'react';
import data from './MovieData.json';
import './Movies.css';

const MovieData = data.MovieData;

function MovieList() {
  const [listMovies, setListMovies] = useState(MovieData);

  return (
    <>
      <div className="movies-container">
        <h3 className="movies-title">Joel Hilton's Movie Collection</h3>
        <div className="movies-table">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {MovieData.map((movie) => (
                <tr>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                  <td>{movie.Director}</td>
                  <td>{movie.Rating}</td>
                  <td>{movie.Category}</td>
                  <td>{movie.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="movies-add-btn btn btn-primary">Add Movie</button>
      </div>
    </>
  );
}

export default MovieList;
