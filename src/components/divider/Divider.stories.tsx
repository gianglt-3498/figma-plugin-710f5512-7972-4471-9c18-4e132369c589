import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      table: {
        type: { summary: 'DividerOrientation' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    flexItem: {
      control: 'boolean',
      description: 'If true, the divider will stretch to fill its container when vertical',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

/**
 * Default horizontal divider separating content vertically
 */
export const Horizontal: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p style={{ margin: '8px 0' }}>Content above</p>
      <Divider {...args} />
      <p style={{ margin: '8px 0' }}>Content below</p>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

/**
 * Vertical divider separating content horizontally in a flex layout
 */
export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
      <span>Left content</span>
      <Divider {...args} />
      <span>Right content</span>
    </div>
  ),
  args: {
    orientation: 'vertical',
    flexItem: true,
  },
};

/**
 * Vertical divider without flexItem - fixed height
 */
export const VerticalFixedHeight: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>Left</span>
      <div style={{ height: '50px' }}>
        <Divider {...args} />
      </div>
      <span>Right</span>
    </div>
  ),
  args: {
    orientation: 'vertical',
    flexItem: false,
  },
};

/**
 * Multiple sections separated by dividers
 */
export const MultipleSections: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <section style={{ padding: '16px 0' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Section 1</h3>
        <p style={{ margin: 0 }}>This is the first section content.</p>
      </section>
      <Divider />
      <section style={{ padding: '16px 0' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Section 2</h3>
        <p style={{ margin: 0 }}>This is the second section content.</p>
      </section>
      <Divider />
      <section style={{ padding: '16px 0' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Section 3</h3>
        <p style={{ margin: 0 }}>This is the third section content.</p>
      </section>
    </div>
  ),
};

/**
 * Vertical dividers in a navigation bar
 */
export const NavigationBar: Story = {
  render: () => (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px',
        height: '48px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </a>
      <Divider orientation="vertical" flexItem />
      <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        About
      </a>
      <Divider orientation="vertical" flexItem />
      <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        Contact
      </a>
    </nav>
  ),
};
