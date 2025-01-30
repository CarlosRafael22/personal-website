import TagsList from '@/components/TagsList';

import Image from 'next/image';

type BlogPostHeaderProps = {
  title: string;
  date: string;
  tags: string[];
  imagePath: string | null;
};

const BlogPostHeader = ({ title, date, tags, imagePath }: BlogPostHeaderProps) => {
  return (
    <div>
      <TagsList tags={tags} />

      <h1 className="mb-2 text-center text-2xl font-semibold">
        {title}
      </h1>

      <p className="mb-8 text-center text-sm text-gray-600">
        Published on
        {' '}
        {date}
      </p>

      {imagePath
      && (
        <div className="relative mb-8 aspect-video w-full bg-gray-200">
          <Image
            src={imagePath}
            alt="Blog post cover"
            priority
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default BlogPostHeader;
