import React from 'react'
import { ColumnIDsEnum } from 'utils/types'

enum LineColor {
  SKY = 'bg-sky-500',
  RED = 'bg-red-500',
  GREEN = 'bg-green-500',
  TRANSPARENT = 'bg-transparent'
}

type LineProps = {
  id: ColumnIDsEnum
}

const Line: React.FC<LineProps> = ({ id }) => {
  const getStatusColor = (id: ColumnIDsEnum): LineColor => {
    switch (id) {
      case 'applied':
        return LineColor.SKY
      case 'shortlisted':
        return LineColor.GREEN
      case 'interview':
        return LineColor.RED
      default:
        return LineColor.TRANSPARENT
    }
  }

  const color = getStatusColor(id)

  return <div className={`h-1 rounded-full ${color}`}></div>
}

export default Line
