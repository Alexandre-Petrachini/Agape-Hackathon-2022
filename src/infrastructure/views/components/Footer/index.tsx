import React from 'react'
import './styles.scss'

function Footer() {
  return (
    <div id="footer">
      <div className="footer-content page-container">
        <div className="footer-logo">
          <img
            src="./logo-fleury.png"
            data-testid="image"
            alt="Logo Fleury"
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
