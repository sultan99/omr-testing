import React from 'react'
import {storiesOf} from '@storybook/react'
import {Spinner} from 'components'

storiesOf(`Spinner`, module)
  .add(`Default`, () =>
    <Spinner>Loading...</Spinner>
  )
