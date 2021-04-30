import FeaturedPosts from 'components/home/FeaturedPosts';
import PostGrid from 'components/posts/PostGrid';
import HeroSection from 'components/home/HeroSection';
import { getFeaturedPosts } from 'utilities/getPosts';
import Head from 'next/head';

export default function Home({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Adrian' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <HeroSection />
      <FeaturedPosts>
        <PostGrid posts={featuredPosts} />
      </FeaturedPosts>
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { featuredPosts } };
}
