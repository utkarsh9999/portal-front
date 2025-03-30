import React, {useRef, useMemo, useState, useEffect} from "react";
import '../../../components/styles/Style.css';
import {JobSearchForm} from "../../../components/JobSearchForm";
import {Link} from "react-router-dom";


export const EmployeeNavbar = () => {
  const modalRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const openJobSearchForm = () => {
    new window.bootstrap.Modal(modalRef.current).show();
  };
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications([1, 2, 3 ]); // Replace with API data
      setLoading(false);
    }, 1000); // Simulated delay
  }, []);

  const list=[1,2,3];
  return (
    <>
      <style>
        {`
          .dropdown-toggle::after {
            display: none !important;
          }
          @media screen and (min-width: 992px) {
            .mega-menu {
              width: 640px;
              left: 0;
              right: 0;
              
              margin-left: auto;
              margin-right: auto;
            }
          }
          
          #last {
            position: absolute;
            right: 0;
            top: 100%;
          }
          #notification-box{
            position: absolute;
            
            right: 0;
            top: 100%;
            width:400px;
          }
          #notlabel{
            padding-left:16px;
            border:1px solid red;
            width:100%;
          }
          
          @media (max-width: 992px) {
            #last {
              position: static;
            }
            #noti{
              margin-bottom:20px;
            }
            #notification-box {
              position: static;
              width:auto;
            }
            #notification-bell{
              margin:16px;
              margin-top:0px;
            }
            .searchbox{
              margin-bottom:15px;
            }
            .mega-menu {
              position: static !important;
              width: 100% !important;
              border: none !important;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1) !important;
            }
            
            .search-input {
              width: 100%;
              margin: 10px 0;
            }
          }
          
          .dropdown-menu {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          
          .navbar {
            font-family: Satoshi;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          
          .meglink {
            color: black;
            font-size: 14px;
            border-radius:4px;
          }
          .notification{
            margin:5px;
            background-color:#f1f1f1;
            width:auto;
            
            height:60px;
            border:1px solid lightgrey ;
          }
          
        `}
      </style>
      <div className="modal fade modal-lg" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{paddingLeft:"30px",paddingRight:"30px"}}>
              <JobSearchForm/>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top" style={{fontWeight:"bold"}}>
        <div className="container">
          <a href="#" className="navbar-brand fw-bold">CODINGSCAPE</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarMegaMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMegaMenu">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link px-3 dropdown-toggle" data-bs-toggle="dropdown">
                  Jobs
                </a>
                <ul className="dropdown-menu" style={{fontSize: "14px"}}>
                  <li><a className="dropdown-item" href="#">Recommended Jobs</a></li>
                  <li><a className="dropdown-item" href="#">Job Invites</a></li>
                  <li><a className="dropdown-item" href="#">Application Status</a></li>
                  <li><a className="dropdown-item" href="#">Saved Jobs</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link px-3 dropdown-toggle" data-bs-toggle="dropdown">
                  Companies
                </a>
                <div className="dropdown-menu mega-menu p-1">
                  <div className="row">
                    <div className="col-md-4">
                      <h6 className="dropdown-header">Explore categories</h6>
                      <a href="#" className="dropdown-item meglink">Unicorn</a>
                      <a href="#" className="dropdown-item meglink">MNC</a>
                      <a href="#" className="dropdown-item meglink">Startup</a>
                      <a href="#" className="dropdown-item meglink">Product based</a>
                      <a href="#" className="dropdown-item meglink">Internet</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="dropdown-header">Explore collections</h6>
                      <a href="#" className="dropdown-item meglink">Top companies</a>
                      <a href="#" className="dropdown-item meglink">IT companies</a>
                      <a href="#" className="dropdown-item meglink">Fintech companies</a>
                      <a href="#" className="dropdown-item meglink">Sponsored companies</a>
                      <a href="#" className="dropdown-item meglink">Featured companies</a>
                    </div>
                    <div className="col-md-4">
                      <h6 className="dropdown-header">Blog</h6>
                      <a href="#" className="dropdown-item meglink">Top Technologies</a>
                      <a href="#" className="dropdown-item meglink">Interview Tips</a>
                      <a href="#" className="dropdown-item meglink">Interview Prep</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item d-lg-flex align-items-center searchbox" >
                <input 
                  type="text" 
                  className="form-control search-input foctl rounded-5"
                  placeholder="Search a Job"
                  onClick={openJobSearchForm}
                />
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown" id="noti">
                <a href="#" className="nav-link px-3 dropdown-toggle"
                   style={{ padding: "0", margin: "0" }}
                   data-bs-toggle="dropdown">
                  <div  style={{border:"1px solid white",
                    borderRadius:"17px 17px 17px 17px",width:"33.9px",height:"34.4px",
                    backgroundImage:"url('./bell.png')",
                    backgroundSize:"33px",
                    boxShadow:"1px 1px 4px -1px",
                    backgroundRepeat:"no-repeat"}}>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end"
                    style={{padding:"0px"}}
                    id="notification-box">
                  <div className="card" style={{border:"0.1px solid lightgrey"}}>
                    <div className="card-header">
                      Notifications
                    </div>
                    <div
                      className="card-body"
                      style={{ padding: "0px", overflowY: "scroll", maxHeight: "200px" }}
                    >
                      {loading ? (
                        <p className="text-center p-2">Loading...</p>
                      ) : (
                        <ul style={{ listStyle: "none", padding: "0px" }}>
                          {notifications.map((value, key) => (
                            <li key={key}>
                              <div className="notification"></div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="card-footer text-body-secondary text-center">
                      <Link to='/notifications' style={{textDecoration:"none"}}>See All Notifications</Link>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link px-3 dropdown-toggle"
                   style={{ padding: "0", margin: "0" }}
                   data-bs-toggle="dropdown">
                  <div  style={{border:"1px solid white",
                    borderRadius:"17px 17px 17px 17px",
                    width:"34px",
                    height:"34px",
                    backgroundImage:"url('./user.png')",
                    backgroundSize:"33px",
                    boxShadow:"1px 1px 4px -1px",
                    backgroundRepeat:"no-repeat"}}>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" id="last" style={{fontSize: "14px"}}>
                  <li><a className="dropdown-item" href="#">My Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};