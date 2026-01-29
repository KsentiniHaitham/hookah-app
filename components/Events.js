import React, { useState } from 'react'

const Events = () => {
  const [offer, setOffer] = useState('')

  const showOffer = () => {
    const offers = [
      '🔥 Happy Hour: 20% off until 8 PM',
      '🎧 Live DJ Tonight from 10 PM',
      '💨 Buy 2 Hookahs, Get 1 Free',
    ]
    setOffer(offers[Math.floor(Math.random() * offers.length)])
  }

  return (
    <section className='events' id='events'>
      <h2>Events & Offers</h2>
      <button onClick={showOffer}>See Today’s Offer</button>
      {offer && <p className='offer-text'>{offer}</p>}
    </section>
  )
}

export default Events
