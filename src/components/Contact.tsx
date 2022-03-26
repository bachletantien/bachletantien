/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Button from './Button';

// interface ContactProps {}

const Contact = () => {
  return (
    <div css={tw`flex flex-col items-center mb-80`}>
      <h2 css={tw`!text-md !font-mono !text-green text-center`}>What's Next?</h2>
      <h1>Get In Touch</h1>
      <p css={tw`text-center mb-[50px]`}>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <Button title="Say Hello" size="lg" customStyle={tw`text-sm`} />
    </div>
  );
};

export default Contact;
