import { useEffect } from "react";

// Strip HTML tags that TVMaze returns inside the `summary` field
const stripHtml = (html) => {
  if (!html) return "No overview available.";
  return html.replace(/<[^>]+>/g, "");
};

const MovieModal = ({ movie, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Lock background scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!movie) return null;

  const backdrop =
    movie.image?.original || movie.image?.medium || null;
  const rating = movie.rating?.average ?? "N/A";
  const releaseDate = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "Unknown";
  const genres = movie.genres?.length ? movie.genres.join(", ") : "N/A";
  const network =
    movie.network?.name || movie.webChannel?.name || "N/A";
  const runtime = movie.runtime ? `${movie.runtime} min` : "N/A";
  const status = movie.status || "N/A";

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.name} details`}
    >
      <div className="relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-slate-900 shadow-2xl ring-1 ring-slate-700 animate-[slideUp_0.25s_ease-out] sm:max-w-2xl sm:rounded-3xl sm:animate-[fadeIn_0.2s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-lg text-white backdrop-blur transition hover:bg-red-600 sm:right-4 sm:top-4"
        >
          ✕
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Backdrop / Poster */}
          <div className="relative h-48 w-full bg-slate-800 sm:h-72">
            {backdrop ? (
              <img
                src={backdrop}
                alt={movie.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-5xl text-slate-600">
                🎬
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-5 px-5 pb-6 pt-4 sm:px-8 sm:pb-8">
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {movie.name}
            </h2>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300 sm:text-base">
              <span className="flex items-center gap-1.5">
                <span className="text-yellow-400">⭐</span>
                Rating: <span className="font-semibold text-white">{rating}</span>
              </span>
              <span className="flex items-center gap-1.5">
                📅 Release:{" "}
                <span className="font-semibold text-white">{releaseDate}</span>
              </span>
            </div>

            {/* Overview */}
            <div>
              <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-red-500">
                Overview
              </h3>
              <p className="text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                {stripHtml(movie.summary)}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-sm sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Genre
                </p>
                <p className="mt-1 font-medium text-white">{genres}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Network
                </p>
                <p className="mt-1 font-medium text-white">{network}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Runtime
                </p>
                <p className="mt-1 font-medium text-white">{runtime}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Status
                </p>
                <p className="mt-1 font-medium text-white">{status}</p>
              </div>
            </div>

            {/* Close Button (footer) */}
            <div className="flex justify-end pt-1">
              <button
                onClick={onClose}
                className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                ❌ Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes for entrance animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MovieModal;