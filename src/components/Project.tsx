/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import ProjectItem from './ProjectItem';

interface ProjectProps {
  data: any[];
}

const Project = (props: ProjectProps) => {
  const { data } = props;

  return (
    <div css={tw`py-24`}>
      <h2>Some Things I've Built</h2>
      {data.map((item, index) => {
        return <ProjectItem key={item.name} data={item} variant={index % 2 ? 'right' : 'left'} />;
      })}
    </div>
  );
};

export default Project;
