export type PostMetadata = {
  id: string;
  date: string;
  title: string;
  description: string;
  headerImage: string;
  tags: string[];
};

export type PostData = {
  frontmatter: PostMetadata;
  content: React.ReactElement;
};
