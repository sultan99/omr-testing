import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0.1; }
  to { opacity: 1; }
`
const Mask = styled.div`
  animation: ${fadeIn} ${props => props.fade}s ease;
  align-items: center;
  background-color: #373737;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

Mask.propTypes = {
  fade: PropTypes.string
}

Mask.defaultProps = {
  fade: `0s`
}

export default Mask
