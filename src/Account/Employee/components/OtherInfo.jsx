import React, { useState,useRef } from "react";
export const OtherInfo = () => {
  const myRef = useRef(null);
  const resumebox = useRef(null);
  const headlineRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const refo=useRef(null);
  const projectsRef = useRef(null);
  const summaryRef = useRef(null);
  const careerRef = useRef(null);
  const personalRef = useRef(null);
  function editResumeHeadline(e) {
    e.preventDefault();
    alert("edit");
  }
  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <style>{`
                .otherl{
                    cursor:pointer !important;
                    background-color:#f2f2f2;
                    border:2px solid white !important;
                    font-size:13px;
                    font-weight:bold;
                    border-radius:3px;
                    transition:0.35s;
                }
                .carprof p{
                    margin-bottom:10px;
                }
                .options{
                    border:1px solid white;
                    box-shadow:lightgrey 3px 3px 20px -5px;
                    margin-bottom:20px;
                }
                .upload-container {
                    border: 2px dashed #ccc;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    width: 100%;
                    margin: auto;
                }
                .shd{
                    box-shadow:2px 2px 5px -3px #000000;
                }
                .file-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .icon-btn {
                    border: none;
                    background: none;
                    cursor: pointer;
                    font-size: 18px;
                    margin-left: 10px;
                }
                .otherl:hover{
                    color:white;
                    background-color:#0b5ed7;
                    border:1px solid white;
                    border-radius:3px;
                    
                }
                .options h6{
                    font-size:17px;
                }
            `}</style>
      <div className="row" style={{ marginTop: "30px", fontFamily: "Satoshi" }}>
        <div className="col-lg-3 col-md-4 ">
          <div
            className="card"
            style={{
              boxShadow: "lightgrey 1px 1px 19px -2px",
              border: "0px",
              position: "sticky",
              top: "80px",
            }}
          >
            <div className="card-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                     <ol className="list-group">
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(resumebox)}
                        >
                          Resume
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(headlineRef)}
                        >
                          Resume headline
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(skillsRef)}
                        >
                          Key skills
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(myRef)}
                        >
                          Employment
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(educationRef)}
                        >
                          Education
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(refo)}
                        >
                          IT skills
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(projectsRef)}
                        >
                          Projects
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(summaryRef)}
                        >
                          Profile summary
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(null)}
                        >
                          Accomplishments
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(careerRef)}
                        >
                          Career profile
                        </li>
                        <li
                          className="list-group-item otherl"
                          onClick={() => scrollToElement(personalRef)}
                        >
                          Personal details
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div
          className="col-lg-9 col-md-8 "
          style={{ marginTop: "10px", fontSize: "14px" }}
        >
          <div className="card options"  ref={resumebox}>
            <div className="card-body">
              <h6>
                <strong>Resume</strong>
              </h6>
              <div className="upload-container">
                <div className="file-info">
                  <div>
                    <strong>
                      <span className="">utkarsh tiwari.docx</span>
                    </strong>
                    <br />
                    <small className="text-muted">
                      Uploaded on Mar 05, 2025
                    </small>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary btn-sm rounded-5"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="fas fa-download"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm rounded-5">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <hr />
                <button className="btn btn-outline-primary btn-sm fw-bold">
                  Update Resume
                </button>
                <p className="text-muted mt-2">
                  Supported Formats: doc, docx, rtf, pdf, upto 2 MB
                </p>
              </div>
            </div>
          </div>
          <div className="card options" ref={headlineRef}>
            <div className="card-body px-4">
              <h6 className="mb-3">
                <strong>Resume Headline</strong>
                <i
                  className="bi bi-pencil-fill"
                  onClick={editResumeHeadline}
                  style={{ marginLeft: "20px", cursor: "pointer" }}
                ></i>
              </h6>
              <p>MERN Stack Developer seeking new opportunities</p>
            </div>
          </div>
          <div className="card options" ref={skillsRef}>
            <div className="card-body px-4">
              <h6 className="mb-3">
                <strong>Key Skills</strong>
                <i
                  className="bi bi-pencil-fill"
                  onClick={editResumeHeadline}
                  style={{ marginLeft: "20px", cursor: "pointer" }}
                ></i>
              </h6>
              <div className="d-flex flex-wrap mt-4">
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  MySQL
                </span>
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  Node.js
                </span>
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  Express
                </span>
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  MongoDB
                </span>
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  React.js
                </span>
                <span
                  className="badge bg-secondary me-2 mb-2"
                  style={{ fontSize: 13 }}
                >
                  Docker
                </span>
                <span
                  className="badge bg-secondary mb-2"
                  style={{ fontSize: 13 }}
                >
                  Kubernetes
                </span>
              </div>
            </div>
          </div>
          <div className="card options"  ref={myRef}>
            <div className="card-body px-4">
              <h6 className="mb-3">
                <strong>Employment</strong>
                <i
                  className="bi bi-pencil-fill"
                  onClick={editResumeHeadline}
                  style={{ marginLeft: "20px", cursor: "pointer" }}
                ></i>
              </h6>
              <h6 className="card-title">Mern Full Stack Developer</h6>
              <p className="card-text">Kazhuga</p>
              <p className="card-text">
                Full-time: Dec 2023 to Present (4 months)
              </p>
              <p className="card-text">15 Days or Less Notice Period</p>
              <p className="card-text">
                Developing robust, scalable, and dynamic web applications.
                Collaborating with cross-functional teams to understand
                requirements, design solutions, and deliver high-quality code.
                Ensuring seamless integration between the front end, back end,
                and database while optimizing performance.
              </p>
              <p className="card-text">
                <strong>Top 5 skills</strong> MySQL, Node.js, Express, React,
                MongoDB
              </p>
              <button
                className="btn btn-primary btn-sm mb-3"
                style={{
                  float: "right",
                  boxShadow: "2px 2px 5px -3px #000000",
                }}
              >
                Add Employment
              </button>
            </div>
          </div>
          <div className="card options" ref={educationRef}>
            <div className="card-body">
              <div className="mb-4">
                <h6 className="mb-3">
                  <strong>Education</strong>
                  <i
                    className="bi bi-pencil-fill"
                    onClick={editResumeHeadline}
                    style={{ marginLeft: "20px", cursor: "pointer" }}
                  ></i>
                </h6>
                <h5 className="card-title">B.Tech/B.E. Computers</h5>
                <p className="card-text">
                  Lovely Professional University (LPU)
                </p>
                <p className="card-text">2014-2020 | Full-time</p>
              </div>
              <div className="mb-4 d-flex flex-wrap">
                <button className="btn btn-primary btn-sm mr-1 mb-2 shd">
                  Add doctorate/PhD
                </button>
                <button className="btn btn-primary btn-sm mr-1 mb-2 shd">
                  Add doctorate/PhD
                </button>
                <button className="btn btn-primary btn-sm mr-1 mb-2 shd">
                  Add class XII
                </button>
                <button className="btn btn-primary btn-sm mr-1 mb-2 shd">
                  Add class X
                </button>
              </div>
              <hr className="my-4" />
              <button
                className="btn btn-primary btn-sm mb-3"
                style={{
                  float: "right",
                  boxShadow: "2px 2px 5px -3px #000000",
                }}
              >
                Add Education
              </button>
            </div>
          </div>
          <div className="card options" ref={refo}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="mb-3">
                  <strong>Skills</strong>
                </h6>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ minWidth: "150px" }}>
                        Skills
                      </th>
                      <th scope="col" style={{ minWidth: "150px" }}>
                        Version
                      </th>
                      <th scope="col" style={{ minWidth: "150px" }}>
                        Last used
                      </th>
                      <th scope="col" style={{ minWidth: "150px" }}>
                        Experience
                      </th>
                      <th scope="col" style={{ minWidth: "150px" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Azure DevOps</td>
                      <td>-</td>
                      <td>-</td>
                      <td>1 Year 2 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Docker</td>
                      <td>-</td>
                      <td>-</td>
                      <td>1 Year 6 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kubernetes</td>
                      <td>-</td>
                      <td>-</td>
                      <td>1 Year 6 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>MySQL</td>
                      <td>-</td>
                      <td>-</td>
                      <td>4 Years 0 Month</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>React.js</td>
                      <td>-</td>
                      <td>2024</td>
                      <td>3 Years 0 Month</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>MongoDB</td>
                      <td>-</td>
                      <td>2024</td>
                      <td>3 Years 4 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Express</td>
                      <td>-</td>
                      <td>2024</td>
                      <td>3 Years 4 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Node.js</td>
                      <td>-</td>
                      <td>2024</td>
                      <td>3 Years 4 Months</td>
                      <td>
                        <button className="btn btn-sm btn-outline-success mr-1 rounded-5">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger rounded-5">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-primary btn-sm mb-3"
                style={{
                  float: "right",
                  boxShadow: "2px 2px 5px -3px #000000",
                }}
              >
                Add Details
              </button>
            </div>
          </div>
          <div className="card options" ref={projectsRef}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="mb-3">
                  <strong>Projects</strong>
                </h6>
              </div>
              <div className="card p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="card-title">
                      ITSM Product&nbsp;&nbsp;&nbsp;
                      <small>
                        <i className="fa-solid fa-pen"></i>
                      </small>
                    </h6>
                    <p className="card-text mb-1">Kazhuga (Offsite)</p>
                    <p className="card-text text-muted">
                      Jan 2024 to Present (Full Time)
                    </p>
                  </div>
                </div>
                <p className="card-text mt-3">
                  Built an ITSM Product for creation and management of employee
                  entries, management, monitoring & logging of their requests
                  for various objects like ID, Laptop, etc. Integrated a
                  scheduler built in Spring boot to auto forward the request
                  after a certain time, to the higher order members of the
                  company.
                </p>
              </div>
              <button
                className="btn btn-primary btn-sm mb-3 mt-4"
                style={{
                  float: "right",
                  boxShadow: "2px 2px 5px -3px #000000",
                }}
              >
                Add Project
              </button>
            </div>
          </div>
          <div className="card options" ref={summaryRef} >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="mb-1">
                  <strong>Profile Summary</strong>
                  <i
                    className="bi bi-pencil-fill"
                    onClick={editResumeHeadline}
                    style={{ marginLeft: "20px", cursor: "pointer" }}
                  ></i>
                </h6>
              </div>
              <div className="d-flex justify-content-between align-items-start">
                <p className="card-text mt-1">
                  Highly skilled MERN Stack Developer with 3.5 years of
                  experience in designing and developing microservice-based
                  architectures. Proficient in building scalable,
                  high-performance web applications using MongoDB, Express.js,
                  React.js, and Node.js. Adept at deploying, maintaining, and
                  optimizing RESTful APIs and integrating CI/CD pipelines for
                  seamless delivery. Strong collaborative and problem-solving
                  abilities with a proven track record of delivering robust
                  software solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="card options" ref={careerRef}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="mb-1">
                  <strong>Career Profile</strong>
                  <i
                    className="bi bi-pencil-fill"
                    onClick={editResumeHeadline}
                    style={{ marginLeft: "20px", cursor: "pointer" }}
                  ></i>
                </h6>
              </div>
              <div className="row carprof">
                <div className="col-md-6 mb-3">
                  <p>Current industry</p>
                  <p>
                    <strong>IT Services & Consulting</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Department</p>
                  <p>
                    <strong>Consulting</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Role category</p>
                  <p>
                    <strong>IT Consulting</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Job role</p>
                  <p>
                    <strong>IT Consulting - Other</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Desired job type</p>
                  <p>
                    <strong>permanent</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Desired employment type</p>
                  <p>
                    <strong>Full Time</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Preferred shift</p>
                  <p>
                    <a
                      href=""
                      className="text-decoration-none"
                      onClick={(e) => editResumeHeadline(e)}
                    >
                      Add preferred shift
                    </a>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Preferred work location</p>
                  <p>
                    <strong>Remote</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Expected salary</p>
                  <p>
                    <strong>₹7,00,000</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card options" ref={personalRef}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>
                  <strong>Personal details</strong>{" "}
                  <a href="" className="text-muted">
                    <i
                      className="bi bi-pencil-fill"
                      onClick={editResumeHeadline}
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                    ></i>
                  </a>
                </h6>
              </div>

              <div className="row carprof">
                <div className="col-md-6 mb-3">
                  <p>Personal</p>
                  <p>
                    <strong>Male, Single / Unmarried</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Date of birth</p>
                  <p>
                    <strong>26 Mar 1995</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Category</p>
                  <p>
                    <strong>General</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Differently abled</p>
                  <p>
                    <strong>No</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Career Break</p>
                  <p>
                    <strong>No</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Work Permit</p>
                  <p>
                    <strong>India</strong>
                  </p>
                </div>
                <div className="col-md-6 mb-3">
                  <p>Address</p>
                  <p>
                    <strong>Kanpur, 208019</strong>
                  </p>
                </div>
              </div>

              <hr className="my-4" />
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6>
                  <strong>Languages</strong>
                </h6>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Languages</th>
                      <th>Proficiency</th>
                      <th>Read</th>
                      <th>Write</th>
                      <th>Speak</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>English</td>
                      <td>Proficient</td>
                      <td>✔</td>
                      <td>✔</td>
                      <td>✔</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-primary btn-sm mb-3 mt-4"
                style={{
                  float: "right",
                  boxShadow: "2px 2px 5px -3px #000000",
                }}
              >
                Add Languages
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
