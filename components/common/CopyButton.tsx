import { ReactElement } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import { TbCopy, TbCheck } from 'react-icons/tb'

interface CopyButtonProps {
  text: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }): ReactElement => {
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <button
      onClick={() => copyToClipboard(text)}
      className="p-2 rounded-md bg-neutral-700 hover:bg-[#ED5432] text-white transition-all ease-in-out duration-400"
      aria-label="Copy to clipboard"
    >
      {isCopied ? <TbCheck /> : <TbCopy />}
    </button>
  )
}

export default CopyButton
