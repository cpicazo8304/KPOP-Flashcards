import React from "react";

const CardDeck = (props) => {
    return (
        <div className={"flashcard " + props.flashcard.color} onClick={props.onClick}>
            <div className='flashcard-inner'>
                <div className='flashcard-front'>
                    <h4 className='question'>Which member is in this group?</h4>
                    <h3 className='topic'>{props.group}</h3>
                    <img className='kpop-group' src={props.flashcard.image}></img>
                </div>

                <div className='flashcard-back'>
                    <h2 className='answer'>{props.flashcard.answer}</h2> 
                </div>
            </div>
        </div>
    );
};

export default CardDeck;