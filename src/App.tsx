/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';

const App = () => {
  return (
    <div css={tw`bg-navy min-h-screen text-white`}>
      <Navbar />
      <main css={tw`px-[100px] max-w-5xl flex flex-col justify-center items-center mx-auto`}>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
