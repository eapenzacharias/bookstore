import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className="logo">Bookstore CMS</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <NavLink className="nav-link" to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <span className="text-reset me-3">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
