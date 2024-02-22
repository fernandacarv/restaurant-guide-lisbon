import React from 'react';
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
<nav className="navbar mt-2 max-w-7xl mx-auto bg-gray-900 rounded-lg">
  <div className="px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full">
    <div className="flex items-center justify-center">
      <Link to="/">
        <img 
          className="h-14 w-auto mr-2"
          src={logo}
          alt="Your Company"
        />
      </Link>
      <div className="sm:block flex space-x-4">
        <Link to='/'>
          <button className="bg-black text-white rounded-md px-3 py-2 text-sm font-medium">Lisbon Food Guide</button>
        </Link>
        <Link to="/">
          <button
            href="#"
            className="bg-black text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Homepage
          </button>
        </Link>
        <Link to="/about">
          <button
            className="bg-black text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            About
          </button>
        </Link>
        <Link to="restaurants/add">
          <button className='border border-gray-500 bg-black text-white rounded-md px-3 py-2 text-sm font-medium'>+ Add Restaurant</button>
        </Link>
      </div>
    </div>
  </div>
</nav>
  );
}

    

export default NavBar;