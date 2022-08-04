import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "8e89caf37b0d2b499306227e8c46cc87";
  const IMG_PATH = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  // /?&page=5
  const fetchMovie = async (searchKey) => {
    const type = searchKey ? "search" : "discover";

    const { data } = await axios.get(
      `${API_URL}/${type}/movie/?&page=${page}`,
      {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      }
    );
    setMovies(data.results);
    setSelected(data.results[0]);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovie();
  }, [searchKey, page]);
  const backgroundStyle = {
    backgroundImage: `url(${IMG_PATH}${selected.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
  };
  return (
    <div className="bg-black">
      <div style={backgroundStyle} className=" h-[450px] banner__bg">
        <div className="container__size">
          <SearchFilter
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            fetchMovie={fetchMovie}
          />
          <h3 className="text-white banner__title  text-[40px]">
            {selected.title}
          </h3>
          <p className="text-white banner__description lineEight">
            {selected.overview}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 container__size grid_cards gap-[30px]">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} setSelected={setSelected} />
        ))}
      </div>
      <Pagination totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default App;
