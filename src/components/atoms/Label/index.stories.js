import React from 'react'
import {storiesOf} from '@storybook/react'
import {Label} from 'components'

storiesOf(`Label`, module)
  .add(`Default`, () =>
    <Label>Some label</Label>
  )
