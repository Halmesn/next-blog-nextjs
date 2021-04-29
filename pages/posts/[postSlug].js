import PostContent from 'components/posts/post-detail/PostContent';
import { getPostData, getPostFiles } from 'utilities/getPosts';

export default function PostDetail({ post }) {
  return <PostContent post={post} />;
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.postSlug);

  return {
    props: { post },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const allFiles = getPostFiles();
  const paths = allFiles
    .map((file) => file.replace(/\.md$/, ''))
    .map((slug) => {
      return {
        params: {
          slug,
        },
      };
    });

  return {
    paths,
    fallback: false,
    // fallback: 'blocking', show page when data fully loaded
  };
}
