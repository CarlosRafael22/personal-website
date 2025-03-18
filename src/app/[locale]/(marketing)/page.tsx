import ArticleCard from '@/components/ArticleCard';
import { SocialLinks } from '@/components/SocialLinks';
import { getSortedPostsMetadata } from '@/lib/posts';
import Image from 'next/image';

const Page = async () => {
  const allPostsData = getSortedPostsMetadata();

  return (
    <>
      <div className="text-center">
        <div className="relative mx-auto size-24 overflow-hidden rounded-full">
          <Image
            src="/assets/images/profile-picture.jpg"
            alt="Rafael Leitão"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="mt-4 text-2xl font-bold">Rafael Leitão</h1>
        <p className="text-gray-600">
          Frontend Product Engineer, Product and UX/UI skills
        </p>

        <SocialLinks />

        <p className="mt-6 text-gray-600">
          Hey there! Great that you're visiting my corner on the internet!
          {' '}
          <br />
          I've always found it nice that people share a bit of themselves on their own personal websites.
          That's why I decided to start doing the same this year.
          {' '}
          <br />
          Here I plan to share topics I'm studying, things I've learned, or projects I'm working on.
          Right now, in the "v0" stage, there's not much going on here. Soon I will start sharing my journey.
          Feel free to get in touch ;)
        </p>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-xl font-semibold">Articles</h2>
        <div className="flex flex-col gap-8">
          {
            allPostsData.map((post) => {
              const { title, description, date, headerImage, tags, id } = post;

              return (
                <ArticleCard
                  title={title}
                  description={description}
                  date={date}
                  image={headerImage}
                  tags={tags}
                  href={`/blog/${id}`}
                  key={id}
                />
              );
            })
          }
        </div>
      </section>
    </>
  );
};

export default Page;
