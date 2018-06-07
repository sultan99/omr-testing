import styled from 'styled-components'

const ButtonPanel = styled.div`
  display: flex;

  button + button {
    margin-left: 20px;
  }
`
const ColumnPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default {ButtonPanel, ColumnPanel}
