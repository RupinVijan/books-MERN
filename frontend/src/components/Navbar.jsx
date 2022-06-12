import React from "react";
import { Link } from "react-router-dom";

function logout() {
  let userToken = localStorage.getItem("userToken");
  if (!userToken) {
    return (
      <li className="nav-item">
        <Link className="nav-link disabled text-white" to="/login"></Link>
      </li>
    );
  } else {
    localStorage.removeItem("userToken");
    return (
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">
          LOGOUT
        </Link>
      </li>
    );
  }
}

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            The Book Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex mx-10" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-danger text-dark" type="submit"><i className="bi bi-search"></i></button>
      </form> */}
          </div>
          <ul className="navbar-nav me-auto mx-4 display-6 mb-2 mb-lg-0">
            {/* <li className="nav-item mx-4 text-white"><i className="bi bi-suit-heart"></i></li>
          <li className="nav-item mx-4 text-white"><i className="bi bi-cart-check"></i></li> */}
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/cart">
                <i className="bi bi-cart-check"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-danger text-white">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/signup">
                  SIGNUP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/order">
                  ORDER HISTORY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
