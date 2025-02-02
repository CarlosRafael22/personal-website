import type { Meta, StoryObj } from '@storybook/react';

import TagsList from './TagsList';

const meta = {
  title: 'Components/TagsList',
  component: TagsList,
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
} satisfies Meta<typeof TagsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tags: ['Test', 'Blog'],
  },
} satisfies Story;
