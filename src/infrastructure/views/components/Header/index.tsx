import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCookie } from '../../../../utils/utils'
import { logout } from '../../../redux/user/userSlice'
import Button from '../Button'
import TwoOptionsModal from '../TwoOptionsModal'
import './styles.scss'

interface Props {
  userLogin: string
}

interface CanOpenModal {
  openModal(): void
}

function Header(props: Props) {
  const { userLogin } = props
  const [loading, setLoading] = useState<boolean>(false)
  const navigatoTo = useNavigate()
  const dispatch = useDispatch()
  const childRef = useRef<CanOpenModal>(null)

  const openModal = () => {
    setLoading(true)
    childRef.current?.openModal()
  }
  const logoutUser = () => {
    setLoading(false)
    clearCookie('token')
    dispatch(logout())
    navigatoTo('/login')
  }
  return (
    <div id="header">
      <div className="header-content page-container">
        <div className="header-logo">
          <img src="./logo-fleury.png" alt="Logo Fleury" height={48} />
        </div>
        <div className="header-profile">
          <p>Olá, {userLogin}</p>
          <div style={{ display: 'flex' }}>
            <TwoOptionsModal
              ref={childRef}
              title="Sair?"
              description="Tem certeza que deseja sair dessa conta?"
              onCloseByClickingOutside={() => setLoading(false)}
              leftButton={{
                onClick: () => setLoading(false),
                text: 'Cancelar',
              }}
              rightButton={{
                onClick: () => logoutUser(),
                text: 'Sair',
                style: { color: '#D63230' },
              }}
            />
            <Button
              onClick={() => openModal()}
              text="SAIR"
              type="button"
              loading={loading}
              style={{
                border: 'none',
                backgroundColor: '#ED1C24',
                color: '#fff',
                fontWeight: '700',
                fontSize: '14px',
                height: '35px',
                minWidth: '80px',
                borderRadius: '25px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
