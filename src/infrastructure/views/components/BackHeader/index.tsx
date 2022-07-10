import React from 'react'
import './styles.scss'
import Button from '../Button'

function BackHeader() {
  return (
    <div id="back-header">
      <div className="header-content">
        <div className="header-logo">
          <Button
            onClick={() => true}
            text=""
            type="button"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9732 6.95091H3.50393L8.51468 1.8056C8.91513 1.3944 8.91513 0.719605 8.51468 0.308402C8.11423 -0.102801 7.46735 -0.102801 7.0669 0.308402L0.300337 7.25667C-0.100112 7.66787 -0.100112 8.33212 0.300337 8.74333L7.0669 15.6916C7.46735 16.1028 8.11423 16.1028 8.51468 15.6916C8.91513 15.2804 8.91513 14.6161 8.51468 14.2049L3.50393 9.05964H14.9732C15.5379 9.05964 16 8.58517 16 8.00527C16 7.42537 15.5379 6.95091 14.9732 6.95091Z"
                  fill="#009EDB"
                />
              </svg>
            }
            style={{
              border: 'none',
              backgroundColor: '#fff',
              height: '20px',
              marginRight: '4px',
            }}
          />
        </div>
        <div className="header-profile">
          <p>Amanhã</p>
        </div>
      </div>
    </div>
  )
}

export default BackHeader
