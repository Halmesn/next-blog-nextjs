import AllPosts from 'components/posts/AllPosts';
import PostGrid from 'components/posts/PostGrid';
import { getAllPosts } from 'utilities/getPosts';

export default function Posts({ allPosts }) {
  return (
    <AllPosts>
      <PostGrid posts={allPosts} />
    </AllPosts>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { allPosts } };
}
