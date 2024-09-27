import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Deck = () => {
    const flashcards = [
        {color:"lavender", style:"border-radius:12px", embed:"https://open.spotify.com/embed/track/5ocSQW5sIUIOFojwXEz9Ki?utm_source=generator", 
            width:"100%", height:"352", frameBorder:"0", allowfullscreen:"", 
            allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", 
            loading:"lazy", answer:"Supernatural by NewJeans"},
        {color:"teal", audio:"", image:""},
        {color:"gold", audio:"", image:""},
        {color:"mustard", audio:"", image:""},
        {color:"soft-pink", audio:"", image:""}
    ];

    const [currCard, setCard] = useState(0);
    const [showAnswer, setAnswer] = useState(false);

    const handleNext = () => {
        setAnswer(false);
        if (currCard < flashcards.length - 1) 
        {
            setCard(currCard + 1);
        }
        else 
        {
            setCard(0);
        }
    };

    const handlePrev = () => {
        setAnswer(false);
        if (currCard >= 1) {
            setCard(currCard - 1);
        }
        else
        {
            setCard(flascards.length - 1)
        }
    };

    const toggleAnswer = () => {
        setAnswer(!showAnswer);
    }

    return (
        <div className="Deck">
            <Card
                color={flashcards[currCard].color}
                style={flashcards[currCard].style}
                embed={flashcards[currCard].embed}
                width={flashcards[currCard].width}
                height={flashcards[currCard].height}
                frameBorder={flashcards[currCard].frameBorder}
                allowfullscreen={flashcards[currCard].allowfullscreen}
                allow={flashcards[currCard].allow}
                loading={flashcards[currCard].loading}
                answer={flashcards[currCard].answer}
                showAnswer={showAnswer}
                toggleAnswer={toggleAnswer}
            />

            <div>
                <button>

                </button>
            </div>
        </div>
    );
};

export default Deck;