import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-section'>
        <div className='copyrights'>
          &#169; Jaffar Sadhiq
        </div>
        <div className='social'>
          <a className='github link' href='https://github.com/jaffarsdq'>
            <i className='bi bi-github'></i>
          </a>
          <a className='linkedIn link' href='https://www.linkedin.com/in/jaffar-sadhiq/'>
            <i className='bi bi-linkedin'></i>
          </a>
        </div>
          <a className='mail link' href='mailto:er.jaffarsdq@gmail.com'>
            <i className='bi bi-envelope-at'></i> er.jaffarsdq@gmail.com
          </a>
    </div>
  )
}

export default Footer;