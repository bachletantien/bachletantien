/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Button from './Button';
// interface NavbarProps {}

const Navbar = () => {
  return (
    <nav css={tw`h-[100px] w-screen px-10 flex justify-between items-center fixed`}>
      <Logo css={tw`text-green w-[42px] h-[42px]`} />
      <div css={tw`flex`}>
        <ol css={tw`flex font-mono text-xs text-slate-lightest`}>
          <li css={tw`p-3`}>About</li>
          <li css={tw`p-3`}>Experience</li>
          <li css={tw`p-3`}>Work</li>
          <li css={tw`p-3`}>Contact</li>
        </ol>
        <div css={tw`ml-[15px]`}>
          <Button title="Resume" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
