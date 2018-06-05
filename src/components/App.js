import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {injectGlobal, ThemeProvider} from 'styled-components'

import {HomePage} from 'components'
import theme from './themes/default'

injectGlobal`
  body {
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    margin: 30px;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
