import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Bubble} from 'components'

const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  margin: 5px 0 ;

  > span {
    color: gray;
    display: block;
    text-align: right;
    width: 28px;
  }

  span + div {
    margin-left: 10px;
  }
  div + div {
    margin-left: 8px;
  }
`

class Options extends React.Component {
  shouldComponentUpdate(nextProps) {
    const {selected} = this.props
    return selected.length !== nextProps.selected.length
  }
  render() {
    const {no, selected, values, onClick} = this.props
    const click = value => () => onClick(value)
    const restBubble = (value, index) => (
      <Bubble key={index} onClick={click(value)}>
        {value}
      </Bubble>
    )
    const selectedBubble = (value, index) => {
      const isSelected = selected.includes(value)
      return (
        <Bubble key={index} selected={isSelected} dashed={!isSelected} onClick={click(value)}>
          {value}
        </Bubble>
      )
    }
    const bubble = selected.length ? selectedBubble : restBubble
    const orderNo = no && <span>{no}</span>
    return (
      <Wrapper>
        {orderNo}{values.map(bubble)}
      </Wrapper>
    )
  }
}

Options.propTypes = {
  onClick: PropTypes.func,
  no: PropTypes.number,
  selected: PropTypes.array,
  values: PropTypes.array
}

Options.defaultProps = {
  onClick: () => {},
  selected: [],
  values: []
}

export default Options
