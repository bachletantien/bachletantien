/** @jsxImportSource @emotion/react */
import { ReactComponent as Github } from 'assets/images/github.svg';
import { ReactComponent as ExternalLink } from 'assets/images/external-link.svg';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import tw from 'twin.macro';

interface ProjectItemProps {
  data: any;
  variant?: 'left' | 'right';
}

const ProjectItem = ({ data, variant }: ProjectItemProps) => {
  const { name, image, tags, links, description } = data?.fields;
  const {
    title: imageTitle,
    file: { url: imageUrl },
  } = image?.fields;

  const imageStyle = variant === 'left' ? tw`left-0` : tw`right-0`;
  const contentStyle = variant === 'left' ? tw`items-end` : tw`items-start`;

  return (
    <div css={tw`relative w-full mb-28`}>
      <div className="project-image" css={[tw`absolute top-0 w-[480px] h-[291px] `, imageStyle]}>
        <img css={tw`w-full h-full rounded-md`} src={imageUrl} alt={imageTitle} />
      </div>
      <div css={[tw` w-[content] relative flex flex-col`, contentStyle]}>
        <p css={tw`!text-green !text-sm !font-mono !my-[10px]`}>Featured Project</p>
        <h3>
          <a href="https://entertainment-hub-three.vercel.app/">{name}</a>
        </h3>
        <div css={tw`w-[400px] px-4 py-1 my-2 bg-navy-light rounded-md z-20`}>
          <p css={tw`text-right !text-lg`}>{documentToReactComponents(description)}</p>
        </div>
        <ul css={tw`flex gap-x-6 mt-6 mb-[15px]`}>
          {tags.map((tag: any) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div css={tw`flex text-slate-lightest text-xl gap-x-5`}>
          {links.map((link: any) => (
            <a key={link.name} href={link.url} title={link.name} target="_blank" rel="noreferrer">
              {link.name === 'github' ? <Github /> : <ExternalLink />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
