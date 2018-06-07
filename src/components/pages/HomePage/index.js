import React from 'react'
import {Options, Card, Column, IconButton, Modal, Panels, Input} from 'components'

const {ButtonPanel, ColumnPanel} = Panels

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisibleModal: false,
      numberColumns: 4,
      options: [],
      optionValues: [`A`, `B`, `C`, `D`]
    }
  }
  showModal = () => {
    this.setState({isVisibleModal: true})
  }
  closeModal = () => {
    this.setState({isVisibleModal: false})
  }
  selectBubble = index => value => {
    const {options} = this.state
    const item = options[index]
    const remove = () => item.filter(v => v !== value)
    const append = () => [value, ...item]
    const hasItem = item.includes(value)
    const selected = hasItem ? remove() : append()
    options[index] = selected
    this.setState({options})
  }
  generate = (numberQuestions, numberOptions, numberColumns) => {
    const options = []
    const optionValues = []
    for (let i = 0; i < numberQuestions; i ++) {
      options.push([])
    }
    for (let i = 0; i < numberOptions; i ++) {
      optionValues.push(String.fromCharCode(65 + i))
    }
    this.setState({
      isVisibleModal: false,
      numberColumns,
      optionValues,
      options
    })
  }
  exportData = () => {
    console.log(`exporting`)
  }
  save = () => {
    console.log(`saving`)
  }
  cardExtra() {
    return (
      <ButtonPanel>
        <IconButton icon="export" breakpoint={930} onClick={this.exportData}>
          Export
        </IconButton>
        <IconButton icon="wizard" breakpoint={830} onClick={this.showModal}>
          Genrate
        </IconButton>
        <IconButton icon="save" breakpoint={730} primary onClick={this.save}>
          Save
        </IconButton>
      </ButtonPanel>
    )
  }
  modalBody() {
    return (
      <div>
        <Input placeholder="Number of questions" type="number"/>
        <Input placeholder="Number of columns" type="number"/>
        <Input placeholder="Number of options" type="number"/>
      </div>
    )
  }
  modalFooter() {
    const onGenerate = () => this.generate(400, 5, 4)
    return (
      <ButtonPanel>
        <IconButton icon="wizard" primary onClick={onGenerate}>
          Generate
        </IconButton>
        <IconButton icon="cancel" danger onClick={this.closeModal}>
          Cancel
        </IconButton>
      </ButtonPanel>
    )
  }
  getOptions(offset, last) {
    const {options, optionValues} = this.state
    const eachOption = (selected, index) => (
      <Options
        key={optionValues + index + offset}
        no={index + offset + 1}
        selected={selected}
        values={optionValues}
        onClick={this.selectBubble(index + offset)}
      />
    )
    return options.slice(offset, last).map(eachOption)
  }
  getColumns() {
    const result = []
    const {numberColumns, options} = this.state
    const widths = [`280px`, `325px`]
    const size = Math.ceil(options.length / numberColumns)
    for (let i = 0; i < numberColumns; i ++) {
      const offset = i * size
      const last = i === numberColumns - 1 ? options.length : offset + size
      result.push(
        <Column key={i} widths={widths}>
          {this.getOptions(offset, last)}
        </Column>
      )
    }
    return result
  }
  render() {
    const {isVisibleModal} = this.state
    return (
      <Card title="Test generator" extra={this.cardExtra()} style={{minWidth: `480px`}}>
        <ColumnPanel>
          {this.getColumns()}
        </ColumnPanel>
        <Modal
          title="Let's do it!"
          visible={isVisibleModal}
          onClose={this.closeModal}
          footer={this.modalFooter()}>
          {this.modalBody()}
        </Modal>
      </Card>
    )
  }
}

export default HomePage
