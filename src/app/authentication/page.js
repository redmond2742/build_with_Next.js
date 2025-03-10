import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';

export default function Authentication() {
  return (
    <Layout>
      <h2>Authentication in Next.js</h2>
      <p>
        Next.js can be paired with various authentication solutions. For a full-featured system, many developers use NextAuth.js.
      </p>
      <p>
        NextAuth.js integrates with Next.js to support providers like Google, Facebook, GitHub, and more.
      </p>
      <pre style={{ background: '#131413', padding: '10px', borderRadius: '4px' }}>
{`// Example configuration for NextAuth.js in [...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ... additional providers
  ],
});
`}
      </pre>
      <p>
        This example shows a basic setup of NextAuth.js. Authentication can be implemented on both the client and server side in Next.js.
      </p>
      <Quiz
        question="Which package is commonly used for authentication in Next.js?"
        options={["Passport.js", "NextAuth.js", "Firebase Auth", "Auth0"]}
        correctAnswer={1}
        explanation="NextAuth.js is a popular choice specifically designed for authentication in Next.js apps."
      />
    </Layout>
  );
}
