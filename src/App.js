import Inferno from 'inferno'
import Component from 'inferno-component'
import Logo from './logo'
import Posts from './posts'
import './App.css'

const posts = [
  { title: 'some post 1', author: 'author 1', votes: 15 },
  { title: 'some post 2', author: 'author 2', votes: 15 },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="320" height="80"/>
        </div>
        <Posts posts={posts}/>
      </div>
    )
  }
}

export default App
