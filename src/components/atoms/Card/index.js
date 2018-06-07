import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {font} from 'styled-theme'

const Head = styled.div`
  align-items: center;
  display: flex;
  background-color: #fcfcfc;
  justify-content: space-between;
  padding: 30px 60px;

  > div:last-child {
    min-width: 200px;
  }
`
const Caption = styled.div`
  font-family: ${font(`primary`)};
  font-size: 34px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const Body = styled.div`
  background-color: white;
  font-size: 18px;
  padding: 20px 60px;
`
const Wrapper = styled.div`
  box-shadow: rgba(0,0,0,0.10) 0px 1px 4px;
  padding: 0;
`

const Card = ({title, extra, children, ...props}) => (
  <Wrapper {...props}>
    <Head>
      <Caption>{title}</Caption>
      <div>{extra}</div>
    </Head>
    <Body>{children}</Body>
  </Wrapper>
)

Card.propTypes = {
  extra: PropTypes.node,
  title: PropTypes.string
}

export default Card
