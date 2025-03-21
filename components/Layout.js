import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <h1 className="text-4xl font-bold leading-tight">Build With Next.js</h1>
<h2 className="text-lg font-normal text-gray-600 leading-none">Read, Quiz, and Build with Next.js</h2>


        <nav>
          <Link href="/">Home</Link>
          {' | '}
          <Link href="/components-demo">Components</Link>
          {' | '}
          <Link href="/routing">Routing</Link>
          {' | '}
          <Link href="/api-example">API Routes</Link>
          {' | '}
          <Link href="/deployment">Deployment</Link>
          {' | '}
          <Link href="/ssr">SSR</Link>
          {' | '}
          <Link href="/ssg">SSG</Link>
          {' | '}
          <Link href="/more-next">More Next.js</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2025 Build With Next.js</p>
      </footer>
    </div>
  );
}
