import React from 'react';
import { useNavigate } from 'react-router';


const Navbar = () => {
    const navigate=useNavigate()
  return (
    <nav className="bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <button className="flex items-center hover:scale-105" onClick={()=>navigate('/')}>
            <span className="text-white text-xl font-semibold">dev.Naveen</span> 
          </button>

          {/* Search */}
          {/* <div className="w-1/3 mx-auto">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search..."
            />
          </div> */}

          {/* Buttons */}
          <div className="flex items-center">
            {/* search button */}
            <button onClick={()=>navigate('/search')} className="hover:scale-105 text-white font-bold py-2 px-4 rounded mr-4">
            Search
            </button>
            {/* Login button */}
            <button onClick={()=>navigate('/login')} className=" hover:scale-105 text-white font-bold py-2 px-4 rounded mr-4">
              Login
            </button>

            {/* Signup button */}
            <button onClick={()=>navigate('/signup')} className="bg-transparent hover:bg-pink-500 hover:text-white text-pink-700 font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
