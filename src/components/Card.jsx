import React from "react";

const Card = (props) => {
    return (
        <div className={"flashcard" + props.color}>
            <iframe  
                src={props.embed}
                width="100" 
                height="150" 
                frameBorder="0" 
                allowTransparency="True" 
                allow="encrypted-media" 
            ></iframe>
        </div>
    );
};