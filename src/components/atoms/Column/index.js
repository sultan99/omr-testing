import PropTypes from 'prop-types'
import styled from 'styled-components'

const Column = styled.div`
  border: 1px dashed #f7f7f7;
  flex: 1
  max-width: ${props => props.widths[1]};
  min-width: ${props => props.widths[0]};
  padding: 15px;
  text-align: center;
`

Column.propTypes = {
  widths: PropTypes.array
}

Column.defaultProps = {
  widths: []
}
export default Column
