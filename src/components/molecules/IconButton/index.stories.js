import React from 'react'
import {IconButton, Panels} from 'components'
import {storiesOf} from '@storybook/react'

const {ButtonPanel} = Panels

storiesOf(`IconButton`, module)
  .add(`No label`, () =>
    <IconButton icon="save" primary/>
  )
  .add(`Export`, () =>
    <IconButton icon="export" primary>Export</IconButton>
  )
  .add(`Wizard`, () =>
    <IconButton icon="wizard">Wizard</IconButton>
  )
  .add(`Responsive`, () =>
    <ButtonPanel>
      <IconButton icon="save" primary>Save</IconButton>
      <IconButton icon="export">Export</IconButton>
    </ButtonPanel>
  )
