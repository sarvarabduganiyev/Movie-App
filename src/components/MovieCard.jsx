import { IMAGE_PATH } from "../constants";
import "../style/movieCard.css";
function MovieCard({ movie, setSelected }) {
  const cardFunc = () => {
    setSelected(movie);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div onClick={cardFunc} className="card">
      <div className="img__wrapper ">
        {movie.poster_path ? (
          <img
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt="plant"
            className="h-auto w-full"
          />
        ) : (
          <img
            src="https://stringfixer.com/files/951711496.jpg"
            alt="plant"
            className="h-auto w-full"
          />
        )}
      </div>
      <h2 className="card-title">{movie.title}</h2>
      <div className="card-desc w-full">
        {movie.overview ? <p>{movie.overview}</p> : <p>No description...</p>}
      </div>
    </div>
  );
}

export default MovieCard;
