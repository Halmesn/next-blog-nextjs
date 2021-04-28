import ReactMarkdown from 'react-markdown';
import styles from './PostContent.module.css';
import PostHeader from './PostHeader';

export default function PostContent({ post }) {
  const { content, title, image, slug } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
