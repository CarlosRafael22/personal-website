import { Header } from '@/components/Header';
import { getPostData } from '@/components/helpers/blog';
import BlogPostTemplate from '@/components/templates/BlogPageTemplate/BlogPageTemplate';
import { getMetadataFromPost, getSortedPostsMetadata } from '@/lib/posts';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  const postMetadata = getMetadataFromPost(slug);

  return {
    title: postMetadata.title,
  };
};

const Page = async ({
  params,
}: PageProps) => {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const { frontmatter: { title, date, tags, headerImage }, content } = postData;

  return (
    <>
      <Header />
      <BlogPostTemplate
        title={title}
        date={date}
        tags={tags}
        imagePath={headerImage}
        content={content}
      />
    </>
  );
};

export const generateStaticParams = async () => {
  const allPostsData = getSortedPostsMetadata();
  return allPostsData.map(post => ({
    slug: post.id,
  }));
};

export default Page;
