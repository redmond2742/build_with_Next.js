import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';
import AIPrompts from '../../../components/AIPrompts';

export default function APIExample() {
  return (
    <Layout>
      <h2>API Routes in Next.js</h2>
      <p>
        Next.js allows you to create API endpoints by adding files to the <code>pages/api</code> directory.
      </p>
      <p>
        For example, a file at <code>pages/api/hello.js</code> can export a function that handles HTTP requests:
      </p>
      <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '4px' }}>
{`export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}`}
      </pre>
      <p>
        You can fetch data from these endpoints on the client or server side. This built-in API functionality makes it easy to build full-stack applications.
      </p>
      <Quiz
        question="Where do you create API routes in a Next.js app?"
        options={["pages/api", "pages/routes", "components/api", "public/api"]}
        correctAnswer={0}
        explanation="API routes are created in the pages/api directory."
      />
           <AIPrompts topic = "API Routes"/>
    </Layout>
  );
}
