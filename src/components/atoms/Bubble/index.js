import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import {Icon} from 'components'

const gray = `#3d3d3d`
const green = `#1eb764`
const ligthGray = `#dbdbdb`
const red = `#eb5757`

const color = hover => ({selected, dashed}) => {
  if (selected) {
    return hover ? red : green
  }
  if (dashed) {
    return hover ? green : ligthGray
  }
  return hover ? green : gray
}
const border = hover => ({selected, dashed}) => {
  if (selected) {
    return hover ? `1px solid ${red}` : `1px solid ${green}`
  }
  if (dashed) {
    return hover ? `1px solid ${green}` : `1px dashed ${ligthGray}`
  }
  return hover ? `1px solid ${green}` : `1px solid ${gray}`
}

const fadeIn = keyframes`
  from { opacity: 0.1; }
  to { opacity: 1; }
`
const growIn = keyframes`
  from {
    opacity: 0.4;
    width: 10px;
  }
  to {
    opacity: 1;
    width: 18px;
  }
`
const Wrapper = styled.div`
  border-radius: 50%;
  border: ${border(false)};
  box-sizing: border-box;
  color: ${color(false)}
  cursor: pointer;
  font-size: 20px;
  height: 40px;
  padding-top: 10px;
  text-align: center;
  user-select: none;
  width: 40px;

  > span:first-child {
    animation: ${fadeIn} 0.5s ease;
    display: block;
    opacity: 1;
  }

  > span:last-child {
    display: none;
    margin: 2px auto;
    opacity: 0;
  }

  &:hover {
    border: ${border(true)};
    color: ${color(true)}
    padding: 7px 0 0 2px;

    > span:first-child {
      display: none;
      opacity: 0;
    }

    > span:last-child {
      animation: ${growIn} 0.2s linear;
      display: table;
      opacity: 1;
      width: 18px;
    }
  }
  &:focus {
    outline: none;
  }
`

const Bubble = ({children, ...props}) => {
  const {selected} = props
  const type = selected ? `cancel` : `tick`
  return (
    <Wrapper {...props}>
      <span>{children}</span>
      <Icon type={type}/>
    </Wrapper>
  )
}

Bubble.propTypes = {
  selected: PropTypes.bool,
  dashed: PropTypes.bool
}

export default Bubble
