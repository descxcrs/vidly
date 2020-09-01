import React, { useState } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Heart from "./heart";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (movie) => {
    console.log("Delete button clicked!", movie._id);
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie) => {
    console.log("Liked movie", movie.title);
    const index = movies.indexOf(movie);
    setMovies((movies[index].liked = !movie.liked));
  };

  const count = movies.length;
  if (count === 0) return <p className="m-4">No movies in database</p>;

  return (
    <React.Fragment>
      <p className="m-4">Showing {count} movies in the database</p>
      <table className="table m-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Heart liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Movies;
