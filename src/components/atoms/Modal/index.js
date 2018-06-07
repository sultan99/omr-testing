import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {font} from 'styled-theme'
import {Icon} from 'components'

const Head = styled.div`
  align-items: center;
  background-color: #4f4f4f;
  color: white;
  display: flex;
  font-family: ${font(`primary`)};
  font-size: 25px;
  height: 90px;
  justify-content: space-between;
  padding: 0 30px;
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
  padding: 50px 30px;
  width: auto;
  flex-grow: 1;
`
const Footer = styled.div`
  background-color: #fcfcfc;
  padding: 0 30px;
  display: flex;
  height: 115px;
  align-items: center;
  width: auto;
  justify-content: flex-end;
`
const Window = styled.div`
  background-color: white;
  height: 550px;
  width: 600px;
  display: flex;
  flex-direction: column;
`
const Mask = styled.div`
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

class Modal extends React.Component {
  render() {
    const {title, children, footer, onClose, visible} = this.props
    return visible && (
      <Mask>
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
