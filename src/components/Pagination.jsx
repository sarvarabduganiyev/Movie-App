import "../style/pagination.css";
import ReactPaginate from "react-paginate";
function Pagination({ totalPages, setPage }) {
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };
  return (
    <div className="flex items-center justify-center container__size pb-[30px]">
      <ReactPaginate
        className="flex pagination flex-wrap"
        nextLabel="next"
        previousLabel="previous"
        pageRangeDisplayed={5}
        pageCount={totalPages}
        activeClassName="active_page"
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default Pagination;
