import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark p-5">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <NavLink className="navTitle" to={"/"}>
              KAVAK
            </NavLink>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item nav-link">
                <Link className="links" to={"/"}>
                  INICIO
                </Link>
              </li>
              <li className="nav-item nav-link ">
                <Link className="links" to={"/categoria/1"}>
                  AUTOS
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link className="links" to={"/categoria/2"}>
                  MOTOS
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link className="links" to={"/categoria/3"}>
                  CONTACTO
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
