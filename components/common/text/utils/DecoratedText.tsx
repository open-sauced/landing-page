import React, { FC } from 'react'

const gradientKey = '$yog'
const orangeKey = '$o'
const yellowKey = "$y"

const gradientStyle = `bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text`
const orangeStyle = `bg-brandRed text-transparent bg-clip-text`
const yellowStyle = `bg-brandYellow text-transparent bg-clip-text`

const getStyle = (value: string) => {
  if (value.includes(gradientKey)) {
    return { key: gradientKey, style: gradientStyle }
  } else if (value.includes(orangeKey)) {
    return { key: orangeKey, style: orangeStyle }
  } else if (value.includes(yellowKey)) {
    return { key: yellowKey, style: yellowStyle }
  } else {
    return { key: '', style: '' }
  }
}

interface HandleDecoratedTextProps {
  content: string
}

const HandleDecoratedText: FC<HandleDecoratedTextProps> = ({
  content,
}): React.ReactElement => {
  if (content && typeof content === 'string') {
    const { key, style } = getStyle(content)
    if (key) {
      return (
        <>
          {content.split(key).map((text, i) => {
            if (i % 2 === 0) {
              return text
            }
            return <span className={style}>{text}</span>
          })}
        </>
      )
    } else {
      return <>{content}</>
    }
  }
  return <></>
}

export default HandleDecoratedText
