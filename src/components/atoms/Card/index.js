import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {font} from 'styled-theme'

const Head = styled.div`
  align-items: center;
  background-color: #fcfcfc;
  display: flex;
  font-size: 34px;
  justify-content: space-between;
  padding: 30px 60px;
`
const Body = styled.div`
  background-color: white;
  font-size: 18px;
  padding: 20px 60px;
`
const Wrapper = styled.div`
  box-shadow: rgba(0,0,0,0.10) 0px 1px 4px;
  font-family: ${font(`primary`)};
  padding: 0;
`

const Card = ({title, extra, children, ...props}) => (
  <Wrapper {...props}>
    <Head>
      <span>{title}</span>
      <span>{extra}</span>
    </Head>
    <Body>{children}</Body>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string,
  extra: PropTypes.node
}

export default Card
