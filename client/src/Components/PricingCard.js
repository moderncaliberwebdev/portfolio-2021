import React from 'react'

import '../css/PricingCard.css'

function PricingCard({ heading, price, feature, middle }) {
  const scrollToQuote = () => {
    document.getElementById('quote').scrollIntoView()
  }
  return (
    <div
      className='pricingcard'
      style={{
        marginTop: middle ? '2' : '4rem',
        backgroundColor: middle ? '#392033' : '',
        color: middle ? '#fff' : '',
      }}
    >
      <h3 className='pricingcard__heading'>{heading}</h3>
      <p className='pricingcard__text'>Starting at</p>
      <p
        className='pricingcard__price'
        style={{ marginBottom: middle ? '1.5rem' : '0 ' }}
      >
        {price}
      </p>
      <ul className='pricingcard__list'>
        <li className='pricingcard__list-item'>- Fully Custom New Design</li>
        <li className='pricingcard__list-item'>
          - Responsive Web Design and Development
        </li>
        <li className='pricingcard__list-item'>{feature}</li>
        <li className='pricingcard__list-item'>- Monthly Analytics Reports</li>
        <li className='pricingcard__list-item'>- SSL Security Certificate</li>
      </ul>
      <p
        className='pricingcard__button-heading'
        style={{ marginTop: middle ? '1.5rem' : '1rem' }}
      >
        Interested?
      </p>
      <button
        className='pricingcard__button'
        style={{
          boxShadow: middle ? '0 15px 20px rgba(253, 96, 81, 0.15)' : '',
        }}
        onClick={scrollToQuote}
      >
        Let's Talk!
      </button>
    </div>
  )
}

export default PricingCard
