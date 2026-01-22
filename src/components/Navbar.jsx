import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white py-6 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Edith Samuels MEDIUM</h1>

      <nav className="text-lg font-medium flex gap-6">

        {/* Home */}
        <Link to="/" className="hover:underline">Home</Link>

       
        {/* Aanbod + submenu */}
        <div className="relative group">
          <span className="hover:underline cursor-pointer">Aanbod</span>

          <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 z-50">

            <Link
              to="/een-op-een"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Een op een gesprek
            </Link>

            <Link
              to="/workshops"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Workshops
            </Link>

            <Link
              to="/trainingen"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Trainingen
            </Link>

            <Link
              to="/zakelijke-beslissingen"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Zakelijke beslissingen
            </Link>

            <Link
              to="/persoonlijk"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Persoonlijk begeleidingstraject
            </Link>

          </div>
        </div>
        
       {/* Over Edith (scroll op homepage) */}
        <Link to="/Over-Edith"
        className="hover:underline">
        Over Edith
        </Link>

        {/* Contact */}
        <Link to="/contact" className="hover:underline">Contact</Link>

      </nav>
    </header>
  );
};

export default Navbar;