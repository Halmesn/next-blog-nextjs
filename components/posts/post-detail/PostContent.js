import ReactMarkdown from 'react-markdown';
import styles from './PostContent.module.css';
import PostHeader from './PostHeader';

export default function PostContent() {
  return (
    <article className={styles.content}>
      <PostHeader />
      <ReactMarkdown></ReactMarkdown>
    </article>
  );
}
