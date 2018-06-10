import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button, Modal} from 'components'

class ModalWithState extends React.Component {
  constructor() {
    super()
    this.state = {visible: false}
  }
  showModal = () => {
    this.setState({visible: true})
  }
  onClose = () => {
    this.setState({visible: false})
  }
  render() {
    const {visible} = this.state
    return [
      <Button onClick={this.showModal}>Open modal</Button>,
      <Modal
        title="Let's do it!"
        visible={visible}
        onClose={this.onClose}>
      </Modal>
    ]
  }
}

storiesOf(`Modal`, module)
  .add(`Default`, () =>
    <ModalWithState/>
  )
