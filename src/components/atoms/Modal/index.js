import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import {font} from 'styled-theme'
import {Icon, Mask} from 'components'

const fadeIn = keyframes`
  from {
    opacity: 0.1;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
const Head = styled.div`
  align-items: center;
  background-color: #4f4f4f;
  color: white;
  display: flex;
  font-family: ${font(`primary`)};
  font-size: 25px;
  height: 90px;
  justify-content: space-between;
  padding: 0 50px;
  width: auto;

  > span:last-child {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`
const Body = styled.div`
  background-color: white;
  flex-grow: 1;
  padding: 50px;
  width: auto;
`
const Footer = styled.div`
  align-items: center;
  background-color: #fcfcfc;
  display: flex;
  height: 115px;
  justify-content: flex-end;
  padding: 0 50px;
  width: auto;
`
const Window = styled.div`
  animation: ${fadeIn} 0.3s ease;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 600px;
`

class Modal extends React.Component {
  render() {
    const {title, children, footer, onClose, visible} = this.props
    if (!visible) {
      return null
    }
    return (
      <Mask fade="0.3">
        <Window>
          <Head>{title}<Icon type="cancel" onClick={onClose}/></Head>
          <Body>{children}</Body>
          <Footer>{footer}</Footer>
        </Window>
      </Mask>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
  visible: PropTypes.bool
}

export default Modal
