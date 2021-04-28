import styles from './Navbar.module.css';
import Logo from 'components/ui/Logo';

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

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
