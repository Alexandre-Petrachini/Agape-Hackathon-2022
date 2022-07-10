import React from 'react'
import './styles.scss'
import Loader from '../Loader'

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  style?: React.CSSProperties
  loading?: boolean
  disabled?: boolean
  onClick: () => void
}

function Button(props: Props) {
  const { text, icon, type, style, loading, disabled, onClick } = props
  return (
    <div
      data-testid="button-component"
      id="button-component"
      onClick={() => onClick()}
    >
      {loading ? (
        <button
          className={`button${disabled || loading ? ' disabled' : ''}`}
          style={style}
          // eslint-disable-next-line react/button-has-type
          type={type}
          data-testid="button-loading"
        >
          <Loader width={15} height={15} />
        </button>
      ) : (
        <button
          className={`button${disabled || loading ? ' disabled' : ''}`}
          style={style}
          // eslint-disable-next-line react/button-has-type
          type={type}
        >
          {icon ? (
            <div style={{ marginRight: '10px', display: 'flex' }}>{icon}</div>
          ) : null}
          <div className="label">{text}</div>
        </button>
      )}
    </div>
  )
}

export default Button
