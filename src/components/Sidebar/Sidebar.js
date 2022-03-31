import React,{useEffect, useState} from 'react';
import "./Sidebar.css"

import {FaUsers, FaSearch, FaCalendarAlt, FaSignOutAlt, FaAngleLeft} from "react-icons/fa"

var flag = true;
function Sidebar() {
    return (
        // <h1>Sidebar</h1>
        <div id="sidebar">
            <div className='head-top'>
                <div className='icon'>B</div>
                <div className='name'>
                    <h2>name</h2>
                    <div>dummy</div>
                </div>
            </div>
            <div id="toggler" onClick={toggle}><FaAngleLeft id="ico-tgl"/></div>
            <div className='content-sb'>
                <div className='main'>
                    <div><FaUsers className='icons'/> <span>Clients</span></div>
                    <div><FaSearch className='icons'/> <span>Search</span></div>
                    <div><FaCalendarAlt className='icons'/> <span>Status</span></div>
                </div>
                <div className='logout icons'><FaSignOutAlt className='icons'/> <span>Logout</span></div>
            </div>
        </div>
    );
}

function toggle(){
    const sidebar = document.getElementById("sidebar")
    const icon = document.getElementById("ico-tgl")
    const name1  = document.querySelector(".head-top .name h2")
    const name2  = document.querySelector(".head-top .name div")
    const allSpan = document.querySelectorAll("#sidebar span")
    const allIcons = document.querySelectorAll("#sidebar .icons")
    
    icon.classList.toggle("tgld")
    name1.classList.toggle("invis")
    name2.classList.toggle("invis")
    sidebar.classList.toggle("sb-wd")
    allSpan.forEach(val => val.classList.toggle("invis"))
    allIcons.forEach(val => val.classList.toggle("enlarge"))
    flag=!flag
}
export default Sidebar;