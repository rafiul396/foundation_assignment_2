const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(220,38,38,0.25),transparent_35%),linear-gradient(to_right,#020617_30%,rgba(2,6,23,0.75),rgba(2,6,23,0.4))]" />

      {/* Decorative Blur */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500 sm:text-base">
              Your Ultimate Movie Destination
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Movies
              <span className="block text-red-500">
                You'll Love
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore thousands of amazing movies and TV shows.
              Find your next favorite movie and discover stories
              from around the world.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/movies"
                className="inline-flex items-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-600/30 sm:px-8 sm:py-4"
              >
                Explore Movies

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[480px] w-full max-w-lg">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-red-600/20 blur-3xl" />

              {/* Movie Card 1 */}
              <div className="absolute right-4 top-4 h-80 w-52 rotate-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-red-500/30 to-slate-900 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <span className="text-7xl">🎬</span>
                </div>
              </div>

              {/* Movie Card 2 */}
              <div className="absolute bottom-4 left-8 h-80 w-52 -rotate-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-purple-500/30 to-slate-900 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <span className="text-7xl">🍿</span>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-md">
                <span className="text-6xl">🎥</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 sm:flex">
        <span className="text-xs uppercase tracking-widest">
          Scroll
        </span>
        <span className="animate-bounce text-xl">
          ↓
        </span>
      </div>
    </section>
  );
};

export default Hero;