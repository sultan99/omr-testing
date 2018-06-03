import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontSize = ({width, height}) => {
  const size = width || height
  return size ? `${size / 16}rem` : `1em`
}

const Span = styled.span`
  box-sizing: border-box;
  color: ${({color}) => color};
  display: inline-block;
  font-size: ${fontSize};
  height: 1em;
  margin: 0.1em;
  width: 1em;

  & > svg {
    fill: currentcolor;
    stroke: currentcolor;
    height: 100%;
    width: 100%;
  }
`
const Icon = ({type, ...props}) => {
  const svg = require(`!raw-loader!./svg/${type}.svg`)
  return <Span {...props} dangerouslySetInnerHTML={{__html: svg}} />
}

Icon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  type: PropTypes.string.isRequired
}

export default Icon
