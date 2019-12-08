import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div className='row'>
            <input type='text'className="col-sm-4"/>
            <i className="fa fa-search" size="25px"></i>
            <button type='button'className="col-sm-2">Active</button>
            <button type='button'className="col-sm-2">Passive</button>
        </div>
    );
};

export default Filter;