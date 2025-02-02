import { Badge } from '@/components/ui/badge';

type TagsListProps = {
  tags: string[];
};

const TagsList = ({ tags }: TagsListProps) => (
  <div className="mb-4 flex justify-center gap-4">
    {tags.map(tag => (
      <Badge key={tag} className="rounded-lg bg-blue-100 p-1 text-blue-800 hover:bg-blue-200">
        {tag}
      </Badge>
    ))}
  </div>
);

export default TagsList;
