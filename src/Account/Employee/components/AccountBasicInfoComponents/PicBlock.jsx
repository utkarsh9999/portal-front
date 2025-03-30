import React from "react";
import { FaEdit } from "react-icons/fa";

export default function PicBlock(){

    return(
        <>
            <div className=" d-flex justify-content-center align-items-center">
                <div className="circular--portrait"
                    style={{
                        position: "relative",
                        width: "170px",
                        height: "170px",
                        border:"2px solid white",
                        overflow: "hidden",
                        boxShadow:"2px 2px 20px -12px",
                        borderRadius: "50%",
                    }}
                >
                    <img
                        style={{width: "100%",height: "auto"}}
                        src="./usee.jpg"/>
                </div>

            </div>
            <div style={{
              textAlign: 'center',

              height: 'auto',
            }}>
                <button type="button" className="btn btn-primary btn-sm mt-4"
                style={{
                    borderRadius:"4px",
                    boxShadow:"2px 2px 5px -3px #000000",
                    fontWeight:"bold"
                }}>
                    <FaEdit style={{marginBottom:"4px"}}/>&nbsp;Change Photo
            </button>
            </div>

        </>
    )
}