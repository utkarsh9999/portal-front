import React, {lazy, Suspense} from "react";
import {FallBackUI} from "../../../FallbackUI/FallBackUI";
import {FaMapMarkerAlt, FaWallet, FaPhoneAlt, FaEnvelope, FaRegCalendarAlt} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const PicBlockLazy =
    lazy(() => import("./AccountBasicInfoComponents/PicBlock"));
export const AccountBasicInfo=()=>{
    return(
        <>
            <style>
                {`
                    #editbox{
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                    }
                    .botinfo{
                        font-size: 14px;
                        font-weight: 500;
                        padding-left: 0px;
                        line-height: 18px;
                        font-family:"Satoshi",sans-serif;
                    }
                    .info-icon{
                        margin-right:10px;
                        margin-bottom: 4.3px;
                    }
                    .botinfo li{
                        padding-top:19px;
                    }
                    @media(max-width:768px){
                       .info{
                            text-align:center;
                            margin-top:20px;
                       }
                       #editbox{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                       } 
                    }
                    
                `}
            </style>
            <div className="card" style={{boxShadow:"3px 3px 20px -5px lightgrey",border:"0px"}}>
                <div className="card-body pt-4 pb-4">
                    <div className="row mt-2 mb-2" style={{height:"auto"}}>

                        <div className="col-lg-4 col-md-4" >
                            <Suspense fallback={<FallBackUI/>}>
                                <PicBlockLazy/>
                            </Suspense>

                        </div>
                        <div className="col-lg-8 col-md-8" style={{fontFamily:"Satoshi"}}>
                            <div className="row">

                                <div className="col">
                                    <form>
                                        <div className="mb-1 info">
                                            <label
                                                style={{fontSize:"21px"}}
                                                className="form-label fw-bold ">Utkarsh Tiwari</label>
                                        </div>
                                        <div className="mb-1 info">
                                            <label style={{fontSize:"18px"}}
                                                className="form-label fw-bold ">FullStack Engineer</label>
                                        </div>
                                        <div className="info">
                                            <label style={{fontSize:"18px"}}
                                                className="form-label ">Buxton Consulting</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <ul style={{listStyle:"none"}} className="botinfo">
                                        <li>
                                            <FaMapMarkerAlt className="info-icon"/>
                                            Kanpur , India
                                        </li>
                                        <li>
                                            <FaBriefcase className="info-icon"/>
                                            4 Year , 6 Months
                                        </li>
                                        <li>
                                            <FaWallet  className="info-icon"/>
                                            ₹ 8,00,000
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6" >
                                    <ul style={{listStyle:"none"}} className="botinfo">
                                         <li>
                                            <FaPhoneAlt  className="info-icon"/>
                                             7009250585
                                        </li>
                                        <li>
                                            <FaEnvelope  className="info-icon"/>
                                            utkarsh.tiwari@gmail.com
                                        </li>
                                        <li>
                                            <FaRegCalendarAlt  className="info-icon"/>
                                            1 Month
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           <div id="editbox">
                                <button
                                    style={{boxShadow:"2px 2px 5px -3px #000000"}}
                                    className="btn btn-success btn-sm mt-3 fw-bold">
                                <FaEdit className="info-icon"/>Edit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}