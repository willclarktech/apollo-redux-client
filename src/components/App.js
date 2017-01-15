import Inferno from 'inferno'
import Component from 'inferno-component'
import Logo from './logo'
import Posts from './posts'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="320" height="80"/>
        </div>
        <Posts />
      </div>
    )
  }
}

export default App
