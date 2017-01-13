import Inferno from 'inferno'
import { connect } from 'inferno-redux'

const mapStateToProps = ({ posts }) => ({ posts })

const Posts = ({ posts = [] }) => (
  <div id="posts">
    <ul>
      { posts.map(p => (
        <li>{ p.author }: { p.title } (+{ p.votes })</li>
      )) }
    </ul>
  </div>
)

export default connect(mapStateToProps)(Posts)
