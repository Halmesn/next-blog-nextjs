import styles from './FeaturedPosts.module.css';

export default function FeaturedPosts({ children }) {
  return (
    <div className={styles.latest}>
      <h2>Featured Posts</h2>
      {children}
    </div>
  );
}
