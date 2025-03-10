import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';

export default function Routing() {
  return (
    <Layout>
      <h2>File-Based Routing in Next.js</h2>
      <p>
        Next.js uses a file-based routing system. Each file in the <code>pages</code> directory automatically becomes a route.
      </p>
      <p>
        For example:
      </p>
      <ul>
        <li><code>pages/index.js</code> → Home page (<code>/</code>)</li>
        <li><code>pages/about.js</code> → About page (<code>/about</code>)</li>
      </ul>
      <p>
        This makes building navigation in your app simple and intuitive.
      </p>
      <Quiz
        question="Where are the routes defined in a Next.js application?"
        options={[
          "In the components folder",
          "In the pages folder",
          "In the public folder",
          "In the styles folder"
        ]}
        correctAnswer={1}
        explanation="Next.js uses file-based routing; each file in the pages folder becomes a route."
      />
    </Layout>
  );
}
