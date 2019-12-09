import React from 'react';
import './ListItem.css';

const ListItem = () => {
    return (
        <li className="row list align-items-center">
            <span className="col-sm-4">It's my first note</span>
            <input type="checkbox" className="col-sm-2 check" />
            <button type='submit' className="col-sm-2">Del</button>
            <select className="col-sm-2">
                <option value="Color">Color</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
            </select>
        </li>
    );
};

export default ListItem;