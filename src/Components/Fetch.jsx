import React from 'react'
import { useState,useEffect } from 'react'

function Fetch( {cardName} ) {

  const [ magicCards, setMagicCards ] = useState(null)

  useEffect(() => {
    console.log(cardName )
    let card = cardName

    fetch(`https://api.scryfall.com/cards/named?exact=${card}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('No Response');
          }
          return response.json();
      })
      .then(data => {
          setMagicCards(data);
          console.log(data); // You can log the data here if needed
      })
      .catch(error => {
          console.error('Error fetching data:', error.message);
      });
  }, []);
      
  return (
    <div>Fetch</div>
  )
}

export default Fetch