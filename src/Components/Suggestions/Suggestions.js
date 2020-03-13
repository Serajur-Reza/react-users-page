import React, { useState } from 'react';
import fakeData from '../../fakeData/data';
import Users from '../Users/Users';
import './Suggestions.css'
import AddInfo from '../AddInfo/AddInfo';


const Suggestions = () => {
    
    const [users, setUsers]= useState(fakeData)
    const [add, setAdd]= useState([]);

    function addHandler(user){
        const newAdd=[...add, user];
        setAdd(newAdd);
    }
    let enable=true;
    let text='Pay Salary';
    // console.log(users);
    return (
        <div className="friends-container">
            <div className="suggestions-container">
                <ul>
                    {
                        users.map(usr=> <Users handleClick={addHandler} enable={enable} text={text} user={usr}></Users>)
                    }
                </ul>
            </div>

            <div className="add-container">
                <AddInfo add={add}></AddInfo>
            </div>
        </div>
        
    );
};

export default Suggestions;