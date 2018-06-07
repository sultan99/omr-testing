import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button, IconButton, Modal, Panels} from 'components'

const {ButtonPanel} = Panels

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
  footer() {
    return (
      <ButtonPanel>
        <IconButton icon="wizard" primary>Generate</IconButton>
        <IconButton icon="cancel" danger onClick={this.onClose}>Cancel</IconButton>
      </ButtonPanel>
    )
  }
  render() {
    const {visible} = this.state
    return [
      <Button onClick={this.showModal}>Show modal</Button>,
      <Modal
        title="Let's do it!"
        visible={visible}
        onClose={this.onClose}
        footer={this.footer()}
      >
        Куку
      </Modal>
    ]
  }
}

storiesOf(`Modal`, module)
  .add(`Default`, () =>
    <ModalWithState/>
  )
