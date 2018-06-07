import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button, Column, Panels} from 'components'

const {ButtonPanel, ColumnPanel} = Panels

storiesOf(`Panels`, module)
  .add(`ButtonPanel`, () =>
    <ButtonPanel>
      <Button>Default</Button>
      <Button primary>Primary</Button>
    </ButtonPanel>
  )
  .add(`ColumnPanel`, () =>
    <ColumnPanel>
      <Column width="210px">
        <div>Hi there!</div>
        <div>Hi there!</div>
        <div>Hi there!</div>
        <div>Hi there!</div>
      </Column>
      <Column width="210px">
        <div>Hi there!</div>
        <div>Hi there!</div>
        <div>Hi there!</div>
        <div>Hi there!</div>
      </Column>
    </ColumnPanel>
  )
