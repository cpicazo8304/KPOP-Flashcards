import './App.css';
import CardDeck from './components/CardDeck'
import Button from "./components/Button"
import React, { useState } from "react";


const App = () => {
  const flashcards = [
    {color:"lavender", image:'../aespa.jpg', 
        answer:"Karina, Winter, Ningning, or Giselle", group:'aespa'},
    {color:"teal", image:'../babymonster.jpg',
        answer:"Ahyeon, Asa, Rora, Rami, Pharita, or Ruka", group:'BABYMONSTER'},
    {color:"gold", image:'../blackpink.jpg',
        answer:"Lisa, Jennie, Rose, or Jisoo", group:'BLACKPINK'},
    {color:"yellow", image:'../gidle.jpg',
        answer:"Mi-yeon, So-yeon, Yuqi, Minnie, or Shu Hua", group:'(G)I-DLE'},
    {color:"blue", image:'../illit.jpg',
        answer:"Wonhee, Minju, Iroha, Moka, or Yunah", group:'ILLIT'},
    {color:"green", image:'../ive.jpg',
        answer:"Won-young, Rei, Yu-jin, Leeseo, Gaeul, or Liz", group:'IVE'},
    {color:"red", image:'../kiss_of_life.jpg',
        answer:"Belle, Natty, Julie, or Haneul", group:'KISS OF LIFE'},
    {color:"pink", image:'../le-sserafim.jpg',
        answer:"Chae-won, Eun-chae, Kazuha, Yun-jin, or Sakura", group:'LE SSERAFIM'},
    {color:"purple", image:'../new_jeans.jpg',
        answer:"Hanni, Danielle, Minji, Haerin, or Hyein", group:'NewJeans'},
    {color:"orange", image:'../twice.jpg',
        answer:"Momo, Nayeon, Jihyo, Dahyun, Mina, Chaeyoung, Tzuyu, Sana, or Jeongyeon", group:'TWICE'}   
  ];

  const [flashcardsIndices, setIndices] = useState(Array.from({ length: 10 }, (_, index) => index));

  const shuffleArray = () => {
    const array = Array.from({ length: 10 }, (_, index) => index);
    for (let i = array.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    setIndices(array);
  };

  const [currCard, setCard] = useState(0);

  const handleNext = () => {
    setGuess('');
    setBorderColor('black-border');
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
    setGuess('');
    setBorderColor('black-border');
    if (currCard >= 1) {
      setCard(currCard - 1);
    }
    else
    {
      setCard(flashcards.length - 1);
    }
  };

  const [guess, setGuess] = useState('');
  const [borderColor, setBorderColor] = useState('black-border');
  const [currStreak, setStreak] = useState(0);
  const [longestStreak, setLong] = useState(0);

  const handleSubmit = () => {
    if (flashcards[flashcardsIndices[currCard]].answer.toLowerCase().includes(guess.toLowerCase()))
    {
      setStreak(currStreak + 1);
      setBorderColor('green-border');
      if (currStreak >= longestStreak)
      {
        setLong(currStreak + 1);
      }
    }
    else
    {
      setBorderColor('red-border');
      setStreak(0);
    }
  };


  return (
    <div className="App">
      <h2 className='title'>Guess the K-POP member!</h2>
      <h4 className="instructions">Make guesses at who is in which group. Press card to see answers.</h4>
      <h5 className='num-flashcards'>Number of Flashcards: 10</h5>
      <h5 className='streak-info'>Current Streak: {currStreak}, Longest Streak: {longestStreak}</h5>
      <CardDeck flashcard={flashcards[flashcardsIndices[currCard]]} group={flashcards[flashcardsIndices[currCard]].group}/>
      <div className='user-answer'>
        <h5 className='guess-instructions'>Guess the answer here: </h5>
        <input type="text" className={'guess ' + borderColor} value={guess} onChange={(e) => {setGuess(e.target.value)}}></input>
        <button type="submit" className='button-submit' onClick={handleSubmit}>Submit Guess</button>
      </div>
      <div className="buttons">
        <Button arrow='<-' onClick={handlePrev}/>
        <Button arrow='->' onClick={handleNext}/>
        <button className='shuffle' onClick={shuffleArray}>Shuffle</button>
      </div>
    </div>
  )
}

export default App;