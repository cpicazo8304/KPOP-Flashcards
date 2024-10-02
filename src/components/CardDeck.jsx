import React from "react";

const CardDeck = (props) => {
    return (
        <div className={"flashcard " + props.flashcard.color} onClick={props.onClick}>
            <div className='flashcard-inner'>
                <div className='flashcard-front'>
                    <h4>Which K-POP group is this?</h4>
                    <h6>Press card when you know the answer.</h6>
                    <img className='kpop-group' src={props.flashcard.image}></img>
                </div>

                <div className='flashcard-back'>
                    <h2>{props.flashcard.answer}</h2> 
                </div>
            </div>
        </div>
    );
};

export default CardDeck;