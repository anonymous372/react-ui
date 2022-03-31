import React from 'react';
import "./Leads.css"

import {FaRegEnvelope, FaPhoneAlt} from "react-icons/fa"
import { BsPeople,BsPeopleFill, BsDiagram2, BsTelephone} from "react-icons/bs";
function Leads() {
    return (
        // <h1>Leads</h1>
        <div id="leads">
            <div className="head">
                Most Leads
            </div>
            <div className="content-ld">
                <div className="item">
                    <div className='left-val'>
                        <FaRegEnvelope className='icon' style={{color:"rgb(0, 224, 248)"}}/> Name
                    </div>
                    <div className='right-val'>
                        abc
                    </div>  
                </div>
                <div className="item">
                    <div className='left-val'>
                        <BsPeople className='icon' style={{color:"rgb(0, 87, 248)"}} /> Plan
                    </div>
                    <div className='right-val'>
                        123
                    </div>  
                </div>
                <div className="item">
                    <div className='left-val'>
                        <BsTelephone className='icon' style={{color:"rgb(248, 149, 0)"}}/> Address
                    </div>
                    <div className='right-val'>
                        noida
                    </div>  
                </div>
                <div className="item">
                    <div className='left-val'>
                        <BsDiagram2 className='icon' style={{color:"rgb(0, 87, 248)"}}/> Phone
                    </div>
                    <div className='right-val'>
                        123
                    </div>  
                </div>
                <div className="item">
                    <div className='left-val'>
                        <BsDiagram2 className='icon' style={{color:"rgb(0, 87, 248)"}}/> Email
                    </div>
                    <div className='right-val'>
                        abc@test.com
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Leads;