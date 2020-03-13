import React from 'react';
import './AddInfo.css'

const AddInfo = (props) => {
    const add= props.add;
    // console.log(add);

    let total=add.reduce((acc, current)=> acc+current.earning,0)
    return (
        <div>
            <div className="add">
                <h4>Added Friends: {add.length}</h4>
                <p>Total Income: {total}</p>
            </div>
        </div>
        
    );
};

export default AddInfo;
