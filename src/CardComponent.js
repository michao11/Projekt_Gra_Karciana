import './App.css';
import CardList from './CardList';
import React, { useEffect, useState } from 'react';
import { collection,  getDocs } from "firebase/firestore";
import db from "./firebase-config";

function CardComponent() {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [remainingCards, setRemainingCards] = useState([]);
  const [myCards, setMyCards] = useState([]);

  useEffect(() => {fetchData()}, [])

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const fetchData = async () => {
    let newList = []
    const querySnapshot = await getDocs(collection(db, "cards"));
        querySnapshot.forEach((doc) => {
        const card = {
            Name: doc.data().Name,
            Type: doc.data().Type,
            Description: doc.data().Description,
            ImageURL: doc.data().ImageURL,
            Rarity: doc.data().Rarity
        }
        newList.push(card)
    });
    newList = shuffle(newList);

    const randomCards = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * newList.length);
      randomCards.push(newList[randomIndex]);
      newList.splice(randomIndex, 1); 
    }
    setDisplayedCards(randomCards);
    setRemainingCards(newList);
  }

  const handleCardClick = (index) => {
    let updatedDeck = [...displayedCards];
    const removedCard = updatedDeck.splice(index, 1); 
    myCards.push(removedCard[0]);
    
    while (updatedDeck.length < 3 && remainingCards.length > 0) {
      const cardToAdd = remainingCards.pop();
      updatedDeck.push(cardToAdd);
    }
    
    shuffle(updatedDeck);
    setDisplayedCards(updatedDeck);

    if (displayedCards.length === 1) {
      const noCardsMessage = document.getElementById("message");
      if (noCardsMessage) {
        noCardsMessage.textContent = "All cards have been selected";
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <p>Choose your card</p>
      </div>
      <div id="message">
        <p></p>
      </div>
      <div className="main">
        <CardList deck={displayedCards} onCardClick={handleCardClick} />
      </div>
      <div className="mycard">
        <h2>Your deck</h2>
        <CardList deck={myCards} />
      </div>
    </div>
  );
}

export default CardComponent;
