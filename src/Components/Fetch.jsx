import React from 'react'
import { useState,useEffect } from 'react'

function Fetch() {

    const [ magicCards, setMagicCards ] = useState('')

    useEffect(() => {
        fetchData();
        console.log(magicCards)
    }, [])

    const fetchData = async () => {
        try {

          const response = await fetch('https://api.scryfall.com/cards/named?exact=lightning+bolt');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
      
          setMagicCards(result);
        } catch (error) {

          console.error('Error fetching data:', error.message);
        }
      };
      
  return (
    <div>Fetch</div>
  )
}

export default Fetch