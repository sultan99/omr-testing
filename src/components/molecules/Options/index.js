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
    width: 35px;
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
  selectedBubble() {
    const {selected, onClick} = this.props
    const click = value => () => onClick(value)
    return (value, index) => {
      const isSelected = selected.includes(value)
      return (
        <Bubble key={index} selected={isSelected} dashed={!isSelected} onClick={click(value)}>
          {value}
        </Bubble>
      )
    }
  }
  restBubble() {
    const {onClick} = this.props
    return (value, index) => (
      <Bubble key={index} onClick={() => onClick(value)}>
        {value}
      </Bubble>
    )
  }
  render() {
    const {no, selected, values} = this.props
    const bubbles = selected.length ? this.selectedBubble() : this.restBubble()
    const orderNo = no && <span>{no}</span>
    return (
      <Wrapper>
        {orderNo}{values.map(bubbles)}
      </Wrapper>
    )
  }
}

Options.propTypes = {
  no: PropTypes.number,
  onClick: PropTypes.func,
  selected: PropTypes.array,
  values: PropTypes.array
}

Options.defaultProps = {
  onClick: () => {},
  selected: [],
  values: []
}

export default Options
