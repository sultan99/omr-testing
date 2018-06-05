import React from 'react'
import styled from 'styled-components'
import {Options, Card, Column as ColumnSet, IconButton} from 'components'

const {Column, ColumnPanel} = ColumnSet

const extra = () => {
  const Panel = styled.div`
    button + button {
      margin-left: 20px;
    }
  `
  return (
    <Panel>
      <IconButton icon="wizard" breakpoint={900}>Genrate</IconButton>
      <IconButton icon="export" breakpoint={900}>Export</IconButton>
      <IconButton icon="save" breakpoint={700} primary>Save</IconButton>
    </Panel>
  )
}

class HomePage extends React.Component {
  constructor() {
    super()
    const questions = []
    for (let i = 0; i < 120; i ++) {
      questions.push([])
    }
    this.state = {
      questions
    }
  }
  onClick = index => value => {
    const item = this.state.questions[index]
    const remove = () => item.filter(v => v !== value)
    const append = () => [value, ...item]
    const hasItem = item.includes(value)
    const selected = hasItem ? remove() : append()
    this.state.questions[index] = selected

    this.setState({questions: this.state.questions})
  }
  render() {
    const values = [`A`, `B`, `C`, `D`, `E`]
    const eachOption = (selected, index) => (
      <div key={`opt-${index}`}>
        <Options
          no={index + 1}
          selected={selected}
          values={values}
          onClick={this.onClick(index)}
        />
        <br/>
      </div>
    )
    const options = this.state.questions.map(eachOption)
    const cardStyle = {minWidth: `820px`, maxWidth: `1500px`}
    return (
      <div>
        <Card title="Test generator" extra={extra()} style={cardStyle}>
          <ColumnPanel>
            <Column width="280px">
              {options.slice(0, 30)}
            </Column>
            <Column width="280px">
              {options.slice(30, 60)}
            </Column>
            <Column width="280px">
              {options.slice(60, 90)}
            </Column>
            <Column width="280px">
              {options.slice(90, 120)}
            </Column>
          </ColumnPanel>
        </Card>
      </div>
    )
  }
}

export default HomePage
