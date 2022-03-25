import React from 'react'
import AppContainer from './components/Container/Container'

//import redux tools
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'


//store initialisation
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App