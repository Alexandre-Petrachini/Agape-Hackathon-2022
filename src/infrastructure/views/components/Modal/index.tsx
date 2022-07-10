import React from 'react'
import Modal from 'react-modal'
import './styles.scss'
import { IoMdClose } from 'react-icons/io'
import Button from '../Button'

interface Props {
  trigger: React.ReactNode
  title: string
  description: string
}

function ModalComponent(props: Props) {
  const { trigger, title, description } = props
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const openModal = (): void => {
    setIsOpen(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
  }

  return (
    <span>
      <span onClick={openModal}>{trigger}</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        id="modal-component"
        className="Modal"
        overlayClassName="Modal-Overlay"
      >
        <div className="modal-container" data-testid="modal-component">
          <div className="modal-sub-container">
            <div className="header">
              <div style={{ width: '24px' }} />
              <div>
                <img src="./modal-image.png" alt="modal" height={60} />
              </div>
              <div>
                <IoMdClose className="icon" onClick={() => closeModal()} />
              </div>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="modal-button-container">
              <Button
                onClick={() => closeModal()}
                type="submit"
                text="Ok, entendi"
                style={{
                  width: '280px',
                  border: 'none',
                  backgroundColor: '#009EDB',
                  color: '#fff',
                  fontWeight: '700',
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </span>
  )
}

export default ModalComponent
