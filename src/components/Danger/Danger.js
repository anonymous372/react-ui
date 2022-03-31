import React from 'react';

import "./Danger.css";

function Danger() {
    return (
        <div id="danger">
            <div className="head">
                Danger Zone
            </div>
            <div className='content-dg'>
                <h2>Request For</h2>
                <p>
                    Transfer this account to another user to an organization
                     where you have the ability to create repositories.
                </p>
                <div className='btns'>
                    <button>abc</button>
                    <button>abc1</button>
                    <button>Meeting</button>
                    <button>Doc Review</button>
                </div>
            </div>
        </div>
    );
}

export default Danger;