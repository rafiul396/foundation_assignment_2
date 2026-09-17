const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>

            <span className="text-xl font-bold text-white">
              Movie<span className="text-red-500">Explorer</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-slate-400">
            © 2026 MovieExplorer. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-lg transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              Git
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-xs font-bold transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              in
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-sm font-bold transition duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              𝕏
            </a>

          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            Discover. Explore. Enjoy your next favorite movie.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;