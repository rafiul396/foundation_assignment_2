import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            <span className="text-lg font-bold sm:text-xl">
              MovieExplorer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-gray-300 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/movies"
              className="text-gray-300 transition hover:text-white"
            >
              Movies
            </a>

            <a
              href="/about"
              className="text-gray-300 transition hover:text-white"
            >
              About
            </a>

            <a
              href="/movies"
              className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold transition hover:bg-red-700"
            >
              Explore Movies
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-300 hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-2">

              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white"
              >
                Home
              </a>

              <a
                href="/movies"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white"
              >
                Movies
              </a>

              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-gray-300 hover:bg-slate-800 hover:text-white"
              >
                About
              </a>

              <a
                href="/movies"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-lg bg-red-600 px-4 py-2.5 text-center font-semibold hover:bg-red-700"
              >
                Explore Movies
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;