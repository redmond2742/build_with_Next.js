"use client";

import React, { useState } from 'react';

const SuggestedPrompts = ({ topic }) => {
  const promptsMap = {
    "Next.js": [
        "Explain the different ways to fetch data in Next.js, including SSR, SSG, ISR, and client-side fetching.",
        "What are the main differences between Next.js and Gatsby? When would you choose one over the other for a project?",
        "Explain what Next.js is, why it was created, and how it improves upon React for web development.",
        "Predict the future of Next.js based on current trends in web development. How will AI, edge computing, and advancements in serverless impact Next.js in the next five years?",
        "Guide me through building three progressively more complex Next.js apps, each designed to teach core fundamentals step by step. Start with a basic app to introduce file-based routing and components, then move to a data-fetching project using API routes and SSR/SSG, and finally, build a full-featured app with authentication, dynamic routes, and state management. Provide clear instructions, explanations, and best practices at each stage.",
       
      ],
    "API Routes": [
      "How do API routes in Next.js differ from traditional backend frameworks?",
      "Can you explain the difference between `getServerSideProps` and API routes?",
      "Write a simple API route that fetches data from an external API and caches it.",
    ],
    "SSR vs SSG": [
      "When should you use Server-Side Rendering (SSR) over Static Site Generation (SSG)?",
      "Explain how Next.js pre-renders pages using SSG and ISR.",
      "Can you write a simple Next.js page using SSG with `getStaticProps`?",
    ],
  };

  const [prompts, setPrompts] = useState(promptsMap[topic] || []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-3">Suggested AI Prompts:</h3>
      <ul className="list-disc list-inside space-y-2">
        {prompts.map((prompt, index) => (
          <li key={index} className="text-gray-300">{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedPrompts;
