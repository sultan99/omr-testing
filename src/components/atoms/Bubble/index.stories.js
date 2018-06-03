import React from 'react'
import {storiesOf} from '@storybook/react'
import {Bubble} from 'components'

storiesOf(`Bubble`, module)
  .add(`Default`, () =>
    <Bubble>A</Bubble>
  )
  .add(`Selected`, () =>
    <Bubble selected>A</Bubble>
  )
  .add(`Dashed`, () =>
    <Bubble dashed>A</Bubble>
  )
