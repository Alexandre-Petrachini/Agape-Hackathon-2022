import React, { forwardRef, useImperativeHandle } from 'react'
import Modal from 'react-modal'
import './styles.scss'

interface IButton {
  style?: React.CSSProperties
  text: string
  onClick?: () => void
}

interface Props {
  title: string
  description: string
  leftButton: IButton
  rightButton: IButton
  onCloseByClickingOutside?: () => void
}

interface CanOpenModal {
  openModal(): void
}

const TwoOptionsModal = forwardRef<CanOpenModal, Props>((props, ref) => {
  const {
    leftButton,
    rightButton,
    title,
    description,
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

  const onClickLeftButton = () => {
    closeModal()
    if (leftButton.onClick) leftButton.onClick()
  }

  const onClickRightButton = () => {
    closeModal()
    if (rightButton.onClick) rightButton.onClick()
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      id="two-options-modal-component"
      className="Modal"
      overlayClassName="Two-Options-Modal-Overlay"
    >
      <div
        className="two-options-modal-container"
        data-testid="two-options-modal-component"
      >
        <div className="two-options-modal-sub-container">
          <div className="header">
            <div className="title">{title}</div>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="modal-buttons-container">
          <div
            className="left-button"
            data-testid="left-button"
            style={leftButton.style}
            onClick={() => onClickLeftButton()}
          >
            <span>{leftButton.text}</span>
          </div>
          <div className="buttons-divisor" />
          <div
            className="right-button"
            data-testid="right-button"
            style={rightButton.style}
            onClick={() => onClickRightButton()}
          >
            <span>{rightButton.text}</span>
          </div>
        </div>
      </div>
    </Modal>
  )
})

export default TwoOptionsModal
