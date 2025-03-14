import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';
import CodeBlock from '../../../components/CodeBlock';

export default async function SSR() {
  const jsonData = '{ message: "Hello from SSR!" }';
  const sampleCode = `export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}`;

  return (
    <Layout>
      <h2>Server-Side Rendering (SSR) in Next.js</h2>
      <p>
        SSR allows you to render a page on each request, providing up-to-date data and improved SEO.
      </p>
      <p>
        In Next.js, export an async function called <code>getServerSideProps</code> from your page to fetch data on each request.
      </p>
     
        <div className="p-10">
            <CodeBlock code={sampleCode} language="javascript" />
          </div>
    
      <div style={{ marginTop: '1rem' }}>
        <h3>Fetched Data (for demo purposes):</h3>
    
        <div className="p-10">
            <CodeBlock code={jsonData} language="json" />
          </div>
        
      </div>
      <p>
        SSR is useful for pages that need dynamic, real-time data.
      </p>
      <Quiz
        question="What is the purpose of getServerSideProps in Next.js?"
        options={["Static generation", "Client-side rendering", "Server-side rendering", "API routing"]}
        correctAnswer={2}
        explanation="getServerSideProps is used for server-side rendering to fetch fresh data on every request."
      />
     
    </Layout>
  );
}


