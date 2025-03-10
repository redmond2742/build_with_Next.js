
"use client";
import { useState } from 'react';
import Layout from '../../../components/Layout';
import Quiz from '../../../components/Quiz';

function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>This is a simple React component with state.</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default function ComponentsDemo() {
  return (
    <Layout>
      <h2>React Components in Next.js</h2>
      <p>
        Next.js uses React under the hood. Components are the building blocks of your application.
        In the example below, you can interact with a simple component that demonstrates state management using <code>useState</code>.
      </p>
      <InteractiveComponent />
      <h3>Key Takeaways</h3>
      <ul>
        <li>Components encapsulate UI and behavior.</li>
        <li>You can manage state using hooks like <code>useState</code> and <code>useEffect</code>.</li>
        <li>Components can be reused across your pages.</li>
      </ul>
      <Quiz
        question="Which hook is used for state management in React?"
        options={["useState", "useEffect", "useContext", "useReducer"]}
        correctAnswer={0}
        explanation="The useState hook is used for state management in functional components."
      />
    </Layout>
  );
}
