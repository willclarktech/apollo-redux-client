import Inferno from 'inferno'
import { Provider } from 'inferno-redux'
import store from './store'
import App from './App'
import './index.css'

Inferno.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
