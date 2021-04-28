import styles from './HeroSection.module.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/avatar.jpg"
          alt="an image showing Adrian"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Adrian</h1>
      <p>I built this simple blog when I was learning and practicing NextJs.</p>
    </section>
  );
}
