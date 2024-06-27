import { PiPlusBold } from 'react-icons/pi'

type ButtonProps = {
  text: string
  showPlusIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, showPlusIcon = true }) => (
  <button className="bg-blue-100 text-blue-500 rounded-xl px-2.5 py-1 flex flex-row flex-grow-0 items-center justify-start w-fit">
    {showPlusIcon && <PiPlusBold className="mr-1" size={16} />}
    <p className="font-semibold text-sm whitespace-nowrap">{text}</p>
  </button>
)

export default Button
