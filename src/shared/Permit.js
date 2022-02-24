import React from 'react';
import { getCookie } from "../shared/cookie";
import { useSelector } from "react-redux";
const Permit = (props) => {
    const user = useSelector((state) => state.user.user);
    const token = getCookie("token");


    if(token && user){
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    return null;     
    
    
};


export default Permit;