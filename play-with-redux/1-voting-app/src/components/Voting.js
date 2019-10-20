import React, { useState } from 'react';
import Animal from './Animal';
import Summary from './Summary';

const Voting = (props) => {
    return (
        <div className="card">
            <div className="card-header">Voting : <span className="badge badge-info">{0}</span></div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <Animal value="Dog" />
                    </div>
                    <div className="col-md-6">
                        <Animal value="Cat" />
                    </div>
                    <hr />
                </div>
                <Summary />
            </div>
        </div>
    );
};

export default Voting;