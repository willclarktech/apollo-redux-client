import Inferno from 'inferno'
require('inferno-devtools')
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider as Provider } from 'react-apollo'
import App from './App'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  }),
})

Inferno.render(
  <Provider client={ client }>
    <App />
  </Provider>,
  document.getElementById('app')
)
