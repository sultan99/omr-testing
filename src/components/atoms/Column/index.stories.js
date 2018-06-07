import React from 'react'
import {storiesOf} from '@storybook/react'
import {Column} from 'components'

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
