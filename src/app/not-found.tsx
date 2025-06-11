import Link from 'next/link';
import Layout from '../../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you requested could not be found.</p>
      <p>
        <Link href="/">Return Home</Link>
      </p>
    </Layout>
  );
}
