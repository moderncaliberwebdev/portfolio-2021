import React from 'react'

import '../css/Navigation.css'

function Navigation() {
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

      <div className='navigation__background'>&nbsp;</div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <label htmlFor='navi-toggle' className='nav__link-label'>
              <a href='#' className='navigation__link'>
                Home
              </a>
            </label>
          </li>
          <li className='navigation__item'>
            <label htmlFor='navi-toggle' className='nav__link-label'>
              <a href='#projects' className='navigation__link'>
                My Work
              </a>
            </label>
          </li>
          <li className='navigation__item'>
            <a href='#about' className='navigation__link'>
              <label htmlFor='navi-toggle'>About Me</label>
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#quote' className='navigation__link'>
              <label htmlFor='navi-toggle'>Get a Free Quote</label>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
