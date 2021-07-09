import React from 'react'

import '../css/Navigation.css'

function Navigation() {
  const closeNav = () => {
    document.getElementById('navi-toggle').checked = false
  }
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navi-toggle'
      />

      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className='navigation__background' id='navigation__background'>
        &nbsp;
      </div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link' onClick={closeNav}>
              Home
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#projects' className='navigation__link' onClick={closeNav}>
              My Work
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#about' className='navigation__link' onClick={closeNav}>
              About Me
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#quote' className='navigation__link' onClick={closeNav}>
              Get a Free Quote
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
