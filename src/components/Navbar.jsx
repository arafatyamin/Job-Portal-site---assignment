import React from 'react';
import { Link } from 'react-router-dom';
import  './navbar.css';

const Navbar = () => {

    const navLinks = <>
         <li className='hover:underline'><Link to="/">Home</Link></li>
         <li className='hover:underline'><Link to="/">Job</Link></li>
         <li className='hover:underline'><Link>About</Link></li>
         <li className='hover:underline'><Link>Contact Us</Link></li>
         <li className='block uppercase mx-auto shadow bg-indigo-700 hover:bg-white hover:text-black hover:border-indigo-700 hover:border-2 focus:shadow-outline focus:outline-none text-white text-xs h-full rounded-xl'><Link to='/signIn'>Post Job</Link></li>
         <li className='block uppercase mx-auto shadow bg-indigo-700 hover:bg-white hover:text-black hover:border-indigo-700 hover:border-2 focus:shadow-outline focus:outline-none text-white text-xs h-full rounded-xl'><Link to='/signIn'>Sign In</Link></li>
         <li className='block uppercase mx-auto shadow bg-indigo-700 hover:bg-white hover:text-black hover:border-indigo-700 hover:border-2 focus:shadow-outline focus:outline-none text-white text-xs h-full rounded-xl'><Link to='/signOut'>Sign Out</Link></li>
         
    </>

    

    return (
<div className="navbar bg-transparent">
<Link to='/' className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-600 navbar-start ml-5">Jobskr</Link>
  <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
        {navLinks}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
</div>
    );
};

export default Navbar;