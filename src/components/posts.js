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

const Post = ({ author, title, votes }) => (
  <tr>
    <td>{ author.name }:</td>
    <td><i>{ title }</i></td>
    <td>(+{ votes })</td>
    <td><button>Vote</button></td>
  </tr>
)

const Posts = ({ posts = [], loading, error }) =>
  loading
    ? 'Loading...'
    : error
      ? 'Error :('
      : (
        <div id="posts">
          <table>
            { loading
              ? 'Loading...'
              : posts.map(p => <Post { ...p } />)
            }
          </table>
        </div>
      )

export default connect(QueryPosts, {
  props: ({ data }) => data,
})(Posts)
