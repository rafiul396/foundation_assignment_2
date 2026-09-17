import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com/shows";
const ITEMS_PER_PAGE = 20;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.error(error);
        setError("Something went wrong while loading movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Search by movie/show title
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset to page 1 whenever the search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMovies.length / ITEMS_PER_PAGE)
  );

  // Keep currentPage in a valid range if filteredMovies shrinks
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMovies = filteredMovies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(safePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build a compact page number list with ellipses
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    pages.push(1);
    if (range.length && range[0] > 2) pages.push("left-ellipsis");
    pages.push(...range);
    if (range.length && range[range.length - 1] < totalPages - 1)
      pages.push("right-ellipsis");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <main>
        {/* Page Header */}
        <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                Explore Our Collection
              </p>

              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Discover Your Next{" "}
                <span className="text-red-500">
                  Favorite Show
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Explore amazing movies and TV shows, discover
                interesting stories, and find something new to watch.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20">

                <span className="text-2xl text-slate-400">
                  🔍
                </span>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search for a movie..."
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="rounded-full px-2 text-xl text-slate-400 transition hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>

              {!loading && !error && (
                <p className="mt-3 text-sm text-slate-500">
                  {searchQuery
                    ? `${filteredMovies.length} result(s) found`
                    : `${movies.length} shows available`}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Movies */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            {/* Loading */}
            {loading && (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-red-500" />

                  <p className="mt-4 text-slate-400">
                    Loading movies...
                  </p>
                </div>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-16 text-center">
                <div className="text-5xl">⚠️</div>

                <h2 className="mt-5 text-2xl font-bold">
                  Something went wrong
                </h2>

                <p className="mt-3 text-slate-400">
                  {error}
                </p>
              </div>
            )}

            {/* Movie Grid */}
            {!loading &&
              !error &&
              filteredMovies.length > 0 && (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {paginatedMovies.map((movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onSeeDetails={setSelectedMovie}
                      />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex flex-col items-center gap-4">
                      <p className="text-sm text-slate-500">
                        Page {currentPage} of {totalPages}
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {/* Prev */}
                        <button
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:text-slate-300"
                        >
                          ← Prev
                        </button>

                        {/* Page Numbers */}
                        {getPageNumbers().map((page, idx) =>
                          page === "left-ellipsis" ||
                          page === "right-ellipsis" ? (
                            <span
                              key={`${page}-${idx}`}
                              className="px-2 text-slate-500"
                            >
                              …
                            </span>
                          ) : (
                            <button
                              key={page}
                              onClick={() => goToPage(page)}
                              className={`min-w-[40px] rounded-lg border px-3 py-2 text-sm font-medium transition ${
                                page === currentPage
                                  ? "border-red-500 bg-red-600 text-white"
                                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-red-500 hover:text-white"
                              }`}
                            >
                              {page}
                            </button>
                          )
                        )}

                        {/* Next */}
                        <button
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:text-slate-300"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

            {/* No Result */}
            {!loading &&
              !error &&
              filteredMovies.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-700 px-6 py-20 text-center">

                  <div className="text-5xl">
                    🎬
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    No Shows Found
                  </h2>

                  <p className="mt-3 text-slate-400">
                    We couldn't find any show matching your search.
                  </p>

                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
                  >
                    Show All
                  </button>
                </div>
              )}
          </div>
        </section>
      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;