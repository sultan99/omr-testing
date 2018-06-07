import React from 'react'
import {storiesOf} from '@storybook/react'
import {Input} from 'components'

storiesOf(`Input`, module)
  .add(`Text`, () =>
    <Input/>
  )
  .add(`Numbers`, () =>
    <Input type="number"/>
  )
