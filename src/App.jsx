import './App.css';
import CardDeck from './components/CardDeck'
import Button from "./components/Button"
import React, { useState } from "react";


const App = () => {
  const flashcards = [
    {color:"lavender", image:'../aespa.jpg', 
        answer:"aespa"},
    {color:"teal", image:'../babymonster.jpg',
        answer:"BABYMONSTER"},
    {color:"gold", image:'../blackpink.jpg',
        answer:"BLACKPINK"},
    {color:"yellow", image:'../gidle.jpg',
        answer:"G)I-DLE"},
    {color:"blue", image:'../illit.jpg',
        answer:"ILLIT"},
    {color:"green", image:'../ive.jpg',
        answer:"IVE"},
    {color:"red", image:'../kiss_of_life.jpg',
        answer:"KISS OF LIFE"},
    {color:"pink", image:'../le-sserafim.jpg',
        answer:"LE SSERAFIM"},
    {color:"purple", image:'../new_jeans.jpg',
        answer:"NewJeans"},
    {color:"orange", image:'../twice.jpg',
        answer:"TWICE"}   
  ];

  const [currCard, setCard] = useState(0);

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
      setCard(flashcards.length - 1);
    }
  };

  const [showAnswer, setAnswer] = useState(false);

  const toggleAnswer = () => {
      setAnswer(!showAnswer);
  };

  return (
    <div className="App">
      <h2>Guess the K-POP group!</h2>
      <h3>Listen to the song and study to memorize your favorite songs!</h3>
      <CardDeck flashcard={flashcards[currCard]} onClick={toggleAnswer} show_answer={showAnswer}/>
      <div className="buttons">
        <Button arrow='<-' onClick={handlePrev}/>
        <Button arrow='->' onClick={handleNext}/>
      </div>
    </div>

  )
}

export default App;