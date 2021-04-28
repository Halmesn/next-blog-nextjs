import styles from './PostGrid.module.css';
import PostItem from './PostItem';

export default function PostGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}
