/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { motion } from 'framer-motion';
import Button from './Button';
import Hamburger from './Hamburger';
import variants from 'variants';
import { useCallback, useEffect, useState } from 'react';
interface NavbarProps {
  open: boolean;
  toggle: () => void;
}

const Navbar = ({ open, toggle }: NavbarProps) => {
  const isOpen = open ? tw`translate-x-0` : tw`translate-x-full laptop:(translate-x-0)`;
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        console.log(show);
      } else {
        // if scroll up show the navbar
        setShow(true);
        console.log(show);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, show]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);
  return (
    <motion.nav
      initial="before"
      animate="after"
      transition={{ delayChildren: 1.2 }}
      css={[
        tw` fixed z-[50] pb-4  w-screen bg-navy/50 backdrop-blur duration-200 laptop:(h-[100px] w-full flex items-center justify-between px-4)`,
        show ? tw`top-0 shadow-lg` : tw`top-[-65px] shadow-xl`,
      ]}
    >
      <motion.div
        variants={variants.navbar}
        css={tw`flex justify-between px-4 pt-5 laptop:(px-0 pt-0 flex-none) `}
      >
        <Logo css={tw`text-green w-[42px] h-[42px]`} />
        <span onClick={toggle} css={tw`laptop:( hidden)`}>
          <Hamburger isOpen={open} />
        </span>
      </motion.div>
      <div
        css={[
          tw`fixed z-10 flex h-screen flex-col justify-center items-center bg-navy-light text-left top-0 right-0 ease-in-out duration-300
          laptop:( flex-row h-auto bg-transparent items-center relative)`,
          isOpen,
        ]}
      >
        <ol
          css={tw`flex flex-col gap-8 font-mono text-lg text-slate-lightest px-[100px]
        laptop:(flex-row px-0 py-0 gap-8 pr-4 )`}
        >
          <li css={tw`text-center `}>
            <a css={tw`block laptop:( inline)`} href="#About">
              About
            </a>
          </li>
          <li css={tw`text-center `}>
            <a css={tw`block laptop:(inline)`} href="#Experience">
              Experience
            </a>
          </li>
          <li css={tw`text-center `}>
            <a css={tw`block laptop:(inline)`} href="#Work">
              Work
            </a>
          </li>
          <li css={tw`text-center `}>
            <a css={tw`block laptop:(inline)`} href="#Contact">
              Contact
            </a>
          </li>
        </ol>
        <div css={tw`relative top-0 mx-auto mt-8 laptop:(mt-0 mx-0)`}>
          <Button
            title="Resume"
            customStyle={tw`px-[48px] py-[16px] laptop:(px-5 py-3)`}
            size="sm"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
