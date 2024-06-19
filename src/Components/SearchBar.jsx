import React from 'react'
import Fetch from './Fetch'

import { useState } from 'react';

function SearchBar() {

    const [cardRequested, setcardRequested] = useState('');
    const [submittedCard, setSubmittedCard] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cardRequested, 'In the Input Form');
        setSubmittedCard(cardRequested); // Update submittedLocation on form submit
        setcardRequested('')
    };
  return (
    <>
        <form onSubmit={handleSubmit} className='location-input'>
            <div className='form-row'>
                <label htmlFor='item'>  </label>
                <input
                    value={cardRequested}
                    onChange={e => setcardRequested(e.target.value)}
                    type="text"
                    id='item'
                />
            </div>
            <button type="submit">Submit</button> {/* Add a submit button */}

            <Fetch cardName={submittedCard} />
        </form>
    </>
  )
}

export default SearchBar