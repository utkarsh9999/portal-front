import React, {useRef} from "react";
import {useState} from "react";
import {Navbar} from "./components/Navbar";
import './components/styles/Style.css';
import {Footer} from "./components/Footer";
import { FcDocument } from "react-icons/fc";
import Select from "react-select";

export const Register=()=>{
    const [isExp,set_isExp]=useState(false);
    const [isFresh,set_isFresh]=useState(false);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);
      const handleTextInputClick = () => {
        fileInputRef.current.click();
      };
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFileName(file.name); // Update text input with file name
        }
      };

      const change_exp=()=>{
          set_isExp(true);
          set_isFresh(false);
      }
      const change_fresh=()=>{
          set_isFresh(true);
          set_isExp(false);
      }
    const locations = [
        {
            label: "India",
            options:[
                  { value: "bangalore", label: "Bangalore" },
                  { value: "hyderabad", label: "Hyderabad" },
                  { value: "pune", label: "Pune" },
                  { value: "chennai", label: "Chennai" },
                  { value: "mumbai", label: "Mumbai" },
                  { value: "delhi", label: "Delhi" },
                  { value: "gurgaon", label: "Gurgaon" },
                  { value: "noida", label: "Noida" },
                  { value: "kolkata", label: "Kolkata" },
                  { value: "ahmedabad", label: "Ahmedabad" },
                  { value: "indore", label: "Indore" },
                  { value: "jaipur", label: "Jaipur" },
                  { value: "coimbatore", label: "Coimbatore" },
                  { value: "bhubaneswar", label: "Bhubaneswar" },
                  { value: "trivandrum", label: "Trivandrum" },
                  { value: "visakhapatnam", label: "Visakhapatnam" },
                  { value: "chandigarh", label: "Chandigarh" },
                  { value: "lucknow", label: "Lucknow" },
                  { value: "nagpur", label: "Nagpur" },
                  { value: "kochi", label: "Kochi" },
            ]
        }
    ];
    return(
        <>
            <Navbar/>
            <div className="container-fluid backg">
                <div className="row">
                    <div className="col-lg-3 col-md-4"></div>
                    <div className="col-lg-6 col-md-4" style={{paddingTop:"150px"}}>
                        <div className="search-bar-container pb-5">
                            <h5 className="mb-2">Register</h5>
                            <div className="container mt-3">
                                <form>
                                    <h5 className="mb-3">Personal Information</h5>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control foctl" placeholder="Enter full name"
                                                   required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input type="email" className="form-control foctl" placeholder="Enter email"
                                                   required/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" className="form-control foctl" placeholder="Enter phone number"
                                                   required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" placeholder="password" className="form-control foctl" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h5 className="mb-3 mt-3">Work Status</h5>
                                        <div className="col-md-6 mb-3">
                                            <div className="card p-0 bbl"
                                            onClick={(e)=>change_exp(e)}
                                            >
                                                <div className="card-body d-flex justify-content-between align-items-center" style={{cursor:"pointer"}}>
                                                    <div>
                                                        <strong>I am Experienced</strong>
                                                        <p>I have work experience<br/>
                                                        (excluding internships)</p>
                                                    </div>
                                                    <div>
                                                        <img alt="expl" src="/exp.svg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card bbl"
                                                onClick={(e)=>change_fresh(e)}
                                                style={{cursor:"pointer"}}>
                                                <div className="card-body d-flex justify-content-between align-items-center"
                                                    style={{cursor:"pointer"}}>
                                                    <div>
                                                        <strong>I am a Fresher</strong>
                                                        <p>I am a student/ Haven't worked<br/> after graduation</p>
                                                    </div>
                                                    <div>
                                                        <img alt="expl" src="/fre.svg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {isExp &&
                                                <>
                                                    <label className="mb-3 mt-2"><strong>Experienced</strong></label>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">
                                                            <FcDocument />
                                                        </span>
                                                        <input type="text"
                                                               onClick={handleTextInputClick}
                                                               value={fileName}
                                                               readOnly
                                                               className="form-control foctl" placeholder="Resume Upload"/>
                                                        <input type="file"
                                                               ref={fileInputRef}
                                                               onChange={handleFileChange}
                                                               style={{display:"none"}}/>
                                                    </div>
                                                </>
                                            }
                                            {isFresh &&
                                                <>
                                                    <label className="mb-3 mt-2"><strong>Fresher</strong></label>
                                                    <Select
                                                        className="w-100"
                                                        placeholder="Location"
                                                        styles={{
                                                          control: (baseStyles) => ({
                                                            ...baseStyles,
                                                            borderRadius: "0px",
                                                            //border:"1px solid dodgerblue",
                                                            minWidth: "100%",
                                                          }),
                                                        }}
                                                        options={locations}
                                                />
                                                </>

                                            }
                                        </div>
                                    </div>
                                    <div className="text-center mt-3 pb-4">
                                        <button type="submit"
                                                style={{float:"right"}}
                                                className="btn btn-primary shd">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-lg-4"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}