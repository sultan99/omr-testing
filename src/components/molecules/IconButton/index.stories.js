import React from 'react'
import styled from 'styled-components'
import {IconButton} from 'components'
import {storiesOf} from '@storybook/react'

const Panel = styled.div`
  button + button {
    margin-left: 15px;
  }
`

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
    <Panel>
      <IconButton icon="save" primary>Save</IconButton>
      <IconButton icon="export">Export</IconButton>
    </Panel>
  )
