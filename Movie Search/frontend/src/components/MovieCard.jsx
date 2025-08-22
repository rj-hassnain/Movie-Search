import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){
  const {isFavourite,addToFavourites,removeFromFavourites} = useMovieContext()
  const favorite = isFavourite(movie.id)

  function onFavouriteClick(e){
    e.preventDefault()
    if (favorite) removeFromFavourites(movie.id)
    else addToFavourites(movie)
  }

  return <div className="movie-card">
    <div className="movie-poster">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      <div className="movie-overlay">
        <button className={`favourite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
            ♥
        </button>
      </div>
    </div>
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <p>{movie.release_date?.split("-")[0]}</p>
    </div>
  </div>
}

export default MovieCard;