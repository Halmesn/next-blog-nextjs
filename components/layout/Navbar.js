import styles from './Navbar.module.css';
import Logo from 'components/ui/Logo';

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
