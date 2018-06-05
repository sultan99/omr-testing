import PropTypes from 'prop-types'
import styled from 'styled-components'

const Column = styled.div`
  align-content: flex-start;
  border: 1px dashed #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  width: ${props => props.width};
`

Column.propTypes = {
  width: PropTypes.string
}

const ColumnPanel = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width};
  justify-content: space-between;
`

ColumnPanel.propTypes = {
  width: PropTypes.string
}

export default {Column, ColumnPanel}
