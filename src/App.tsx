/** @jsxImportSource @emotion/react */
import About from 'components/About';
import Contact from 'components/Contact';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Project from 'components/Project';
import { createClient, Entry } from 'contentful';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const App = () => {
  const [projects, setProjects] = useState<Entry<any>[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : '';
  }, [open]);

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
    <div css={tw`bg-navy min-h-screen text-white max-w-[screen] laptop:()`}>
      <Navbar open={open} toggle={() => setOpen(!open)} />
      <main css={tw`mx-4 max-w-5xl flex flex-col laptop:(px-[100px] justify-center mx-auto)`}>
        <Hero />
        <About />
        <Project data={projects} />
        <Contact />
      </main>
    </div>
  );
};

export default App;
