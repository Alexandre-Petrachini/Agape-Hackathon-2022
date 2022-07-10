import React from 'react'
import './styles.scss'
import { BsCheck2Circle } from 'react-icons/bs'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Loader from '../Loader'

interface Props {
  status: string
  percentage?: number
}

function FileStatus(props: Props) {
  const { status, percentage } = props
  let statusMessage
  let iconContainer
  switch (status) {
    case 'completed': {
      statusMessage = 'Arquivo enviado com sucesso!'
      iconContainer = (
        <div>
          <BsCheck2Circle
            style={{ width: '57px', height: '57px', color: '#88B56E' }}
          />
        </div>
      )
      break
    }
    case 'error': {
      statusMessage = 'Erro ao processar arquivo. Por favor, tente novamente.'
      iconContainer = (
        <div>
          <IoIosCloseCircleOutline
            style={{ width: '58px', height: '58px', color: '#ED1C24' }}
          />
        </div>
      )
      break
    }
    case 'loading': {
      statusMessage = 'Arquivo carregando'
      iconContainer = (
        <div>
          <Loader width={58} height={58} color="#ED1C24" />
        </div>
      )
      break
    }
  }
  return (
    <div
      data-testid="filestatus-component"
      id="filestatus-component"
      className="container"
    >
      <div className="icon-container">{iconContainer}</div>
      <div className="status-container">
        <div className="status-message">{statusMessage}</div>
        {status === 'error' && percentage && (
          <div className="error-message">Arquivo {percentage}% processado</div>
        )}
      </div>
    </div>
  )
}

export default FileStatus
