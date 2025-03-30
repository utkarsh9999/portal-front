import React,{useState} from "react";
export const OtherInfo=()=>{
    function editResumeHeadline() {
        alert('edit');
    }

    return(
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
            <div className="row" style={{marginTop:"30px",fontFamily:"Satoshi"}}>
                <div className="col-lg-3 col-md-4 " >
                    <div className="card"
                         style={{boxShadow:"lightgrey 1px 1px 19px -2px",
                             border:"0px",
                             position:"sticky",
                             top:"80px"
                    }}>
                        <div className="card-body">
                           <ol className="list-group">
                              <li className="list-group-item otherl">Resume Headline</li>
                              <li className="list-group-item otherl">Profile Summary</li>
                              <li className="list-group-item otherl">Career Profile</li>
                              <li className="list-group-item otherl">Key Skills</li>
                              <li className="list-group-item otherl">Employment</li>
                              <li className="list-group-item otherl">Projects</li>
                              <li className="list-group-item otherl">Accomplishments</li>
                              <li className="list-group-item otherl">Education</li>
                              <li className="list-group-item otherl">IT Skills</li>
                              <li className="list-group-item otherl">Personal Details</li>
                           </ol>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 " style={{marginTop:"10px"}}>
                    <div className="card options">
                            <div className="card-body">
                                <h6><strong>Resume</strong></h6>
                                <div className="upload-container">
                                    <div className="file-info">
                                        <div>
                                            <strong><span className="">utkarsh tiwari.docx</span></strong><br/>
                                            <small className="text-muted">Uploaded on Mar 05, 2025</small>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary btn-sm rounded-5"
                                                    style={{marginRight:"10px"}}><i
                                                className="fas fa-download"></i></button>
                                            <button className="btn btn-outline-danger btn-sm rounded-5">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <hr/>
                                        <button className="btn btn-outline-primary btn-sm fw-bold">Update Resume</button>
                                        <p className="text-muted mt-2">
                                            Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                                </div>
                            </div>
                        </div>
                    <div className="card options">
                            <div className="card-body px-4">
                                <h6 className="mb-3"><strong>Resume Headline</strong>
                                    <i className="bi bi-pencil-fill"
                                       onClick={editResumeHeadline}
                                       style={{marginLeft:"20px",cursor:"pointer"}}></i></h6>
                                <p>MERN Stack Developer seeking new opportunities</p>
                            </div>
                       </div>
                    <div className="card options">
                            <div className="card-body px-4">
                                <h6 className="mb-3"><strong>Key Skills</strong>
                                    <i className="bi bi-pencil-fill"
                                       onClick={editResumeHeadline}
                                       style={{marginLeft:"20px",cursor:"pointer"}}></i></h6>
                                <div className="d-flex flex-wrap mt-4">
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        MySQL
                                      </span>
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        Node.js
                                      </span>
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        Express
                                      </span>
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        MongoDB
                                      </span>
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        React.js
                                      </span>
                                      <span className="badge bg-secondary me-2 mb-2" style={{ fontSize: 13 }}>
                                        Docker
                                      </span>
                                      <span className="badge bg-secondary mb-2" style={{ fontSize: 13 }}>
                                        Kubernetes
                                      </span>
                                </div>
                            </div>
                       </div>
                    <div className="card options">
                        <div className="card-body px-4">
                            <h6 className="mb-3"><strong>Employment</strong>
                                <i className="bi bi-pencil-fill"
                                   onClick={editResumeHeadline}
                                   style={{marginLeft:"20px",cursor:"pointer"}}></i></h6>
                            <h6 className="card-title">Mern Full Stack Developer</h6>
                            <p className="card-text">Kazhuga</p>
                            <p className="card-text">Full-time: Dec 2023 to Present (4 months)</p>
                            <p className="card-text">15 Days or Less Notice Period</p>
                            <p className="card-text">Developing robust, scalable, and dynamic web applications.
                                Collaborating with cross-functional teams to understand requirements, design solutions,
                                and deliver high-quality code. Ensuring seamless integration between the front end, back
                                end, and database while optimizing performance.</p>
                            <p className="card-text"><strong>Top 5 skills</strong> MySQL, Node.js, Express, React, MongoDB</p>
                            <button className="btn btn-primary btn-sm mb-3" style={{float:"right",boxShadow:"2px 2px 5px -3px #000000"}}>Add Employment</button>
                        </div>
                    </div>
                    <div className="card options">
                          <div className="card-body">
                                <div className="mb-4">
                                      <h6 className="mb-3"><strong>Education</strong><i className="bi bi-pencil-fill"
                                           onClick={editResumeHeadline}
                                           style={{marginLeft:"20px",cursor:"pointer"}}></i></h6>
                                      <h5 className="card-title">B.Tech/B.E. Computers</h5>
                                      <p className="card-text">Lovely Professional University (LPU)</p>
                                      <p className="card-text">2014-2020 | Full-time</p>
                                </div>
                                <div className="mb-4 d-flex flex-wrap">
                                    <button className="btn btn-primary btn-sm mr-1 mb-2 shd">Add doctorate/PhD</button>
                                    <button className="btn btn-primary btn-sm mr-1 mb-2 shd">Add doctorate/PhD</button>
                                    <button className="btn btn-primary btn-sm mr-1 mb-2 shd">Add class XII</button>
                                    <button className="btn btn-primary btn-sm mr-1 mb-2 shd">Add class X</button>
                                </div>
                                <hr className="my-4" />
                                <button className="btn btn-primary btn-sm mb-3"
                                        style={{float:"right",boxShadow:"2px 2px 5px -3px #000000"}}>Add Education</button>
                          </div>
                    </div>
                    <div className="card options">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h6 className="mb-3"><strong>Skills</strong></h6>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" style={{minWidth:"150px"}}>Skills</th>
                                        <th scope="col" style={{minWidth:"150px"}}>Version</th>
                                        <th scope="col" style={{minWidth:"150px"}}>Last used</th>
                                        <th scope="col" style={{minWidth:"150px"}}>Experience</th>
                                        <th scope="col" style={{minWidth:"150px"}}></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Azure DevOps</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>1 Year 2 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Docker</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>1 Year 6 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kubernetes</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>1 Year 6 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>MySQL</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>4 Years 0 Month</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>React.js</td>
                                        <td>-</td>
                                        <td>2024</td>
                                        <td>3 Years 0 Month</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>MongoDB</td>
                                        <td>-</td>
                                        <td>2024</td>
                                        <td>3 Years 4 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Express</td>
                                        <td>-</td>
                                        <td>2024</td>
                                        <td>3 Years 4 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Node.js</td>
                                        <td>-</td>
                                        <td>2024</td>
                                        <td>3 Years 4 Months</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-success mr-1 rounded-5"><i
                                                className="fa-solid fa-pen"></i></button>
                                            <button className="btn btn-sm btn-outline-danger rounded-5"><i
                                                className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-primary btn-sm mb-3"
                                    style={{float:"right",boxShadow:"2px 2px 5px -3px #000000"}}>Add Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
