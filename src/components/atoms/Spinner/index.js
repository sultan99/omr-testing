import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import {font} from 'styled-theme'
import {Icon, Mask} from 'components'

const rotating = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Island = styled.div`
  background-color: white;
  display: inline-flex;
  padding: 20px 40px;
  font-family: ${font(`primary`)};
  font-size: 18px;
  align-items: center;

  > span:first-child {
    animation: ${rotating} 0.9s linear infinite;
    height: 22px;
    margin-right: 10px;
    width: 22px;
  }
`

const Spinner = ({visible, children}) => visible ? (
  <Mask>
    <Island>
      <Icon type="spinner"/>
      {children}
    </Island>
  </Mask>
) : null

Spinner.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool
}

Spinner.defaultProps = {
  visible: true
}

export default Spinner
