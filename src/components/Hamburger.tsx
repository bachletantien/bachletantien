/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { css } from '@emotion/css';

interface HamburgerProps {
  isOpen: boolean;
}

const Hamburger = ({ isOpen }: HamburgerProps) => {
  return (
    <>
      <div
        className={css`
          transform: ${isOpen ? 'delay-75 rotate(360deg)' : 'rotate(0)'};
        `}
        css={tw` relative w-8 h-8 flex flex-col flex-nowrap z-20 items-end justify-around`}
      >
        <div
          className={css`
            transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          `}
          css={tw` w-8 h-[2px] rounded-[10px] bg-green duration-300 origin-[1px] ease-linear `}
        ></div>
        <div
          className={css`
            transform: ${isOpen ? 'translateX(20px)' : 'translateX(0)'};
            opacity: ${isOpen ? 0 : 1};
          `}
          css={tw`w-8 h-[3px] rounded-[10px] bg-green duration-300 origin-[1px] ease-linear `}
        ></div>
        <div
          className={css`
            transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
            width: 2rem;
          `}
          css={tw`w-7 h-[2px] rounded-[10px] bg-green duration-300 origin-[1px] ease-linear `}
        ></div>
      </div>
    </>
  );
};

export default Hamburger;
