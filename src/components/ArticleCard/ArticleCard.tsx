import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  image: string | null;
  tags: string[];
  href: string;
};

const ArticleCard = ({
  title,
  description,
  date,
  image,
  tags,
  href,
}: ArticleCardProps) => {
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-md"
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="mb-4 flex gap-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="my-0 mb-2 text-sm text-gray-600">{description}</p>
        <time className="text-xs text-gray-500">{date}</time>
      </div>
    </Link>
  );
};

export default ArticleCard;
