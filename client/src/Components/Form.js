import React from 'react';

function UserForm(props){
    return (
        <div>
            <h1>Form Section</h1>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
            
            </div>
    );
};

export default UserForm;