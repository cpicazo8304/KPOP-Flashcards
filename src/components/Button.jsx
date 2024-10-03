import React, {useState} from "react";


const Button = (props) => {
    return (
        <div className="move-button" onClick={props.onClick}>
            <h3 className='arrow'>{props.arrow}</h3>
        </div>
    );
};

export default Button;