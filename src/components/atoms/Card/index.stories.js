import React from 'react'
import {storiesOf} from '@storybook/react'
import {Card, IconButton, Panels} from 'components'

storiesOf(`Card`, module)
  .add(`Title`, () =>
    <Card title="Test generator">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce interdum varius odio ut bibendum. Aliquam erat volutpat.
        Aenean in commodo tellus, vel lacinia nisi.
        In hac habitasse platea dictumst.
        Donec feugiat diam sed sapien pharetra rutrum non ut lacus.
      </p>
    </Card>
  )
  .add(`Extra`, () => {
    const {ButtonPanel} = Panels
    const extra = () => (
      <ButtonPanel>
        <IconButton icon="wizard" breakpoint={1135}>Genrate</IconButton>
        <IconButton icon="export" breakpoint={1135}>Export</IconButton>
        <IconButton icon="save" primary>Save</IconButton>
      </ButtonPanel>
    )
    return (
      <Card title="Test generator" extra={extra()}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce interdum varius odio ut bibendum. Aliquam erat volutpat.
          Aenean in commodo tellus, vel lacinia nisi.
          In hac habitasse platea dictumst.
          Donec feugiat diam sed sapien pharetra rutrum non ut lacus.
        </p>
      </Card>
    )
  }
  )
