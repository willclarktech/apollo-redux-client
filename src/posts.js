import Inferno from 'inferno'

export default ({ posts }) => (
  <div id="posts">
    <ul>
      { posts.map(p => (
        <li>{ p.author }: { p.title } (+{ p.votes })</li>
      )) }
    </ul>
  </div>
)
