import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // Helper: sluit ALLES
  const closeAllMenus = () => {
    setMenuOpen(false);
    setDesktopSubOpen(false);
    setMobileSubOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white py-6 px-8 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Edith Samuels MEDIUM
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex text-lg font-medium gap-8 items-center">

          <Link to="/" className="hover:underline" onClick={closeAllMenus}>
            Home
          </Link>

          {/* Aanbod submenu (desktop) */}
          <div className="relative">
            <button
              type="button"
              className="hover:underline flex items-center gap-1"
              onClick={() => setDesktopSubOpen(prev => !prev)}
            >
              Aanbod
              <span className="text-sm">{desktopSubOpen ? "▲" : "▼"}</span>
            </button>

            {desktopSubOpen && (
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 z-50 py-2 min-w-[220px]">
                <Link
                  to="/een-op-een"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Een op een gesprek
                </Link>
                <Link
                  to="/workshops"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Workshops
                </Link>
                <Link
                  to="/trainingen"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Trainingen
                </Link>
                <Link
                  to="/zakelijke-beslissingen"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Zakelijke beslissingen
                </Link>
                <Link
                  to="/persoonlijk"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Persoonlijk begeleidingstraject
                </Link>
              </div>
            )}
          </div>

          <Link to="/Over-Edith" className="hover:underline" onClick={closeAllMenus}>
            Over Edith
          </Link>

          <Link to="/contact" className="hover:underline" onClick={closeAllMenus}>
            Contact
          </Link>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 text-lg font-medium space-y-4">

          <Link
            to="/"
            className="block hover:underline"
            onClick={closeAllMenus}
          >
            Home
          </Link>

          {/* Mobile submenu Aanbod */}
          <div>
            <button
              className="w-full text-left hover:underline flex items-center justify-between"
              onClick={() => setMobileSubOpen(prev => !prev)}
            >
              Aanbod
              <span className="text-sm">{mobileSubOpen ? "▲" : "▼"}</span>
            </button>

            {mobileSubOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/een-op-een"
                  className="block hover:underline"
                  onClick={closeAllMenus}
                >
                  Een op een gesprek
                </Link>
                <Link
                  to="/workshops"
                  className="block hover:underline"
                  onClick={closeAllMenus}
                >
                  Workshops
                </Link>
                <Link
                  to="/trainingen"
                  className="block hover:underline"
                  onClick={closeAllMenus}
                >
                  Trainingen
                </Link>
                <Link
                  to="/zakelijke-beslissingen"
                  className="block hover:underline"
                  onClick={closeAllMenus}
                >
                  Zakelijke beslissingen
                </Link>
                <Link
                  to="/persoonlijk"
                  className="block hover:underline"
                  onClick={closeAllMenus}
                >
                  Persoonlijk begeleidingstraject
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/Over-Edith"
            className="block hover:underline"
            onClick={closeAllMenus}
          >
            Over Edith
          </Link>

          <Link
            to="/contact"
            className="block hover:underline"
            onClick={closeAllMenus}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;