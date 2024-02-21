import React from 'react';
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className=" navbar mt-0">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between my-2">
          <div className="flex items-center">
          <Link to="/"><img 
              className="h-14 w-auto mr-5"
              src={logo}
              alt="Your Company"
            /></Link>
          <Link to='/'><h2>Lisbon Food Guide</h2></Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
            <Link to="/"><button
                href="#"
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Homepage
              </button></Link>
              <Link to="/about"><button
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </button></Link>
              <Link to="restaurants/add"><button className='border border-gray-500'>+ Add Restaurant</button></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

    

export default NavBar;