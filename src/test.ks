import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import {JobSearchForm} from "../../../components/JobSearchForm";
export const EmployeeNavbar = () => {

  /*const openModal = () => {
    new window.bootstrap.Modal(modalRef.current).show();
  };*/

  return (
    <>
      <style>
        {`
          @media screen and (min-width: 640px) {
            .mega-menu {
              width: 640px;
            }
          }
          #last{
            position:absolute !important;
            right: 0;
            top: 100%;
          }
          @media (max-width: 992px) {
            #last{
              position:static !important;
              overflow-y:visible;
            }
            #meg{
              position: static !important;

              width: 100% !important;
              transform: none !important;
              border: none !important;
              box-shadow: none !important;
            }

          }
          .foctl{
            border-radius:18px;
          }
          .lin{
            font-weight:bold;
          }
          .navlink:hover{
            color:dodgerblue !important;
          }
          .dropdown-menu{
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .navbar{
            font-family:Satoshi;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          .meglink{
            color:black;
            font-size:14px;
          }
          .meglink:hover{
            color:dodgerblue;
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a href="#" className="navbar-brand fw-bold">CODINGSCAPE</a>
          <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMegaMenu"
              aria-controls="navbarMegaMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMegaMenu">
            <ul className="navbar-nav">
              <li className="dropdown">
                <a
                    href="#"
                    className="nav-link px-3 dropdown-toggle lin"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  Jobs
                </a>
                <ul className="dropdown-menu ">
                    <a className="dropdown-item" href="#">Recommended Jobs</a>
                    <a className="dropdown-item" href="#">Job Invites</a>
                    <a className="dropdown-item" href="#">Application Status</a>
                    <a className="dropdown-item" href="#">Saved Jobs</a>
                </ul>
              </li>
              <li className="dropdown">
                <a
                    href="#"
                    className="nav-link px-3 dropdown-toggle lin"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  Companies
                </a>
                <ul className="dropdown-menu mega-menu" id="meg">
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="dropdown-header px-3">Frontend Dev Tutorials</h6>
                      <li><a href="#" className="nav-link px-4 meglink">HTML Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">CSS Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Javascript Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Ajax Tutorials</a></li>
                    </div>
                    <div className="col-md-4">
                      <h6 className="dropdown-header px-3">Frontend Dev Tutorials</h6>
                      <li><a href="#" className="nav-link px-4 meglink">HTML Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">CSS Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Javascript Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Ajax Tutorials</a></li>
                    </div>
                    <div className="col-md-4">
                      <h6 className="dropdown-header px-3">Other Links</h6>
                      <li><a href="#" className="nav-link px-4 meglink">HTML Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">CSS Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Javascript Tutorials</a></li>
                      <li><a href="#" className="nav-link px-4 meglink">Ajax Tutorials</a></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                  <input type="text" className="form-control foctl" placeholder="Search a Job"/>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="dropdown">
                <a
                    href="#"
                    className="nav-link px-3 dropdown-toggle lin"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                  Jobs
                </a>
                <ul className="dropdown-menu dropdown-menu-end" id="last">
                  <li><a href="#" className="nav-link px-4 ">HTML Tutorials</a></li>
                  <li><a href="#" className="nav-link px-4 ">CSS Tutorials</a></li>
                  <li><a href="#" className="nav-link px-4 ">Javascript Tutorials</a></li>
                  <li><a href="#" className="nav-link px-4 ">Ajax Tutorials</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};
