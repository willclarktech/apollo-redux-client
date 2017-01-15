import Inferno from 'inferno'
import { graphql as connect } from 'react-apollo'
import gql from 'graphql-tag'
import './posts.css'

const QueryPosts = gql`
  query QueryPosts {
    posts {
      title
      votes
      author {
        name
      }
    }
  }
`

const Posts = ({ data: { posts = [] } }) => (
  <div id="posts">
    <table>
      { posts.map(p => (
        <tr>
          <td>{ p.author.name }:</td>
          <td><i>{ p.title }</i></td>
          <td>(+{ p.votes })</td>
        </tr>
      )) }
    </table>
  </div>
)

export default connect(QueryPosts)(Posts)
