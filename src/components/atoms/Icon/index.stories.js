import React from 'react'
import {storiesOf} from '@storybook/react'
import {Icon} from 'components'

storiesOf(`Icon`, module)
  .add(`Save`, () =>
    <Icon type="save" color="black"/>
  )
  .add(`Export`, () =>
    <Icon type="export" color="black"/>
  )
  .add(`Wizard`, () =>
    <Icon type="wizard" color="black"/>
  )
  .add(`Tick`, () =>
    <Icon type="tick" color="black"/>
  )
  .add(`Cancel`, () =>
    <Icon type="cancel" color="black"/>
  )
