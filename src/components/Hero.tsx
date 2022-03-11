/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';

// interface HeroProps {}

const Hero = () => {
  return (
    <div css={tw`h-screen flex flex-col justify-center`}>
      <span css={tw`font-mono text-green mb-1`}>Hi, my name is</span>
      <h1>Bach Le Tan Tien.</h1>
      <h1 css={tw`!text-slate`}>I build things for the web.</h1>
      <p css={tw`w-[50ch] text-xl`}>
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at Upstatement.
      </p>
      <div css={tw`mt-14 flex `}>
        <Button title="Check out my course" size="lg" />
      </div>
    </div>
  );
};

export default Hero;
