const About = () => {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            About Movie Explorer
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Everything You Need to{" "}
            <span className="text-red-500">
              Explore & Discover
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Movie Explorer is a simple and modern platform where you can
            discover amazing movies and TV shows, explore their details,
            and find your next favorite show.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left - Visual */}
          <div className="relative">

            {/* Background Glow */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">

                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
                  alt="Cinema"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-sm font-medium text-red-400">
                    Your Movie Journey Starts Here
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Discover. Explore. Enjoy.
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Discover Stories Worth Watching
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Finding something good to watch should be easy. Movie Explorer
              brings movies and TV shows together in one simple place so you
              can quickly search, explore, and learn more about the shows
              you are interested in.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              Our platform uses movie and TV show data from the TVMaze API,
              giving you access to useful information such as ratings,
              genres, release dates, posters, and summaries.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Feature 1 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-red-500/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 text-xl">
                  🔍
                </div>

                <h4 className="mt-4 font-bold text-white">
                  Easy Search
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Quickly find your favorite movies and TV shows.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-red-500/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 text-xl">
                  🎬
                </div>

                <h4 className="mt-4 font-bold text-white">
                  Rich Details
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Explore ratings, genres, release dates and summaries.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-red-500/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 text-xl">
                  ⚡
                </div>

                <h4 className="mt-4 font-bold text-white">
                  Fast & Simple
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A clean interface designed for a smooth experience.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-red-500/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 text-xl">
                  📱
                </div>

                <h4 className="mt-4 font-bold text-white">
                  Fully Responsive
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enjoy the experience on desktop, tablet and mobile.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-800 pt-10 sm:grid-cols-4 sm:gap-6">

          <div className="text-center">
            <h4 className="text-3xl font-extrabold text-white">
              1000+
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Shows to Explore
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-extrabold text-white">
              20
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Shows Per Page
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-extrabold text-white">
              100%
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              Responsive
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-extrabold text-white">
              Free
            </h4>

            <p className="mt-2 text-sm text-slate-500">
              To Explore
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;