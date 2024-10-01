import React, { useState } from "react";

const CardDeck = (props) => {
    return (
        <div className={"deck " + props.flashcard.color} onClick={props.onClick}>
             {props.show_answer ? (
                <h2>{props.flashcard.answer}</h2> 
             ) : (
                <div>
                    <h4>Which K-POP group is this?</h4>
                    <h6>Click card when you know the answer.</h6>
                    <img className='kpop-group' src={props.flashcard.image}></img>
                </div>
              )}
        </div>
    );
};

export default CardDeck;