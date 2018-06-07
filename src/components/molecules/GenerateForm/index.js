import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {IconButton, Modal, Label, Panels, Input} from 'components'

const {ButtonPanel} = Panels

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > input {
    margin: 0 0 15px 8px;
    width: 250px;
  }
`

class GenerateForm extends React.Component {
  constructor() {
    super()
    this.state = {
      columns: 4,
      options: 4,
      questions: 100
    }
  }
  onGenerate = () => {
    this.props.onClose()
    const {questions, options, columns} = this.state
    this.props.onGenerate(questions, options, columns)
  }
  onChange = name => event => {
    const {value} = event.target
    this.setState({[name]: parseInt(value, 10)})
  }
  modalFooter() {
    return (
      <ButtonPanel>
        <IconButton icon="wizard" primary onClick={this.onGenerate}>
          Generate
        </IconButton>
        <IconButton icon="cancel" danger onClick={this.props.onClose}>
          Cancel
        </IconButton>
      </ButtonPanel>
    )
  }
  render() {
    const {visible, onClose} = this.props
    const {questions, options, columns} = this.state
    return (
      <Modal
        title="Let's do it!"
        visible={visible}
        onClose={onClose}
        footer={this.modalFooter()}>
        <Wrapper>
          <Label>Number of questions</Label>
          <Input value={`${questions}`} onChange={this.onChange(`questions`)} type="number"/>
          <Label>Number of options</Label>
          <Input value={`${options}`} onChange={this.onChange(`options`)} type="number"/>
          <Label>Number of columns</Label>
          <Input value={`${columns}`} onChange={this.onChange(`columns`)} type="number"/>
        </Wrapper>
      </Modal>
    )
  }
}

GenerateForm.propTypes = {
  onGenerate: PropTypes.func,
  visible: PropTypes.bool
}

GenerateForm.defaultProps = {
  onGenerate: () => {},
  onClose: () => {}
}

export default GenerateForm
