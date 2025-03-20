import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';

export default function Routing() {
  return (
    <Layout>
      <h2>File-Based Routing in Next.js</h2>
      <p>
        Next.js uses a file-based routing system. Each folder in the <code>app</code> directory automatically becomes a route.
      </p>
      <p>
        For example:
      </p>
      <ul>
        <li><code>app/page.js</code> → Home page (<code>/</code>)</li>
        <li><code>app/about/page.js</code> → About page (<code>/about</code>)</li>
      </ul>
      <p>
        This makes building navigation in your app simple and intuitive. Note: Before Next.js 13, you defined the routes in pages/about.js structure.
      </p>
      <Quiz
        question="Where are the routes defined in a Next.js application?"
        options={[
          "In the components folder",
          "In the app folder",
          "In the public folder",
          "In the styles folder"
        ]}
        correctAnswer={1}
        explanation="Next.js uses file-based routing; each file in the pages folder becomes a route."
      />
    </Layout>
  );
}
