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
    if (currCard >= 1) {
      setCard(currCard - 1);
    }
    else
    {
      setCard(flashcards.length - 1);
    }
  };

  return (
    <div className="App">
      <h2>Guess the K-POP group!</h2>
      <h3>Learn K-POP groups and memorize ones to listen to later.</h3>
      <h5>Number of Flashcards: 10</h5>
      <CardDeck flashcard={flashcards[currCard]}/>
      <div className="buttons">
        <Button arrow='<-' onClick={handlePrev}/>
        <Button arrow='->' onClick={handleNext}/>
      </div>
    </div>

  )
}

export default App;