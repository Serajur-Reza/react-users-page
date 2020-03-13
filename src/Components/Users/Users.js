import React, { useState } from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    
    const {name, email, phone, earning,img}= props.user
    const [enable, setEnable]=useState(props.enable);
    const [text, setText]=useState(props.text);

    
    function handler(){
        if(enable== true){
            props.handleClick(props.user);
            setText("Paid");
            setEnable(false);
            console.log(img);
        }
        // if(document.getElementById("btn").innerText == "Pay Salary"){
            
        //     document.getElementById("btn").innerText="Paid";
        // }
        // ()=>props.handleClick(props.user)
    }
    return (
        
        <div className="user">
            <div className="img-info">
                <img src={img} alt=""/>
            </div>

            <div className='user-info'>
                <h3>Name: {name}</h3>

                <br/>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p><strong>Income: ${earning}</strong></p>

                <button className='add_friend' onClick={handler}>{text}</button>

            </div>
        </div>
    );
};

export default Users;