import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrdersContextProvider } from './contexts/OrdersContext'
// import { Container } from './styles';
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import light from './styles/themes/light'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <OrdersContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </OrdersContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
