import React from 'react'
import './styles.scss'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

interface Props {
  label?: string
  checked: boolean
  checkboxStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  onClick: () => void
}

function Checkbox(props: Props) {
  const { label, checked, checkboxStyle, labelStyle, onClick } = props
  return (
    <div
      data-testid="checkbox-component"
      id="checkbox-component"
      className="container"
      onClick={() => onClick()}
    >
      {checked ? (
        <ImCheckboxChecked
          data-testid="ImCheckboxChecked"
          style={checkboxStyle}
        />
      ) : (
        <ImCheckboxUnchecked
          data-testid="ImCheckboxChecked"
          style={checkboxStyle}
        />
      )}
      {label ? (
        <div className="label" data-testid="checkbox-label" style={labelStyle}>
          {label}
        </div>
      ) : null}
    </div>
  )
}

export default Checkbox
