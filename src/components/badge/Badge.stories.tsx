import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['count', 'dot', 'label', 'error'],
      description: 'Visual style variant of the badge',
      table: {
        type: { summary: 'BadgeVariant' },
        defaultValue: { summary: 'count' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for count and label variants',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: false,
      description: 'Custom content to render inside badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Count badge displays numerical values, commonly used for notification counts
 */
export const Count: Story = {
  args: {
    variant: 'count',
    label: '99+',
  },
};

/**
 * Dot badge is a small circular indicator, typically used for status or presence
 */
export const Dot: Story = {
  args: {
    variant: 'dot',
  },
};

/**
 * Label badge displays text labels, useful for tags or status indicators
 */
export const Label: Story = {
  args: {
    variant: 'label',
    label: 'New',
  },
};

/**
 * Error badge displays an error icon indicator
 */
export const Error: Story = {
  args: {
    variant: 'error',
  },
};

/**
 * All badge variants displayed together for comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="count" label="5" />
      <Badge variant="count" label="99+" />
      <Badge variant="dot" />
      <Badge variant="label" label="New" />
      <Badge variant="label" label="Premium" />
      <Badge variant="error" />
    </div>
  ),
};

/**
 * Badge with custom content using children prop
 */
export const CustomContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="count">🔥</Badge>
      <Badge variant="label">★ VIP</Badge>
    </div>
  ),
};
