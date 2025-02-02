import type { Meta, StoryObj } from '@storybook/react';

import ArticleCard from '.';

const meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '576px', margin: '12px auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage = {
  args: {
    title: 'Test Post',
    description: 'Short Test Post description',
    date: '2025-01-26',
    image: '/assets/images/aroundhome-hero.png',
    tags: ['Test', 'Blog'],
    href: '/blog/test-post',
  },
} satisfies Story;

export const WithoutImage = {
  args: {
    title: 'Test Post',
    description: 'Short Test Post description',
    date: '2025-01-26',
    image: null,
    tags: ['Test', 'Blog'],
    href: '/blog/test-post',
  },
} satisfies Story;
