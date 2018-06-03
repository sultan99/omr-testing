import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ifProp, prop} from 'styled-tools'
import {Icon, Button} from 'components'

const StyledButton = styled(Button)`
  max-width: ${props => props.hasText ? `100%` : `2.5em`};
  width: ${ifProp(`hasText`, `auto`, `2.5em`)};
  padding: ${ifProp(`hasText`, `0 1.5em`, 0)};
  flex: 0 0 2.5em;
  box-sizing: border-box;

  ${ifProp(`responsive`, css`
    @media screen and (max-width: ${prop(`breakpoint`)}px) {
      width: auto;
      flex: 0 !important;
      padding: 0 0.8em;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
          <Text className="text" responsive={responsive} breakpoint={breakpoint}>
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
