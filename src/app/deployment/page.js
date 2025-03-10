import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';

export default function Deployment() {
  return (
    <Layout>
      <h2>Deploying Your Next.js App</h2>
      <p>
        Once you’re ready to share your app, deploying it is easy. The recommended platform for Next.js is Vercel.
      </p>
      <h3>Steps to Deploy on Vercel:</h3>
      <ol>
        <li>Push your code to GitHub, GitLab, or Bitbucket.</li>
        <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> and import your repository.</li>
        <li>Follow the prompts to deploy your app.</li>
      </ol>
      <p>
        Your Next.js app is now live! You can also deploy on other platforms like Netlify or AWS.
      </p>
      <Quiz
        question="Which platform is recommended for deploying Next.js apps?"
        options={["Heroku", "Vercel", "Netlify", "AWS"]}
        correctAnswer={1}
        explanation="Vercel, created by the Next.js team, is the recommended platform for deployment."
      />
    </Layout>
  );
}
