import type { Meta, StoryObj } from '@storybook/react';
import { MdAdd, MdArrowForward, MdDelete, MdFavorite, MdSearch } from 'react-icons/md';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component with multiple variants, sizes, and support for icons. Built with accessibility and modern design principles in mind.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style variant of the button that determines its appearance and purpose',
      control: 'select',
      options: ['primary', 'secondary', 'emphasis', 'plain', 'danger'],
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the button affecting padding, font size, and overall dimensions',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'small' },
      },
    },
    children: {
      description:
        'Content to be displayed inside the button. Can include text, icons, or other React elements',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      description: 'Whether the button is disabled and cannot be interacted with',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description: 'Callback function fired when the button is clicked',
      table: {
        type: { summary: '(event: MouseEvent<HTMLButtonElement>) => void' },
      },
    },
    onFocus: {
      description: 'Callback function fired when the button receives focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLButtonElement>) => void' },
      },
    },
    onBlur: {
      description: 'Callback function fired when the button loses focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLButtonElement>) => void' },
      },
    },
    type: {
      description: 'HTML button type attribute (button, submit, reset)',
      control: 'select',
      options: ['button', 'submit', 'reset'],
      table: {
        type: { summary: 'button | submit | reset' },
        defaultValue: { summary: 'button' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: { onClick: () => alert('Button clicked!') },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button variant used for main actions and calls-to-action.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button variant used for less prominent actions.',
      },
    },
  },
};

export const Emphasis: Story = {
  args: {
    children: 'Emphasis Button',
    variant: 'emphasis',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The emphasis button variant used to highlight important actions.',
      },
    },
  },
};

export const Plain: Story = {
  args: {
    children: 'Plain Button',
    variant: 'plain',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The plain button variant with minimal styling for subtle actions.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The danger button variant used for destructive actions like delete or remove.',
      },
    },
  },
};

export const WithStartIcon: Story = {
  args: {
    children: (
      <>
        <MdAdd />
        Add Item
      </>
    ),
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with an icon at the beginning to indicate the action type.',
      },
    },
  },
};

export const WithEndIcon: Story = {
  args: {
    children: (
      <>
        Next
        <MdArrowForward />
      </>
    ),
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with an icon at the end, commonly used for navigation actions.',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    children: <MdAdd />,
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button for actions where the icon clearly communicates the purpose.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button in disabled state, preventing user interaction.',
      },
    },
  },
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all available button sizes.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary" size="medium">
          Primary
        </Button>
        <Button variant="secondary" size="medium">
          Secondary
        </Button>
        <Button variant="emphasis" size="medium">
          Emphasis
        </Button>
        <Button variant="plain" size="medium">
          Plain
        </Button>
        <Button variant="danger" size="medium">
          Danger
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" size="medium" disabled>
          Primary
        </Button>
        <Button variant="secondary" size="medium" disabled>
          Secondary
        </Button>
        <Button variant="emphasis" size="medium" disabled>
          Emphasis
        </Button>
        <Button variant="plain" size="medium" disabled>
          Plain
        </Button>
        <Button variant="danger" size="medium" disabled>
          Danger
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all button variants in both enabled and disabled states.',
      },
    },
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" size="medium">
        <MdAdd />
      </Button>
      <Button variant="secondary" size="medium">
        <MdSearch />
      </Button>
      <Button variant="emphasis" size="medium">
        <MdFavorite />
      </Button>
      <Button variant="danger" size="medium">
        <MdDelete />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Collection of icon-only buttons with different variants.',
      },
    },
  },
};
