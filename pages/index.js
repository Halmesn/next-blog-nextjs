import FeaturedPosts from 'components/home/FeaturedPosts';
import PostGrid from 'components/posts/PostGrid';
import HeroSection from 'components/home/HeroSection';

export default function Home({ featuredPosts }) {
  return (
    <>
      <HeroSection />
      <FeaturedPosts>{/* <PostGrid posts={featuredPosts}/> */}</FeaturedPosts>
    </>
  );
}
