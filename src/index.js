import Inferno from 'inferno'
require('inferno-devtools')
import ApolloClient from 'apollo-client'
import { ApolloProvider as Provider } from 'react-apollo'
import App from './App'
import './index.css'

const client = new ApolloClient()

Inferno.render(
  <Provider client={ client }>
    <App />
  </Provider>,
  document.getElementById('app')
)
