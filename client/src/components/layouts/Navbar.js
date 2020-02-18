import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ link, iName, title, iSpan }) => {
  return (
    <Fragment>
      <li
        className="nav-item w-min-120"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <Link className="nav-link text-center d-flex flex-column" to={link}>
          <i className={iName}></i>
          <span>{title}</span>

          <span className="d-sm-none ml-2">{iSpan}</span>
        </Link>
      </li>
    </Fragment>
  );
};

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark mb-3">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="Home"
              iSpan="Home"
            />
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="Software Skills"
              iSpan="Skills"
            />
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="Web Projects"
              iSpan="Projects"
            />
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="Other Projects"
              iSpan="Projects"
            />
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="More Info"
              iSpan="More Information"
            />
            <NavbarItem
              link="/"
              iName="fas fa-home"
              title="Resume"
              iSpan="Contact"
            />
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
