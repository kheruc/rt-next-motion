import Link from 'next/link';
import posts from '../../data/posts';
import PostInfo from '../../components/post-info';

const Post = ({ post }) => (
  <div className="container post">
    <img src={`/static/images/${post.id}.jpg`} />

    <PostInfo post={post} />
    <p>{post.text}</p>

    <Link href="/">
      <a>Back to list</a>
    </Link>

    <style jsx>{`
      .post {
        margin: 20px;
      }
      .post p {
        margin: 40px 0;
      }
    `}</style>
  </div>
);

Post.getInitialProps = ({ query }) => {
  let post = posts.find(post => post.id == query.post);

  return {
    post
  };
};

export default Post;
