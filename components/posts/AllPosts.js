import styles from './AllPosts.module.css';

export default function AllPosts({ children }) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      {children}
    </section>
  );
}
