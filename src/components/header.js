import React from 'react'

export default function header() {
  return (
    <header> 
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Contact</li>
                <li>Profile</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
