/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

type ButtonSize = 'sm' | 'lg';

const sizes: Record<ButtonSize, TwStyle> = {
  sm: tw`text-sm px-4 py-2.5`,
  lg: tw`text-md px-5 py-4`,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: ButtonSize;
  customStyle?: TwStyle;
}

const Button = ({ title, size = 'sm', customStyle, ...rest }: ButtonProps) => {
  return (
    <button
      css={[tw`border rounded text-green border-green font-mono`, sizes[size], customStyle]}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
