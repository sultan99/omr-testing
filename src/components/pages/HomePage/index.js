import React from 'react'
import {Options, Card, Column, IconButton, Panels} from 'components'

const {ButtonPanel, ColumnPanel} = Panels

const extra = () => (
  <ButtonPanel>
    <IconButton icon="export" breakpoint={930}>Export</IconButton>
    <IconButton icon="wizard" breakpoint={830}>Genrate</IconButton>
    <IconButton icon="save" breakpoint={730} primary>Save</IconButton>
  </ButtonPanel>
)

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
      <Options
        key={index}
        no={index + 1}
        selected={selected}
        values={values}
        onClick={this.onClick(index)}
      />
    )
    const options = this.state.questions.map(eachOption)
    const widths = [`280px`, `325px`]
    return (
      <Card title="Test generator" extra={extra()} style={{minWidth: `480px`}}>
        <ColumnPanel>
          <Column widths={widths}>
            {options.slice(0, 30)}
          </Column>
          <Column widths={widths}>
            {options.slice(30, 60)}
          </Column>
          <Column widths={widths}>
            {options.slice(60, 90)}
          </Column>
          <Column widths={widths}>
            {options.slice(90, 120)}
          </Column>
        </ColumnPanel>
      </Card>
    )
  }
}

export default HomePage
