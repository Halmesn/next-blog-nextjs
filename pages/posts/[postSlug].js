import PostContent from 'components/posts/post-detail/PostContent';
import { getAllPosts } from 'utilities/getPosts';

export default function PostDetail({ post }) {
  return <PostContent post={post} />;
}

export async function getServerSideProps({ params }) {
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === params.postSlug);

  return {
    props: { post },
  };
}
