import BlogPostHeader from '@/components/blog/BlogPostHeader';

type BlogPostTemplateProps = {
  title: string;
  date: string;
  tags: string[];
  imagePath: string;
  content: React.ReactElement;
};

const BlogPostTemplate = ({ title, date, tags, imagePath, content }: BlogPostTemplateProps) => {
  return (
    <article className="mx-auto max-w-2xl px-4">
      <BlogPostHeader
        title={title}
        date={date}
        tags={tags}
        imagePath={imagePath}
      />

      {content}
    </article>
  );
};

export default BlogPostTemplate;
