import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description:
        'Visual state variant of the checkbox that determines its appearance and behavior',
      control: 'select',
      options: ['default', 'error', 'disabled'],
      table: {
        type: { summary: 'CheckboxVariant' },
        defaultValue: { summary: 'default' },
      },
    },
    checked: {
      description: 'The checked state of the checkbox. Can be true, false, or "indeterminate"',
      control: 'radio',
      options: [true, false, 'indeterminate'],
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultChecked: {
      description: 'The default checked state when the checkbox is initially rendered',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onCheckedChange: {
      description: 'Callback function fired when the checked state changes',
      table: {
        type: { summary: '(checked: boolean | "indeterminate") => void' },
      },
    },
    name: {
      description: 'The name of the checkbox for form submission',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      description: 'The value of the checkbox when used in a form',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      description: 'Whether the checkbox is required in a form',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the checkbox',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default checkbox variant in unchecked state.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    variant: 'default',
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in checked state.',
      },
    },
  },
};

export const Indeterminate: Story = {
  args: {
    variant: 'default',
    checked: 'indeterminate',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox in indeterminate state, commonly used for "select all" functionality when only some items are selected.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with error state, typically used when validation fails.',
      },
    },
  },
};

export const ErrorChecked: Story = {
  args: {
    variant: 'error',
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with error state in checked condition.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkbox that cannot be interacted with.',
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    variant: 'disabled',
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkbox in checked state.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        利用規約に同意する
      </label>
    </div>
  ),
  args: {
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with an associated label for better usability.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Default Variant</h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="default" />
            <span className="text-xs text-gray-600">Unchecked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="default" defaultChecked />
            <span className="text-xs text-gray-600">Checked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="default" checked="indeterminate" />
            <span className="text-xs text-gray-600">Indeterminate</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Error Variant</h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="error" />
            <span className="text-xs text-gray-600">Unchecked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="error" defaultChecked />
            <span className="text-xs text-gray-600">Checked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="error" checked="indeterminate" />
            <span className="text-xs text-gray-600">Indeterminate</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Disabled Variant</h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="disabled" />
            <span className="text-xs text-gray-600">Unchecked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="disabled" defaultChecked />
            <span className="text-xs text-gray-600">Checked</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Checkbox variant="disabled" checked="indeterminate" />
            <span className="text-xs text-gray-600">Indeterminate</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive showcase of all checkbox variants and their states (unchecked, checked, indeterminate).',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4 text-center text-sm font-semibold">
        <div></div>
        <div>Checked</div>
        <div>Unchecked</div>
        <div>Indeterminate</div>
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="text-sm font-medium">Enabled</div>
        <div className="flex justify-center">
          <Checkbox variant="default" defaultChecked />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="default" />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="default" checked="indeterminate" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="text-sm font-medium">Error</div>
        <div className="flex justify-center">
          <Checkbox variant="error" defaultChecked />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="error" />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="error" checked="indeterminate" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="text-sm font-medium">Disabled</div>
        <div className="flex justify-center">
          <Checkbox variant="disabled" defaultChecked />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="disabled" />
        </div>
        <div className="flex justify-center">
          <Checkbox variant="disabled" checked="indeterminate" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete matrix view of all checkbox states and variants as shown in the design specification.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 p-6 border rounded-lg max-w-md">
      <h3 className="text-lg font-semibold mb-4">選択してください</h3>

      <div className="flex items-center gap-2">
        <Checkbox id="option1" name="options" value="option1" defaultChecked />
        <label htmlFor="option1" className="text-sm cursor-pointer">
          オプション1
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="option2" name="options" value="option2" />
        <label htmlFor="option2" className="text-sm cursor-pointer">
          オプション2
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="option3" name="options" value="option3" variant="error" />
        <label htmlFor="option3" className="text-sm cursor-pointer text-red-600">
          オプション3 (エラー)
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="option4" name="options" value="option4" variant="disabled" />
        <label htmlFor="option4" className="text-sm cursor-not-allowed opacity-50">
          オプション4 (無効)
        </label>
      </div>

      <div className="pt-4 border-t">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" required />
          <label htmlFor="terms" className="text-sm cursor-pointer">
            利用規約に同意する <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes used in a form with various states and labels.',
      },
    },
  },
};
