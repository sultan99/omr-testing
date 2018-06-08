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
    const {questions, options, columns} = this.state
    this.props.onGenerate(questions, options, columns)
  }
  onChange = (name, max) => event => {
    const {value} = event.target
    if (value <= max) {
      this.setState({[name]: parseInt(value, 10)})
    }
  }
  onBlur = (name, min) => event => {
    const {value} = event.target
    if (value <= min) {
      this.setState({[name]: parseInt(min, 10)})
    }
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
    const props = (name, min, max) => ({
      value: `${this.state[name]}`,
      onChange: this.onChange(name, max),
      onBlur: this.onBlur(name, min),
      type: `number`,
      min: `${min}`,
      max: `${max}`
    })
    return (
      <Modal
        title="Let's do it!"
        visible={visible}
        onClose={onClose}
        footer={this.modalFooter()}>
        <Wrapper>
          <Label>Number of questions</Label>
          <Input {...props(`questions`, 1, 1000)}/>
          <Label>Number of options</Label>
          <Input {...props(`options`, 2, 5)}/>
          <Label>Number of columns</Label>
          <Input {...props(`columns`, 1, 5)}/>
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
