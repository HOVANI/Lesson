import React from 'react';
import Filter from '../Filter';
import List from '../List';
import AddNewItem from '../AddNewItem'

const App = () => {
    return (
        <>
            <h1 className="jumbotron text-center">What I need to do today</h1>
            <AddNewItem />
            <List />
            <Filter />            
        </>
    );
};

export default App
