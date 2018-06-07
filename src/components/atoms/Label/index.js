import PropTypes from 'prop-types'
import styled from 'styled-components'
import {font} from 'styled-theme'

const Label = styled.label`
  color: #828282;
  font-family: ${font(`primary`)};
  font-size: 20px;
  user-select: none;
`

Label.propTypes = {
  children: PropTypes.node
}

export default Label
