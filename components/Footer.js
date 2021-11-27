import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/about">
        <a>About this project</a>
      </Link>
    </footer>
  );
}
