import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ifProp} from 'styled-tools'

const backgroundColor = ({primary}) => primary ? `#1fb1ee` : `#4f4f4f`

const Button = styled.button`
  background-color: ${backgroundColor};
  border: none;
  color: white;
  cursor: ${ifProp(`disabled`, `default`, `pointer`)};
  font-size: 19px;
  height: 2.5em;
  padding: 0 1.5em;

  &:hover {
    opacity: 0.85;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: rgba(0,0,0,0.16) 0px 3px 8px;
    margin-top: -1px
  }
`

Button.propTypes = {
  primary: PropTypes.bool
}

export default Button
