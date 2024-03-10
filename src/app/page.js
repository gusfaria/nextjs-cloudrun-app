import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://www.gusfaria.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Gustavo Faria.
          </a>
        </div>
      </div>
    </main>
  );
}
