import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button, GenerateForm} from 'components'

class GenerateFormWithState extends React.Component {
  constructor() {
    super()
    this.state = {visible: false}
  }
  show = () => {
    this.setState({visible: true})
  }
  close = () => {
    this.setState({visible: false})
  }
  generate(questions, options, columns) {
    console.info(questions, options, columns)
  }
  render() {
    const {visible} = this.state
    return (
      <div>
        <Button onClick={this.show}>Open generator</Button>
        <GenerateForm visible={visible} onGenerate={this.generate} onClose={this.close}/>
      </div>
    )
  }
}

storiesOf(`GenerateForm`, module)
  .add(`default`, () =>
    <GenerateFormWithState/>
  )
