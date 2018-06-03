import React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from 'components'

storiesOf(`Button`, module)
  .add(`Default`, () =>
    <Button>Default</Button>
  )
  .add(`Primary`, () =>
    <Button primary>Primary</Button>
  )
