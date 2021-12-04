import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <NavLink className='navbar-brand m-2' to='/home'>
        CoDaMa
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon bg-dark'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/home'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/companies'>
              Companies
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/companies/new'>
              AddCompany
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
