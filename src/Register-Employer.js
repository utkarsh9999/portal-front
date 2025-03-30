import React, { useState } from "react";
import "./components/styles/Style.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Select from "react-select";
import {Input} from "./components/Input";
import {IoCaretBackOutline} from "react-icons/io5";
import {IoCaretForwardOutline} from "react-icons/io5";
import {Textarea} from "./components/Textarea";
import { IoSend } from "react-icons/io5";

export const RegisterEmployer = () => {

  const [step, setStep] = useState(1);

  const indianCities = [
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi", label: "Delhi" },
    { value: "bangalore", label: "Bangalore" },
    { value: "chennai", label: "Chennai" },
  ];

  const indianStates = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
    { value: "tamil_nadu", label: "Tamil Nadu" },
    { value: "delhi", label: "Delhi" },
  ];
  const industryOptions = [
      { value: "it-software", label: "IT - Software" },
      { value: "it-hardware", label: "IT - Hardware" },
      { value: "banking", label: "Banking & Financial Services" },
      { value: "manufacturing", label: "Manufacturing" },
      { value: "healthcare", label: "Healthcare" },
      { value: "education", label: "Education & Training" },
      { value: "retail", label: "Retail" },
      { value: "telecom", label: "Telecom" },
      { value: "automobile", label: "Automobile" },
      { value: "construction", label: "Construction" },
    ];

  const [formData, setFormData] = useState({
      companyName: "",
      industryType: "",
      website: "",
      address: "",
      city: null,
      state: null,
      country: "India",
      pincode: "",
      contactName: "",
      designation: "",
      email: "",
      mobile: "+91 ",
      landline: "",
      username: "",
      password: "",
      description: "",
      numEmployees: "",
      establishmentYear: "",
      registrationCertificate: null,
      panCard: null,
      gstNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };
  const [errors, setErrors] = useState({});
  return (
    <>
      <Navbar />
      <div className="container-fluid backg">
        <div className="row">
          <div className="col-lg-3 col-md-3"></div>
          <div className="col-lg-6 col-md-6" style={{ paddingTop: "150px" }}>
            <div className="search-bar-container pb-3">
              <h5 className="mb-2">Register Employer</h5>
              <div className="container mt-4">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                      <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button"
                                  onClick={()=>setStep(1)}
                                  className={step===1? "btn btn-primary btn-sm fw-bold":"btn btn-outline-primary btn-sm fw-bold"}>
                              1</button>
                          <button type="button"
                                  onClick={()=>setStep(2)}
                                  className={step===2? "btn btn-primary btn-sm fw-bold":"btn btn-outline-primary btn-sm fw-bold"}>
                              2</button>
                          <button type="button"
                                  onClick={()=>setStep(3)}
                                  className={step===3? "btn btn-primary btn-sm fw-bold":"btn btn-outline-primary btn-sm fw-bold"}>
                              3</button>
                          <button type="button"
                                  onClick={()=>setStep(4)}
                                  className={step===4? "btn btn-primary btn-sm fw-bold":"btn btn-outline-primary btn-sm fw-bold"}>
                              4</button>
                          <button type="button"
                                  onClick={()=>setStep(5)}
                                  className={step===5? "btn btn-primary btn-sm fw-bold":"btn btn-outline-primary btn-sm fw-bold"}>
                              5</button>
                      </div>
                  </div>
              <div className="card p-4">
                {step === 1 && (
                  <>
                    <h5 className="mb-3">Company Details</h5>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <Input label="Company Name"
                               name="companyName"
                               value={formData.companyName}
                               id="companyName" type="text" onChange={handleChange} />
                          {errors.name && <span className="text-danger">{errors.name}</span>}
                      </div>
                      <div className="col-lg-6 mt-3">
                          <Select options={industryOptions}
                          value={formData.industryType}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused ? '#3b71ca' : '#3b71ca',
                                fontWeight:"bold"
                            }),
                          }} placeholder="Industry Type" onChange={(selected) => handleSelectChange(selected, "industryType")} />

                        {/*<Input label="Industry Type" id="IndustryType" type="text" onChange={handleChange} />*/}
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Company Website" id="CompanyWebsite" type="url"
                               name="website"
                               value={formData.website}
                               onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Address" id="Address"
                               name="address"
                               value={formData.address}
                               type="text" onChange={handleChange} />
                      </div>
                        <div className="col-lg-6 mt-3">
                        <Select options={indianStates}
                          value={formData.state}
                          name="state"
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused ? '#3b71ca' : '#3b71ca',
                                fontWeight:"bold"
                            }),
                          }} placeholder="State" onChange={(selected) => handleSelectChange(selected, "state")} />

                      </div>
                      <div className="col-lg-6 mt-3">
                        <Select options={indianCities}
                          value={formData.city}
                          name="city"
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              borderColor: state.isFocused ? '#3b71ca' : '#3b71ca',
                                fontWeight:"bold"
                            }),
                          }} placeholder="Cities" onChange={(selected) => handleSelectChange(selected, "city")} />

                      </div>

                      <div className="col-lg-6 mt-3">
                        <Input label="Pincode" id="Pincode"
                               name="pincode"
                               value={formData.pincode}
                               placeholder="Pincode" type="text" onChange={handleChange}/>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Country" id="Country"
                               value={formData.country}
                               placeholder="Country" type="text" onChange={handleChange}/>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-primary shd" style={{float:"right",fontWeight:"bold"}} onClick={() => setStep(step + 1)}>Next
                          <IoCaretForwardOutline style={{marginBottom:"2px"}}/></button>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h5>Contact Person Details</h5>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <Input label="Contact Name"  id="contactName"
                               name="contactName"
                               value={formData.contactName}
                               type="text" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Designation"  id="designation"
                               name="designation"
                               value={formData.designation}
                               type="text" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Email"
                               name="email"
                               value={formData.email}
                               id="email" type="email" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Mobile Number"
                               value={formData.mobile}
                               name="mobile"
                               id="mobile" type="tel" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Landline"
                               value={formData.landline}
                               name="landline"
                               id="landline" type="tel" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-secondary mt-3 me-2 shd"
                                style={{float:"left",fontWeight:"bold"}}
                                onClick={() => setStep(step - 1)}><IoCaretBackOutline style={{marginBottom:"2px"}} /> Back</button>
                        <button className="btn btn-primary mt-3 shd"
                                style={{float:"right",fontWeight:"bold"}}
                                onClick={() => setStep(step + 1)}>Next <IoCaretForwardOutline style={{marginBottom:"2px"}} /></button>
                      </div>
                    </div>
                    </>
                )}

                {step === 3 && (
                  <>
                    <h5>Login Information</h5>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
                        <Input label="Username"
                               value={formData.username}
                               name="username"
                               id="username" type="text" onChange={handleChange} />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <Input label="Password"
                               value={formData.password}
                               name="password"
                               id="password" type="password" onChange={handleChange} />
                      </div>
                      <div className="col-lg-12 mt-3">
                        <button className="btn btn-secondary mt-3 me-2 shd"
                                style={{float:"left",fontWeight:"bold"}}
                                onClick={() => setStep(step - 1)}><IoCaretBackOutline  style={{marginBottom:"2px"}}/> Back</button>
                        <button className="btn btn-primary mt-3 shd"
                                style={{float:"right",fontWeight:"bold"}}
                                onClick={() => setStep(step + 1)}>Next <IoCaretForwardOutline  style={{marginBottom:"2px"}}/></button>
                      </div>
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h5>Company Profile</h5>
                      <div className="row">
                          <div className="col-lg-12 mt-3">
                              <Textarea id="tex" rows="3"
                                        name="description"
                                        value={formData.description}
                                        label="Description" onChange={handleChange}/>
                          </div>
                          <div className="col-lg-6 mt-3">
                              <Input label="Number of Employees"
                                     value={formData.numEmployees}
                                     name="numEmployees"
                                     id="numEmployees" type="number" onChange={handleChange} />
                          </div>
                          <div className="col-lg-6 mt-3">
                              <Input label="Establishment Year"
                                     value={formData.establishmentYear}
                                     name="establishmentYear"
                                     id="esyear" type="number" placeholder="Year of Establishment" onChange={handleChange}/>
                          </div>
                          <div className="col-lg-12 mt-3">
                            <button className="btn btn-secondary mt-3 me-2 shd"
                                    style={{float:"left",fontWeight:"bold"}}
                                    onClick={() => setStep(step - 1)}><IoCaretBackOutline  style={{marginBottom:"2px"}}/> Back</button>
                            <button className="btn btn-primary mt-3 shd"
                                    style={{float:"right",fontWeight:"bold"}}
                                    onClick={() => setStep(step + 1)}>Next <IoCaretForwardOutline  style={{marginBottom:"2px"}}/></button>
                          </div>
                      </div>
                  </>
                )}

                {step === 5 && (
                  <>
                    <h5>Verification Documents</h5>
                      <div className="row">
                          <div className="col-lg-6 mt-3">
                            {/*<Input type="text" id="file" onChange={handleChange} label="Registration Certificate"/>*/}
                            <label className="form-label fw-bold" style={{fontSize:"14px"}}>Registration Certificate</label>
                            <input type="file" name="registrationCertificate" id="file1"

                                   className="form-control mb-2 foctl"
                                   style={{display:"block",border:"2px solid #3b71ca"}}
                                   onChange={handleFileChange} />
                          </div>
                          <div className="col-lg-6 mt-3">
                              <label className="form-label fw-bold" style={{fontSize:"14px"}}>Pan Card</label>
                              <input type="file" name="panCard" className="form-control mb-2 foctl"
                                     id="file1"
                                     placeholder="Pan Card"
                                     style={{display:"block",border:"2px solid #3b71ca"}}
                                     onChange={handleFileChange} />
                          </div>
                          <div className="col-lg-12 mt-3">
                              <Input label="Gst Number" id="gstNumber" type="text" placeholder="Gst Number" onChange={handleChange}/>
                          </div>
                          <div className="col-lg-12 mt-3">
                              <button
                                  className="btn btn-secondary mt-3 me-2 shd"
                                  style={{float:"left",fontWeight:"bold"}}
                                  onClick={() => setStep(step - 1)}><IoCaretBackOutline style={{marginBottom:"2px"}} /> Back</button>
                              <button className="btn btn-success mt-3 me-2 shd"
                                  style={{float:"right",fontWeight:"bold"}}>
                                  Submit &nbsp;
                                  <IoSend style={{marginBottom:"2px"}}/>
                              </button>
                          </div>
                      </div>

                  </>
                )}

              </div>
                  <h6 className="text-center mt-3">Step {step} / 5</h6>
            </div>
            </div>
          </div>
          <div className="col-lg-3 col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
