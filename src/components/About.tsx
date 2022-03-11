/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Avatar from 'assets/images/avatar.png';

// interface AboutProps {}

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <div css={tw`grid grid-cols-2 gap-[50px]`}>
        <div>
          <p>
            I'm currently a Junior Student at{' '}
            <a href="https://uef.edu.vn/" target="_blank" rel="noopener noreferrer">
              University of Economics and Finance
            </a>{' '}
            in Ho Chi Minh City, Vietnam. I have a great passion for full-stack web development, UI
            effects and animations.
          </p>
          <p>
            Problem solver, well-organised, independent person with high attention to detail.
            Interested in the entire front-end spectrum and working on ambitious projects with
            positive people.
          </p>
          <p>
            Here are a few technologies I've been working with recently: HTML5, CSS3, JavaScript
            (ES6+) TypeScript React
          </p>
          <ul css={tw`grid grid-cols-2`}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>MSSQL</li>
          </ul>
        </div>
        <div className="avatar" css={tw`flex relative items-end  w-[300px] h-[300px]`}>
          <img css={tw`w-full z-10 rounded-md`} src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
