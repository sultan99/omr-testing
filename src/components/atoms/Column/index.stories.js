import React from 'react'
import {storiesOf} from '@storybook/react'
import {Column as ColumnSet} from 'components'

const {Column, ColumnPanel} = ColumnSet

storiesOf(`Column`, module)
  .add(`Default`, () =>
    <Column>
      <div>In hac habitasse platea dictumst.</div>
      <div>In hac habitasse platea dictumst.</div>
      <div>In hac habitasse platea dictumst.</div>
      <div>In hac habitasse platea dictumst.</div>
      <div>In hac habitasse platea dictumst.</div>
    </Column>
  )
  .add(`Width`, () =>
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
