import PropTypes from 'prop-types'
import styled from 'styled-components'
import {font} from 'styled-theme'

const Input = styled.input`
  background-color: white;
  border: 1px solid #d6d6d6;
  color: black;
  font-family: ${font(`primary`)};
  font-size: 24px;
  height: 2.5em;
  padding: 0 0.5em 0 1.2em;
  text-align: ${props => props.type === `number` ? `right` : `left`};

  &[type=number]::-webkit-inner-spin-button {
    margin-left: 8px;
  }

  &:hover {
    border-color: #56ccf2;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(24, 144 ,255, 0.2);
  }
`

Input.propTypes = {
  value: PropTypes.string
}

export default Input
