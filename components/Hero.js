import React from 'react'

const Hero = () => (
  <section className='hero'>
    <div className='hero-overlay'>
      <h1>Huka Hookah Lounge</h1>
      <p>Relax • Smoke • Vibe</p>
      <button onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>
        View Menu
      </button>
    </div>
  </section>
)

export default Hero
