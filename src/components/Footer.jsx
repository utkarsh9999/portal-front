import React from "react";
import {Link} from "react-router-dom";

export const Footer=()=>{
    return(
        <>
            <footer className="bg-light pt-5 pb-4 mt-5 fon"
                    style={{borderTop:"1px solid lightgrey",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
                    }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="fw-bold">About JobPortal</h5>
                            <p>JobPortal connects job seekers with top companies. Explore thousands of job opportunities
                                in various industries.</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="fw-bold">Quick Links</h5>
                            <ul className="list-unstyled col">
                                <li><Link to="#" className="col text-decoration-none">Browse Jobs</Link></li>
                                <li><Link to="#" className="col text-decoration-none">Post a Job</Link></li>
                                <li><Link to="#" className="col text-decoration-none">Career Advice</Link></li>
                                <li><Link to="#" className="col text-decoration-none">Contact Us</Link></li>
                                <li><Link to="#" className="col text-decoration-none">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h5 className="fw-bold">Contact Us</h5>
                            <p><i className="bi bi-envelope"></i> support@jobportal.com</p>
                            <p><i className="bi bi-geo-alt"></i> UP India</p>

                            {/*<h5 className="fw-bold mt-3">Follow Us</h5>*/}
                            {/*<a href="#" className="me-3"><i className="bi bi-facebook"></i></a>*/}
                            {/*<a href="#" className="me-3"><i className="bi bi-twitter"></i></a>*/}
                            {/*<a href="#" className="me-3"><i className="bi bi-linkedin"></i></a>*/}
                            {/*<a href="#" className=""><i className="bi bi-instagram"></i></a>*/}
                        </div>

                    </div>
                    <hr className="bg-light"/>
                        <div className="text-center">
                            <p className="mb-0">&copy; 2025 JobPortal. All Rights Reserved.</p>
                        </div>
                </div>
            </footer>
        </>
    );
}