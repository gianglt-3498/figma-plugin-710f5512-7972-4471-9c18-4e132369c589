import type { Meta, StoryObj } from '@storybook/react';
import { MdSearch, MdClose, MdLock, MdPerson } from 'react-icons/md';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A text field component that combines an input field with label, validation, and helper text functionality. Built on top of the Input component with additional form-related features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style variant of the text field',
      control: 'select',
      options: ['default', 'error', 'disabled'],
      table: {
        type: { summary: 'InputVariant' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      description: 'The label text displayed above the input field',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ラベル' },
      },
    },
    error: {
      description:
        'Error message to display below the input. When provided, the input will show error state',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    supportText: {
      description:
        'Helper text displayed below the input to provide additional context or instructions',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      description: 'Whether the field is required. Shows a required indicator next to the label',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    requiredText: {
      description: 'Custom text for the required indicator badge',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '必須' },
      },
    },
    startAdornment: {
      description: 'Element to display at the start (left) of the input field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endAdornment: {
      description: 'Element to display at the end (right) of the input field',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    placeholder: {
      description: 'Placeholder text shown when the input is empty',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      description: 'Name attribute for the input element, used for form submission',
      control: 'text',
      table: {
        type: { summary: 'string' },
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
      description: 'Callback fired when the input value changes',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    onBlur: {
      description: 'Callback fired when the input loses focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
    onFocus: {
      description: 'Callback fired when the input receives focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
      },
    },
  },
  args: {
    onChange: () => {},
    onBlur: () => {},
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'username',
    placeholder: 'Enter your username',
    label: 'Username',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default state of the TextField component with just a label and placeholder.',
      },
    },
  },
};

export const WithAdornments: Story = {
  args: {
    name: 'search',
    placeholder: 'Search...',
    label: 'Search',
    startAdornment: <MdSearch />,
    endAdornment: <MdClose />,
  },
  parameters: {
    docs: {
      description: {
        story: 'TextField with icon adornments at the beginning and end of the input field.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    name: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    required: true,
    startAdornment: <MdPerson />,
  },
  parameters: {
    docs: {
      description: {
        story: 'A required field with the required indicator badge displayed next to the label.',
      },
    },
  },
};

export const WithSupportText: Story = {
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    supportText: 'Must be at least 8 characters long',
    type: 'password',
    startAdornment: <MdLock />,
  },
  parameters: {
    docs: {
      description: {
        story: 'TextField with helper text providing additional instructions or context.',
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    name: 'email',
    placeholder: 'Enter your email',
    label: 'Email Address',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
    startAdornment: <MdPerson />,
  },
  parameters: {
    docs: {
      description: {
        story: 'TextField in error state with an error message displayed below the input.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled-field',
    placeholder: 'This field is disabled',
    label: 'Disabled Field',
    variant: 'disabled',
    value: 'Cannot edit this',
    supportText: 'This field cannot be modified',
  },
  parameters: {
    docs: {
      description: {
        story: 'TextField in disabled state, preventing user interaction.',
      },
    },
  },
};

export const CustomRequiredText: Story = {
  args: {
    name: 'custom-required',
    placeholder: 'Enter value',
    label: 'Custom Required Field',
    required: true,
    requiredText: 'Required',
    supportText: 'This field uses custom required text',
  },
  parameters: {
    docs: {
      description: {
        story:
          'TextField with custom text for the required indicator instead of the default Japanese text.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <TextField name="default" label="Default State" placeholder="Enter text" />
      <TextField
        name="required"
        label="Required Field"
        placeholder="Enter text"
        required
        startAdornment={<MdPerson />}
      />
      <TextField
        name="with-support"
        label="With Support Text"
        placeholder="Enter text"
        supportText="This is helpful information"
      />
      <TextField
        name="error"
        label="Error State"
        placeholder="Enter text"
        error="This field has an error"
        value="invalid input"
      />
      <TextField
        name="disabled"
        label="Disabled State"
        placeholder="Disabled"
        variant="disabled"
        value="Cannot edit"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all possible states of the TextField component in a single view.',
      },
    },
  },
};
