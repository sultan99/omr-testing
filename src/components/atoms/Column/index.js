import PropTypes from 'prop-types'
import styled from 'styled-components'

const Column = styled.div`
  border: 1px dashed #f7f7f7;
  flex: 1;
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  padding: 15px;
  text-align: center;
`

Column.propTypes = {
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string
}

export default Column
