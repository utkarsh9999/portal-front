import React,{useState,lazy,Suspense} from "react";
import {EmployeeNavbar} from "./components/EmployeeNavbar";
import {FallBackUI} from "../../FallbackUI/FallBackUI";
import {AccountBasicInfo} from "./components/AccountBasicInfo";
import {OtherInfo} from "./components/OtherInfo";


export const EmployeeDashboard=()=>{
    return(
        <>
            <EmployeeNavbar/>
            <div className="container" style={{marginTop:"100px"}}>
                <AccountBasicInfo/>
                <OtherInfo/>
            </div>

        </>
    )
}