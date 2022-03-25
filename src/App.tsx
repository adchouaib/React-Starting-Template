import AppContainer from './components/Container/Container'

//import redux tools
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'

//import react Router
import { BrowserRouter } from 'react-router-dom';

//importing scss file
import './App.scss';

//store initialisation
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App