import "../style/movieCard.css";
function MovieCard({ movie, setSelected }) {
  const cardFunc = () => {
    setSelected(movie);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
  return (
    <div onClick={cardFunc} className="card">
      <div className="img__wrapper ">
        {movie.poster_path ? (
          <img
            src={`${IMG_PATH}${movie.poster_path}`}
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
      <div className="card-desc">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
