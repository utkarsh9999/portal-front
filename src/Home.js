import React, {useState} from "react";
import {Navbar} from "./components/Navbar";
import './components/styles/Style.css';
import {JobSearchForm} from "./components/JobSearchForm";
import {Footer} from "./components/Footer";
export const Home=()=>{
    return(
        <>
            <Navbar/>
            <div className="container-fluid backg">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8" style={{paddingTop:"200px"}}>
                        <div className="search-bar-container">
                             <h5 className="mb-2">Search Job</h5>
                            <div className="container mt-3">
                                <JobSearchForm/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-8"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}