import type { PostData } from '@/models/blog';

import { getPostFileContent } from '@/lib/posts';
import { components } from '@/mdx-components';
import { compileMDX } from 'next-mdx-remote/rsc';
import { LocaleSwitcher } from '../LocaleSwitcher';

export const getPostData = async (id: string) => {
  const fileContents = getPostFileContent(id);

  const data = await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,
    },
    components: {
      ...components,
      LocaleSwitcher,
    },
  });

  return {
    content: data.content,
    frontmatter: data.frontmatter,
  } as PostData;
};
