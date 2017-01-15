import Inferno from 'inferno'
import { graphql as connect } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './post.js'
import './posts.css'

const QueryPosts = gql`
  query QueryPosts {
    posts {
      id
      title
      votes
      author {
        name
      }
    }
  }
`

const Posts = ({ data: { posts = [], loading, error } }) =>
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

export default connect(QueryPosts)(Posts)
