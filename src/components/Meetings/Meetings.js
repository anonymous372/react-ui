import React from 'react';

import "./Meetings.css"

function Meetings() {
    return (
        <div id="meetings">
            <div className="head">
                Previous Meetings
            </div>
            <div className='content-mt'>
                <div className='item'>
                    <div>1</div>
                    <div>22 Feb,2022</div>
                </div>
                <div className='item'>
                    <div>2</div>
                    <div>26 Feb,2022</div>
                </div>
                <div className='item'>
                    <div>3</div>
                    <div>1 Mar,2022</div>
                </div>
            </div>
        </div>
    );
}

export default Meetings;