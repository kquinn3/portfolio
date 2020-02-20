import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ link, iName, title }) => {
  return (
    <Fragment>
      <li
        className="nav-item w-min-120"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <Link
          className="nav-link text-center d-flex d-lg-none flex-row"
          to={link}
        >
          <i className={iName}></i>
          <span className="ml-2 bg-fade">{title}</span>
        </Link>
        <Link
          className="nav-link text-center d-none d-lg-flex flex-column"
          to={link}
        >
          <i className={iName}></i>
          <span>{title}</span>
        </Link>
      </li>
    </Fragment>
  );
};

const Navbar = () => {
  return (
    <Fragment>
      <nav className="bg-main navbar fixed-top navbar-expand-lg navbar-dark mb-3">
        <div className="container">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-main" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <NavbarItem link="/" iName="ml-1 fas fa-home" title="Home" />
              <NavbarItem
                link="/skills"
                iName="ml-1 fa fa-cogs"
                title="Software Skills"
              />
              <NavbarItem
                link="/kpq"
                iName="ml-1 far fa-handshake"
                title="KPQ Solutions"
              />
              <NavbarItem
                link="/projects"
                iName="ml-1 fas fa-project-diagram"
                title="Other Projects"
              />
              <NavbarItem
                link="/information"
                iName="ml-1 fas fa-info-circle"
                title="More Info"
              />
              <NavbarItem
                link="/contact"
                iName="ml-1 far fa-file"
                title="Resume"
              />
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
