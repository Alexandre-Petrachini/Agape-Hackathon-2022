import React from 'react'
import './styles.scss'
import { FaFile } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineReload } from 'react-icons/ai'

interface Props {
  name: string
  completed?: boolean
  fail?: boolean
  onReload?: () => void
  onClose: () => void
}

function FileBox(props: Props) {
  const { name, completed, fail, onReload, onClose } = props
  return (
    <div
      data-testid="filebox-component"
      id="filebox-component"
      className="container"
    >
      <div className="left-side">
        <div className="fileicon">
          <FaFile className="icon" />
        </div>
        <span className="filename">{name}</span>
      </div>
      <div className="right-side">
        <div className="inside">
          {fail ? (
            <div className="reload-container" data-testid="reload-container">
              <div className="reload-message">Upload falhou!</div>
              <div
                className="reload-button"
                data-testid="reload-button"
                onClick={onReload}
              >
                <AiOutlineReload className="icon" />
              </div>
            </div>
          ) : completed ? (
            <span className="completed-message" data-testid="completed-message">
              Completo!
            </span>
          ) : null}
          <div
            className="close-button"
            data-testid="close-button"
            onClick={() => onClose()}
          >
            <IoMdClose className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileBox
