import React, { useState } from "react";
import Card from "./Card"
import Button from "./Button"

const Card_Deck = () => {
    const flashcards = [
        {color:"lavender", style:"border-radius:12px", embed:"https://open.spotify.com/embed/track/5ocSQW5sIUIOFojwXEz9Ki?utm_source=generator", 
            width:"100%", height:"352", frameBorder:"0", allowfullscreen:"", 
            allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", 
            loading:"lazy", answer:"Supernatural by NewJeans"},
        {color:"teal", embed:"https://open.spotify.com/embed/track/3AoEQRuFf8zVXWqSLo2UOi?utm_source=generator",
            answer:"Crazy by LE SSERAFIM"},
        {color:"gold", embed:"https://open.spotify.com/embed/track/6i8MbzVn4nzyjUcSoVcz7B?utm_source=generator",
            answer:"Armageddon by aespa"},
        {color:"mustard", embed:"https://open.spotify.com/embed/track/2gYj9lubBorOPIVWsTXugG?utm_source=generator",
            answer:"After Like by IVE"},
        {color:"soft-pink", embed:"https://open.spotify.com/embed/track/7n6L2QVQ0eDqXUVRZ8qpY8?utm_source=generator",
            answer:"Bye My Neverland by KISS OF LIFE"}
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
        <div className="deck">
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
                onClick={toggleAnswer}
            />

            <Button arrow="<-" onClick={handlePrev}/>
            <Button arrow="->" onClick={handleNext}/>
        </div>
    );
};

export default Card_Deck;