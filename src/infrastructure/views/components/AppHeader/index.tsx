import React from 'react'
import './styles.scss'

interface Props {
  userLogin: string
}

function AppHeader(props: Props) {
  const { userLogin } = props
  return (
    <div id="app-header">
      <div className="header-content">
        <div className="header-logo">
          <img src="./logo-amais-branco.png" alt="Logo Fleury" />
        </div>
        <div className="header-profile">
          <p>Olá, {userLogin}</p>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
