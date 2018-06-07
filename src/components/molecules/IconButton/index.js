import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp, prop} from 'styled-tools'
import {Icon, Button} from 'components'

const StyledButton = styled(Button)`
  box-sizing: border-box;
  flex: 0 0 2.5em;
  max-width: ${props => props.hasText ? `100%` : `2.5em`};
  padding: ${ifProp(`hasText`, `0 1.5em`, 0)};
  width: ${ifProp(`hasText`, `auto`, `2.5em`)};

  ${ifProp(`responsive`, css`
    @media screen and (max-width: ${prop(`breakpoint`)}px) {
      flex: 0 !important;
      padding: 0 0.8em;
      width: auto;
    }
  `)}
`
const Text = styled.span`
  padding: 4px 5px 0 5px;
  @media screen and (max-width: ${prop(`breakpoint`)}px) {
    display: ${ifProp(`responsive`, `none !important`)};
  }
`
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`
const StyledIcon = styled(Icon)`
  flex: none;
`

const IconButton = ({icon, children, ...props}) => {
  const {breakpoint, right, responsive, height} = props
  const iconElement = <StyledIcon height={height ? height / 2.5 : undefined} type={icon} />

  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {right || iconElement}
        {children &&
          <Text responsive={responsive} breakpoint={breakpoint}>
            {children}
          </Text>
        }
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  breakpoint: PropTypes.number,
  children: PropTypes.node,
  height: PropTypes.number,
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  right: PropTypes.bool
}

IconButton.defaultProps = {
  breakpoint: 420,
  responsive: true
}

export default IconButton
