import { HiChartBar } from 'react-icons/hi2'
import { PriorityEnum } from 'utils/types'

type PriorityIconProps = {
  priority: PriorityEnum
}

const PriorityIcon: React.FC<PriorityIconProps> = ({ priority }) => {
  const getColorClassName = () => {
    switch (priority) {
      case 'high':
        return 'text-red-500'
      case 'medium':
        return 'text-yellow-500'
      case 'low':
        return 'text-green-500'
      default:
        return ''
    }
  }

  const colorClassName = getColorClassName()

  return <HiChartBar size={16} className={colorClassName} />
}

export default PriorityIcon
