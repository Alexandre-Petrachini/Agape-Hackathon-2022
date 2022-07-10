import React, { forwardRef, useImperativeHandle } from 'react'
import Modal from 'react-modal'
import './styles.scss'

interface Props {
  description: string
  onCloseByClickingOutside?: () => void
  buttonText?: string
}

interface CanOpenModal {
  openModal(): void
}

const WarningModalComponent = forwardRef<CanOpenModal, Props>((props, ref) => {
  const {
    description,
    buttonText = 'Ok, entendi',
    onCloseByClickingOutside,
  } = props
  const [modalIsOpen, setIsOpen] = React.useState(false)

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true)
    },
  }))

  const closeModal = (): void => {
    if (onCloseByClickingOutside) onCloseByClickingOutside()
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      id="warning-modal-component"
      className="Modal"
      overlayClassName="Warning-Modal-Overlay"
    >
      <div
        className="warning-modal-container"
        data-testid="warning-modal-component"
      >
        <div className="warning-modal-sub-container">
          <div className="header">
            <div>
              <img src="./modal-warning-image.png" alt="modal" height={60} />
            </div>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="modal-button-container" onClick={() => closeModal()}>
          <div>{buttonText}</div>
        </div>
      </div>
    </Modal>
  )
})

export default WarningModalComponent
