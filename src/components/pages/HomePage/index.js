import React from 'react'
import {Options, Card, Column, IconButton, GenerateForm, Panels, Spinner} from 'components'

const {ButtonPanel, ColumnPanel} = Panels

function download(data, filename, type) {
  const file = new Blob([data], {type})
  if (window.navigator.msSaveOrOpenBlob) // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename)
  else {
    const a = document.createElement(`a`)
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    setTimeout(function () {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisibleModal: false,
      loading: true,
      numberColumns: 4,
      options: [],
      optionValues: [],
      renderData: false
    }
  }
  componentDidMount() {
    const getItem = name => JSON.parse(localStorage.getItem(name))
    this.setState({
      loading: true,
      numberColumns: getItem(`numberColumns`) || 4,
      options: getItem(`options`) || [],
      optionValues: getItem(`optionValues`) || [`A`, `B`, `C`, `D`],
      renderData: true
    }, this.stopLoading)
  }
  stopLoading() {
    setTimeout(() => this.setState({loading: false}), 1000 / 60)
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
    const after = () => {
      this.save()
      this.stopLoading()
    }
    const before = () => {
      const options = []
      const optionValues = []
      for (let i = 0; i < numberQuestions; i ++) {
        options.push([])
      }
      for (let i = 0; i < numberOptions; i ++) {
        optionValues.push(String.fromCharCode(65 + i))
      }
      this.setState({
        numberColumns,
        options,
        optionValues,
        renderData: true
      }, after)
    }
    this.setState(
      {isVisibleModal: false, loading: true, renderData: false},
      () => setTimeout(before, 1000 / 60)
    )
  }
  exportData = () => {
    const data = this.state.options
      .map((values, index) => `${index + 1}: ${values.sort().join(``)}`)
      .join(`\r\n`)
    download(data, `results.txt`, `text`)
  }
  save = () => {
    const {options, optionValues, numberColumns} = this.state
    const setItem = (name, value) => localStorage.setItem(name, JSON.stringify(value))
    setItem(`options`, options)
    setItem(`optionValues`, optionValues)
    setItem(`numberColumns`, numberColumns)
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
    const SPAN_WIDTH = 35 // span widht of questions' orderNo
    const result = []
    const {numberColumns, options, optionValues} = this.state
    const size = Math.ceil(options.length / numberColumns)
    const min = SPAN_WIDTH + optionValues.length * 50
    const widths = [`${min}px`, `${min + 10}px`]
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
    const {isVisibleModal, loading, renderData} = this.state
    return (
      <Card title="Test generator" extra={this.cardExtra()} style={{minWidth: `480px`}}>
        <ColumnPanel>
          {renderData && !loading && this.getColumns()}
        </ColumnPanel>
        <GenerateForm
          visible={isVisibleModal}
          onGenerate={this.generate}
          onClose={this.closeModal}
        />
        <Spinner visible={loading}>Please wait...</Spinner>
      </Card>
    )
  }
}

export default HomePage
