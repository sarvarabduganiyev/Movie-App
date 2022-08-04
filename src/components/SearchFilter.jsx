import { SearchIcon } from "../icons/icons";
function SearchFilter({ searchKey, setSearchKey, fetchMovie }) {
  const SearchMovies = (evt) => {
    evt.preventDefault();
    fetchMovie(searchKey);
  };
  return (
    <form className="mb-12 search_form" onSubmit={SearchMovies}>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          type="text"
          id="default-search"
          className="block p-4 focus:outline-none pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Movies Search..."
          required
        />
        <button
          type="submit"
          className="filter__btn text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchFilter;
