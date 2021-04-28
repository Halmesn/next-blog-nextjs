import FeaturedPosts from 'components/home/FeaturedPosts';
import PostGrid from 'components/posts/PostGrid';
import HeroSection from 'components/home/HeroSection';
import { getFeaturedPosts } from 'utilities/getPosts';

export default function Home({ featuredPosts }) {
  return (
    <>
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
