import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com/shows";
const ITEMS_PER_PAGE = 20;

const RandomPicks = () => {
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

  // Pick 6 random shows. Recalculates only when `movies` changes
  // (i.e. on every fresh fetch / page load), not on every re-render,
  // so typing in search or changing pages won't shuffle these.
  const randomPicks = useMemo(() => {
    if (!movies.length) return [];
    const shuffled = [...movies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, [movies]);

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
        {/* <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">
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
            </div> */}

            {/* Search Bar */}
            {/* <div className="mx-auto mt-10 max-w-3xl">
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
            </div> */}
          {/* </div>
        </section> */}

        {/* Random Picks */}
        {!loading && !error && randomPicks.length > 0 && (
          <section className="px-4 pb-14 sm:px-6 lg:px-8 pt-14">
            <div className="mx-auto max-w-7xl">
              <div className="mb-6 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                    Just For You
                  </p>
                  <h2 className="text-xl font-extrabold sm:text-2xl">
                    🎲 Random Movies
                  </h2>
                </div>
                <p className="hidden text-sm text-slate-500 sm:block">
                  Refresh the page for new picks
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3">
                {randomPicks.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onSeeDetails={setSelectedMovie}
                  />
                ))}
              </div>
            </div>

            <div className="py-6 flex justify-center">
            <a
                href="/movies"
                className="mt-2 rounded-lg bg-red-600 px-4 py-2.5 text-center font-semibold hover:bg-red-700"
              >
                Explore Movies
              </a>
        </div>
          </section>
        )}
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

export default RandomPicks;