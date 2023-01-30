import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
import ReactLoading from "react-loading";
import { API_KEY, API_URL, IMG_PATH } from "./constants";

function App() {
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
      {movies.length > 0 ? (
        <div>
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
              <MovieCard
                movie={movie}
                key={movie.id}
                setSelected={setSelected}
              />
            ))}
          </div>
          <Pagination totalPages={totalPages} setPage={setPage} />
        </div>
      ) : (
        <div className="h-screen w-full  bg-white flex flex-col items-center jutify-center">
          <ReactLoading color="#000" className="my-auto" type="bars" />
        </div>
      )}
    </div>
  );
}

export default App;
