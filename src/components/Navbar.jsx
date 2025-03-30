import React, { useState } from "react";
import "./styles/Style.css";
import {Link, useNavigate} from "react-router-dom";
import {FaLock} from "react-icons/fa";
export const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false); // State for the first dropdown
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // State for the second dropdown
  const navigate=useNavigate();
  function register(){
    navigate('/Register')
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-light shadow-sm fixed-top"
        style={{
          boxShadow: "0px 10px 25px rgba(30, 10, 58, 0.08)",
          fontFamily: "Satoshi",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Companies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsDropdownOpen1(true)} // Use isDropdownOpen1
                onMouseLeave={() => setIsDropdownOpen1(false)}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button">
                  Dropdown link
                </a>
                <ul
                  className={`dropdown-menu ${isDropdownOpen1 ? "show" : ""}`}
                  style={{ boxShadow: "0px 12px 25px rgba(30, 10, 58, 0.08)" }}>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {/* Corrected placement of "Third Item" */}
              <li className="nav-item">
                <button className="btn btn-primary mr-1" type="button" onClick={register}>
                  Register
                </button>
                <Link className="btn btn-outline-primary mr-1" type="button" to="/Login">
                  <FaLock size={14} style={{marginBottom:"4px"}}/>&nbsp;Login
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsDropdownOpen2(true)} // Use isDropdownOpen2
                onMouseLeave={() => setIsDropdownOpen2(false)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                >
                  Employer
                </a>
                <ul
                  className={`dropdown-menu ${isDropdownOpen2 ? "show" : ""}`}
                  style={{ boxShadow: "0px 12px 25px rgba(30, 10, 58, 0.08)" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/Register-Employer">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Employer-Login">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};