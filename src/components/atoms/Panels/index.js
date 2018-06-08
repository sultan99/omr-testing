import styled from 'styled-components'

const ButtonPanel = styled.div`
  button + button {
    margin-left: 20px;
  }
`
const ColumnPanel = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 10px;
  }
`

export default {ButtonPanel, ColumnPanel}
