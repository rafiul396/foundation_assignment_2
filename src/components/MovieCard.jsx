const MovieCard = ({ movie, onSeeDetails }) => {
  const year = movie.premiered
    ? movie.premiered.split("-")[0]
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const genres =
    movie.genres?.length > 0
      ? movie.genres[0]
      : "Unknown";

  const poster =
    movie.image?.medium ||
    "https://placehold.co/600x900/111827/FFFFFF?text=No+Image";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-red-500/50">

      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
        <img
          src={poster}
          alt={`${movie.name} poster`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 rounded-lg bg-black/75 px-2.5 py-1 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
          ★ {rating}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Information */}
      <div className="p-4">
        <h2 className="truncate text-lg font-bold text-white">
          {movie.name}
        </h2>

        <div className="mt-2 flex items-center justify-between gap-2 text-sm text-slate-400">
          <span>{year}</span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
            {genres}
          </span>
        </div>

        <button
          onClick={() => onSeeDetails?.(movie)}
          className="mt-4 w-full rounded-lg border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-600 hover:text-white"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;