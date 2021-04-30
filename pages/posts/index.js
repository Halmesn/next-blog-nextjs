import AllPosts from 'components/posts/AllPosts';
import PostGrid from 'components/posts/PostGrid';
import Head from 'next/head';
import { getAllPosts } from 'utilities/getPosts';

export default function Posts({ allPosts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>

      <AllPosts>
        <PostGrid posts={allPosts} />
      </AllPosts>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { allPosts } };
}
