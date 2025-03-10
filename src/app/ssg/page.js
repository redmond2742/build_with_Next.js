import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';
import AIPrompts from '../../../components/AIPrompts';


export default async function SSG() {
  const data = { message: "Hello from SSG!" };
  return (
    <Layout>
      <h2>Static Site Generation (SSG) in Next.js</h2>
      <p>
        SSG allows you to generate pages at build time. This is ideal for pages that don’t change often.
      </p>
      <p>
        In Next.js, export an async function called <code>getStaticProps</code> to fetch data at build time.
      </p>
      <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '4px' }}>
{`export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}`}
      </pre>

  

      <p>
        SSG is great for performance because the content is generated once and served as static files.
      </p>
      <Quiz
        question="When is SSG most appropriate in Next.js?"
        options={[
          "For pages that need real-time data",
          "For pages with static content",
          "For API routes",
          "For client-side only apps"
        ]}
        correctAnswer={1}
        explanation="SSG is best used for pages that have content that rarely changes."
      />
      <div style={{ marginTop: '1rem' }}>
        <h3>Fetched Data (for demo purposes):</h3>
        <pre style={{ background: '#e6e6e6', padding: '10px', borderRadius: '4px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      <AIPrompts topic = "SSR vs SSG"/>
    </Layout>
  );
}

