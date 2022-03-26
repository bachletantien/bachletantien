/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';
import { motion } from 'framer-motion';
import variants from 'variants';

// interface HeroProps {}

const Hero = () => {
  return (
    <motion.div
      initial="before"
      animate="after"
      transition={{ staggerChildren: 0.2, delayChildren: 1.5 }}
      css={tw`h-[80vh] flex flex-col justify-center  w-full laptop:(h-screen)`}
    >
      <motion.span variants={variants.title} css={tw`font-mono text-md text-green mb-4`}>
        Hi, my name is
      </motion.span>
      <motion.h1 variants={variants.title}>Bach Le Tan Tien.</motion.h1>
      <motion.h1 variants={variants.title} css={tw`!text-slate`}>
        I build things for the web.
      </motion.h1>
      <motion.p
        variants={variants.title}
        css={tw`text-left laptop:(!text-xl w-[540px] py-4 leading-7)`}
      >
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at{' '}
        <a className="link" href="#">
          Upstatement.
        </a>
      </motion.p>
      <motion.div variants={variants.title} css={tw`mt-8 flex`}>
        <Button title="Check out my course!" size="lg" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
