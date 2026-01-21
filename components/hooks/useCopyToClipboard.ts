import { useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return {
    copyToClipboard,
    isCopied,
  }
}

export default useCopyToClipboard
