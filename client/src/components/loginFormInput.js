import React from 'react';

function LoginFormInput(props) {
    return(
        <div className='LoginFormInput'>
            <label>{props.label}</label>
            <input type={props.type} />
        </div>
    );
}

export default LoginFormInput;