import Inferno from 'inferno'
import { graphql as connect } from 'react-apollo'
import gql from 'graphql-tag'

const MutationUpvotePost = gql`
  mutation UpvotePost($id: ID!) {
    dispatch(action: {
      type: UPVOTE_POST
      postId: $id
    }) {
      votes
    }
  }
`

const Post = ({
  id,
  author,
  title,
  votes,
  mutate,
}) => (
  <tr>
    <td>{ author.name }:</td>
    <td><i>{ title }</i></td>
    <td>(+{ votes })</td>
    <td><button onClick={() => mutate().then(({data}) => data)}>Vote</button></td>
  </tr>
)

export default connect(MutationUpvotePost)(props => console.log('PROPS', props) || Post(props))
