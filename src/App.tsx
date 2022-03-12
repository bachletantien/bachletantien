/** @jsxImportSource @emotion/react */
import About from 'components/About';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Project from 'components/Project';
import { createClient, Entry } from 'contentful';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const App = () => {
  const [projects, setProjects] = useState<Entry<any>[]>([]);

  useEffect(() => {
    (async () => {
      const client = createClient({
        space: process.env.REACT_APP_SPACE_ID || '',
        accessToken: process.env.REACT_APP_ACCESS_TOKEN || '',
      });

      try {
        const { items } = await client.getEntries({ content_type: 'portfolio' });
        setProjects(items);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div css={tw`bg-navy min-h-screen text-white`}>
      <Navbar />
      <main css={tw`px-[100px] max-w-5xl flex flex-col justify-center mx-auto`}>
        <Hero />
        <About />
        <Project data={projects} />
      </main>
    </div>
  );
};

export default App;
