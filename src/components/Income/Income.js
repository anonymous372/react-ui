import React from 'react';

import "./Income.css"

function Income() {
    return (
        <div id="income">
            <div className="head">
                Types of Income
            </div>
            <div className='content-in'>
                <div className='item-in'>
                    <input type="checkbox"></input>
                    <label>Default Checkbox</label>
                </div>
                <div className='item-in'>
                    <input type="checkbox" checked />
                    <label>Checked Checkbox</label>
                </div>
                <div className='item-in'>
                    <input type="checkbox"></input>
                    <label>Default Checkbox</label>
                </div>
                <div className='item-in'>
                    <input type="checkbox" checked />
                    <label>Checked Checkbox</label>
                </div>
                <div className='item-in'>
                    <input type="checkbox"></input>
                    <label>Default Checkbox</label>
                </div>
                <div className='item-in'>
                    <input type="checkbox" checked/>
                    <label>Checked Checkbox</label>
                </div>
            </div>
        </div>
    );
}

export default Income;