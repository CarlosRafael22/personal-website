import type { PostMetadata } from '@/models/blog';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getMetadataFromPostFileContent = (fileContents: string) => {
  const matterResult = matter(fileContents);
  return matterResult.data as unknown as PostMetadata;
};

export const getMetadataFromPost = (id: string) => {
  const fileContent = getPostFileContent(id);
  return getMetadataFromPostFileContent(fileContent);
};

export const getSortedPostsMetadata = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsMetadata = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as unknown as PostMetadata;
  });
  // Sort posts by date
  return allPostsMetadata.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export function getPostFileContent(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  return fs.readFileSync(fullPath, 'utf8');
}
