import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// import { Container } from './styles';
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import light from './styles/themes/light'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
