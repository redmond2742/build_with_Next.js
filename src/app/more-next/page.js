import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';
import CodeBlock from '../../../components/CodeBlock';

//Vercel templates: https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=deploy-template-on-vercel-cta&utm_campaign=homepage-new
// Blog starter templates



export default function Routing() {
    const sampleCode = `// Example configuration for NextAuth.js in [...nextauth].js
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
    `
  return (
    <Layout>
          <h2>More Next.js</h2>
          Awesome lists are awesome. The <a href="https://github.com/unicodeveloper/awesome-nextjs">Awesome Next.js</a> list is a curated list of great projects related to Next.js. It includes starter templates, plugins, tools, and more. Here are some of the top projects on the list:
             <h3>Authentication in Next.js with NextAuth.js</h3>
                  <p>
                    Next.js can be paired with various authentication solutions. For a full-featured system, many developers use NextAuth.js.
                  </p>
                  <p>
                    NextAuth.js integrates with Next.js to support providers like Google, Facebook, GitHub, and more.
                  </p>
                 

                  <div className="p-10">
                              <CodeBlock code={sampleCode} language="javascript" />
                            </div>
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