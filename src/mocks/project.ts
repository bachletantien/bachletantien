interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  links: [{ name: string; url: string }];
}

export default Project;
