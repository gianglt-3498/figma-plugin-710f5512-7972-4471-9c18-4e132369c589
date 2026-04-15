import type { Meta, StoryObj } from '@storybook/react';
import { MdClose, MdSearch, MdLock, MdPerson, MdVisibility } from 'react-icons/md';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input field component with support for icons, different states, and customizable styling. Used as the foundation for more complex form components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual state variant of the input field',
      control: 'select',
      options: ['default', 'error', 'disabled'],
      table: {
        type: { summary: 'InputVariant' },
        defaultValue: { summary: 'default' },
      },
    },
    placeholder: {
      description: 'Placeholder text displayed when the input is empty',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'テキストを入力' },
      },
    },
    startAdornment: {
      description: 'Icon or element displayed at the start (left) of the input field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endAdornment: {
      description: 'Icon or element displayed at the end (right) of the input field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    value: {
      description: 'Current value of the input field',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Callback function fired when the input value changes',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    onFocus: {
      description: 'Callback function fired when the input receives focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
    onBlur: {
      description: 'Callback function fired when the input loses focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
    type: {
      description: 'HTML input type attribute (text, password, email, etc.)',
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    name: {
      description: 'Name attribute for the input element, used for form submission',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the input wrapper',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: { onChange: () => {}, onBlur: () => {} },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default state of the input field with standard styling.',
      },
    },
  },
};

export const WithStartIcon: Story = {
  args: {
    placeholder: 'Search...',
    startAdornment: <MdSearch />,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with an icon at the beginning to indicate functionality.',
      },
    },
  },
};

export const WithEndIcon: Story = {
  args: {
    placeholder: 'Enter text',
    endAdornment: <MdClose />,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with an icon at the end, commonly used for clear or action buttons.',
      },
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Search and clear',
    startAdornment: <MdSearch />,
    endAdornment: <MdClose />,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with icons at both ends for enhanced functionality.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Enter valid input',
    startAdornment: <MdPerson />,
    variant: 'error',
    value: 'invalid@',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field in error state with red styling to indicate validation issues.',
      },
    },
  },
};

export const DisabledState: Story = {
  args: {
    placeholder: 'Disabled input',
    startAdornment: <MdLock />,
    variant: 'disabled',
    value: 'Cannot edit this',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field in disabled state, preventing user interaction.',
      },
    },
  },
};

export const PasswordField: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    startAdornment: <MdLock />,
    endAdornment: <MdVisibility />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input field with show/hide icon functionality.',
      },
    },
  },
};

export const EmailField: Story = {
  args: {
    placeholder: 'Enter email address',
    type: 'email',
    startAdornment: <MdPerson />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Email input field with appropriate type and icon.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Default state" startAdornment={<MdSearch />} />
      <Input
        placeholder="With value"
        startAdornment={<MdPerson />}
        value="John Doe"
        onChange={() => {}}
      />
      <Input
        placeholder="Error state"
        startAdornment={<MdPerson />}
        endAdornment={<MdClose />}
        variant="error"
        value="invalid input"
        onChange={() => {}}
      />
      <Input
        placeholder="Disabled state"
        startAdornment={<MdLock />}
        variant="disabled"
        value="Cannot edit"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all input states in a single view for comparison.',
      },
    },
  },
};
