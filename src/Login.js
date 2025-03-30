import React, {useRef} from "react";
import {useState} from "react";
import {Navbar} from "./components/Navbar";
import './components/styles/Style.css';
import {Footer} from "./components/Footer";
import { FaLock } from "react-icons/fa";
import './components/styles/Input.css';
import {Input} from "./components/Input";
export const Login=()=>{
    const [loginFormData,set_loginFormData]=useState({
        email:"",
        password:"",
    })
    const handleChange = (e) => {
        set_loginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    };
    return(
        <>
            <Navbar/>
            <div className="container-fluid backg">
                <div className="row">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6" style={{paddingTop:"150px"}}>
                        <div className="search-bar-container pb-5">
                            <h5 className="mb-2">Sign In</h5>
                            <div className="container mt-3">
                                <form>
                                    <h5 className="mb-3"></h5>
                                        <div className="row">
                                            <div className="col-md-6 mb-2 mt-2">
                                                <Input type="email" value={loginFormData.email} onChange={handleChange}
                                                       name="email" label="Email" id="email"/>
                                            </div>
                                            <div className="col-md-6 mb-2 mt-2">
                                                <Input type="password" value={loginFormData.password} onChange={handleChange}
                                                       name="password" label="Password" id="password"/>
                                            </div>
                                        </div>
                                    <div className="text-center mt-2 pb-4">
                                        <button type="submit"
                                                style={{float:"right"}}
                                                className="btn btn-primary shd">
                                            <FaLock size={14} style={{marginBottom:"5px"}}/>&nbsp;Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}