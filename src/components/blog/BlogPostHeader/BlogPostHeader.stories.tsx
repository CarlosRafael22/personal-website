import type { Meta, StoryObj } from '@storybook/react';

import BlogPostHeader from './BlogPostHeader';

const meta = {
  title: 'Components/BlogPostHeader',
  component: BlogPostHeader,
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
} satisfies Meta<typeof BlogPostHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Redesign 1',
    date: '2025-01-26',
    tags: ['Redesign', 'UX/UI'],
    imagePath: '/assets/images/aroundhome-hero.png',
  },
} satisfies Story;

export const WithoutImage = {
  args: {
    title: 'Redesign 1',
    date: '2025-01-26',
    tags: ['Redesign', 'UX/UI'],
    imagePath: null,
  },
} satisfies Story;
