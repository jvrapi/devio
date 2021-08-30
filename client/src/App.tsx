import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { OrdersContextProvider } from './contexts/OrdersContext'
import { Kitchen } from './pages/Kitchen'
import { Waiter } from './pages/Waiter'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import light from './styles/themes/light'
import 'react-toastify/dist/ReactToastify.min.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <OrdersContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/waiter" component={Waiter} />
          </Switch>
        </OrdersContextProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  )
}

export default App
