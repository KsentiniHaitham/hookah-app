import React from 'react'

const Menu = () => (
  <section className='menu' id='menu'>
    <h2>Our Menu</h2>
    <div className='menu-container'>
      <div className='menu-box'>
        <h3>Hookah Flavors</h3>
        <ul>
          <li>Double Apple</li>
          <li>Mint</li>
          <li>Blueberry</li>
          <li>Grape</li>
          <li>Lemon Mint</li>
          <li>Mix & Match</li>
        </ul>
      </div>
      <div className='menu-box'>
        <h3>Drinks & Snacks</h3>
        <ul>
          <li>Moroccan Tea</li>
          <li>Fresh Juice</li>
          <li>Mocktails</li>
          <li>Soft Drinks</li>
          <li>Fries & Finger Foods</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Menu
