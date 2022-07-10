import React from 'react'
import './styles.scss'

interface Props {
  width: number
  height: number
  color?: string
}

export function Loader(props: Props) {
  const { width, height, color = 'rgb(32, 190, 198)' } = props
  return (
    <div
      className="loader-component"
      style={{ width, height, borderTop: `5px solid ${color}` }}
    />
  )
}

export default Loader
