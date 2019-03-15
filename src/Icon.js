import React from 'react'
import { css } from 'glamor'
import SVG from 'react-inlinesvg'

const Icon = ({
  color1,
  color2,
  color3,
  width,
  height,
  iconId
}) => {
  const svgStyle = css({
    '& svg': {
      width,
      height,
      '& .color1': { fill: color1 },
      '& .color2': { fill: color2 },
      '& .color3': { fill: color3 },
    }
  })

  return (
    <span {...svgStyle}>
      <SVG
        src={`https://res.cloudinary.com/jonlin/image/upload/v1552571174/${iconId}.svg`}
      />
    </span>
  )
}

export default Icon
