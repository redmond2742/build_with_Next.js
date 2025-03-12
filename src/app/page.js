import Layout from '../../components/Layout';
import Quiz from '../../components/Quiz';
import AIPrompts from '../../components/AIPrompts'; 
import Image from 'next/image';



export default function Home() {
  return (
    <Layout>
          <p>
      
     
      
      <a href="https://nextjs.org/">Next.js</a> offers a powerful and versatile set of tools that streamline the process of building modern, high-performance web applications. Designed with developer experience in mind, Next.js combines server-side rendering (SSR), static site generation (SSG), API routes, and automatic code splitting to optimize performance and scalability.
<br></br>
<br></br>
With built-in support for TypeScript, image optimization, and internationalization, Next.js allows developers to focus on building dynamic, SEO-friendly, and highly interactive applications without worrying about complex configurations. Whether you&apos;re creating a simple blog, an e-commerce platform, or a large-scale enterprise app, Next.js provides the flexibility and efficiency to bring your ideas to life with minimal effort.

     </p>
         <div className="hero">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Sklc_fQBmcs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
    
     <h1>
     A Brief History of Next.js
     </h1>
    <p>
     Next.js was created in 2016 by Guillermo Rauch, the founder of Vercel, a company that focuses on providing the best developer experience for building and deploying web applications. Next.js is designed to simplify the process of building React applications by providing a set of conventions and tools that developers could use out of the box. The main goal was to enhance the React ecosystem by making it easier to create server-rendered, SEO-friendly, and scalable web applications.
    <br></br>
    <br></br>
React has become the dominant JavaScript library for building user interfaces, but it lacked built-in support for server-side rendering (SSR) and static site generation (SSG). Next.js filled this gap by offering a simple way to implement SSR and SSG alongside client-side rendering (CSR). It quickly gained traction for its simplicity, flexibility, and powerful feature set, and today it has become one of the most popular frameworks for building React-based applications.
 </p>
     <h1>
     The Advantages of Next.js
     </h1>
     <ul>
          <li>
            <b>Server-Side Rendering (SSR):</b> React, by default, does not help websites be Search engine Optimized to load quickly. Next.js solves this problem with server-side rendering (SSR), which allows React components to be rendered on the server before being sent to the client. This leads to faster load times and better SEO performance, as search engines can easily index server-rendered content.
          </li>
          <li>
            <b>Static Site Generation (SSG):</b> In addition to SSR, Next.js offers static site generation (SSG), which allows developers to generate static HTML pages at build time. Similar to Jekyll, Gatsby, and Hugo for content that doesn&apos;t change often, Next.js can pre-build pages and serve them as static assets, resulting in blazing-fast load times. SSG is perfect for blogs, documentation sites, portfolios, and other content-driven applications.
          </li>
          <li>
            <b>Automatic Code Splitting:</b> Next.js automatically splits your code into smaller, more manageable chunks. This means that only the JavaScript needed for the current page is loaded, resulting in faster load times and better performance. It also helps in reducing the initial page load size, which can be crucial for mobile devices or slower internet connections.
          </li>
          <li>
            <b>API Routes:</b> With Next.js, you can easily create API routes within your application. These are serverless functions that handle HTTP requests, making it easy to build full-stack applications without the need for a separate backend. You can create RESTful APIs, handle form submissions, or integrate with third-party services, all within your Next.js app.
          </li>
          
          <li>
          <div className="flex items-start gap-4 max-w-2xl p-4">
          
            <b>File-Based Routing:</b> Next.js uses a file-based routing system, which means that the structure of your application’s URLs is determined by the folder structure of your files. This makes it incredibly easy to add new pages and organize your app’s content. No need to configure routes manually – just create a new file, and Next.js will automatically handle the routing for you.
            <Image
          src="/images/next.js-src_folder_tree.png"
          alt="Next.js Src Folder Tree Structure"
          width={150}
          height={250}
        />
      
      </div>
          </li>
         
          <li>
            <b>Fast Refresh and Hot Module Replacement (HMR):</b> The development experience in Next.js is second to none. With Fast Refresh and Hot Module Replacement (HMR), you can see changes in real-time without losing your application’s state. This speeds up development time and helps you iterate faster, making the process of building and debugging more enjoyable.
          </li>
 
          <li>
            <b>Built-in CSS and Sass Support:</b> Next.js comes with built-in support for CSS and Sass, allowing you to style your components with ease. You can import CSS files directly into your components or use CSS-in-JS solutions like styled-components or emotion. Next.js also supports CSS modules, enabling scoped styles for individual components.
          </li>
          <li>
            <b>Optimized for Performance:</b> Next.js comes with built-in features to optimize the performance of your web applications. From automatic image optimization to preloading resources, Next.js ensures that your app runs smoothly across all devices and networks, delivering an exceptional user experience.
            
            </li>
            
        </ul>

     <h1>
     Why Learn Next.js?
     </h1>
     <ol>
          <li>You’ll gain a deeper appreciation for React’s ecosystem and become a more well-rounded developer.</li>
          <li>You can easily create a front-end, back-end, and database in a single Next.js app, making it a great choice for building modern, full-featured applications.</li>
          <li>From its easy setup to its helpful error messages and fast refresh capabilities, Next.js makes the development process smooth and enjoyable.</li>
          <li>Next.js has a thriving community of developers and a robust ecosystem of plugins and tools.</li>
        </ol>

    <h1>Pop Quiz</h1>

  
      <Quiz
      title="Question 1"
        question="What is Next.js primarily used for?"
        options={[
          "Frontend development",
          "Backend development",
          "Full-stack React applications",
          "Mobile development"
        ]}
        correctAnswer={2}
        explanation="Next.js is primarily used for building full-stack React applications with features like SSR and SSG."
      />
       <Quiz
       title="Question 2"
          question="What is one of the main benefits of Server-Side Rendering (SSR) in Next.js?"
          options={[
            "Faster client-side navigation",
            "Improved SEO and faster initial load times",
            "Reduced server load",
            "Enhanced security"
          ]}
          correctAnswer={1}
          explanation="One of the main benefits of Server-Side Rendering (SSR) in Next.js is improved SEO and faster initial load times, as the content is rendered on the server before being sent to the client."
        />
        <Quiz
        title="Question 3"
          question="Which feature of Next.js allows you to generate static HTML pages at build time?"
          options={[
            "Client-Side Rendering (CSR)",
            "Server-Side Rendering (SSR)",
            "Static Site Generation (SSG)",
            "Dynamic Routing"
          ]}
          correctAnswer={2}
          explanation="Static Site Generation (SSG) is the feature of Next.js that allows you to generate static HTML pages at build time, resulting in faster load times and better performance for content that doesn&apos;t change often."
        />
              <Quiz
              title="Question 4"
          question="What is the primary benefit of using dynamic imports in Next.js?"
          options={[
            "Improved SEO",
            "Faster initial load times",
            "Reduced bundle size",
            "Enhanced security"
          ]}
          correctAnswer={2}
          explanation="The primary benefit of using dynamic imports in Next.js is reduced bundle size, as it allows you to load components only when they are needed, resulting in faster initial load times."
        />
        <Quiz
        title="Question 5"
          question="What does Incremental Static Regeneration (ISR) allow you to do in Next.js?"
          options={[
            "Generate static pages at runtime",
            "Update static content after the site has been built",
            "Render pages on the server for each request",
            "Automatically split code into smaller chunks"
          ]}
          correctAnswer={1}
          explanation="Incremental Static Regeneration (ISR) allows you to update static content after the site has been built by regenerating static pages at runtime without rebuilding the entire site."
        />
      </div>

          <h1> Go Deeper by Prompting AI </h1>
            <AIPrompts topic = "Next.js"/>

    </Layout>
  );
}
