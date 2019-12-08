import React from 'react';
import './AddNewItem.css';


const AddNewItem = () => {

    return (
        <div className="row addItem">
            <textarea value = 'New Item ... ' className="col-sm-6"> </textarea>
            <button type = 'submit' className="col-sm-1">Add</button>
        </div>
    );

};

 export default AddNewItem;