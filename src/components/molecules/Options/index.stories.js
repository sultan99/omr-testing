import React from 'react'
import {Options} from 'components'
import {storiesOf} from '@storybook/react'

class OptionsWithState extends React.Component {
  constructor() {
    super()
    this.state = {selected: []}
  }
  onClick = value => {
    const remove = this.state.selected.filter(item => item !== value)
    const append = [value, ...this.state.selected]
    const hasItem = this.state.selected.includes(value)
    const selected = hasItem ? remove : append
    this.setState({selected})
  }
  render() {
    const {selected} = this.state
    const values = [`A`, `B`, `C`, `D`, `E`]
    return <Options no={998} selected={selected} values={values} onClick={this.onClick}/>
  }
}

storiesOf(`Options`, module)
  .add(`Default`, () =>
    <Options values={[`A`, `B`, `C`, `D`, `E`]}/>
  )
  .add(`Selected one`, () =>
    <Options selected={[`D`]} values={[`A`, `B`, `C`, `D`]}/>
  )
  .add(`Selected many`, () =>
    <Options selected={[`A`, `D`]} values={[`A`, `B`, `C`, `D`, `E`]}/>
  )
  .add(`No & with state`, () =>
    <OptionsWithState/>
  )
