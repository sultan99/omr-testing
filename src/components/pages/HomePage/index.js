import React from 'react'
import {Options} from 'components'

class HomePage extends React.Component {
  constructor() {
    super()
    const questions = []
    for (let i = 0; i < 100; i ++) {
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
    return (
      <div>
        {this.state.questions.map(eachOption)}
      </div>
    )
  }
}

export default HomePage
