import posts from '../data/posts';
import PostList from '../components/post-list';

const Homepage = () => (
  <div className="container">
    <PostList posts={posts} />
  </div>
);

export default Homepage;
