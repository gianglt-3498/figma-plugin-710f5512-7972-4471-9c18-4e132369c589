import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  subcomponents: { RadioGroupItem } as any,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'The controlled value of the radio item to check',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      description: 'The value of the radio item that should be checked when initially rendered',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      description: 'Callback function fired when the value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    disabled: {
      description: 'Whether the radio group is disabled and cannot be interacted with',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Whether the radio group is required for form submission',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      description: 'The name of the radio group for form submission',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    orientation: {
      description: 'The orientation of the radio group',
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'vertical' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the radio group',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

/**
 * RadioGroupItem Component Documentation
 *
 * Props:
 * - value: string - The value of the radio item (required)
 * - variant: 'default' | 'error' | 'disabled' - Visual state variant (default: 'default')
 * - disabled: boolean - Whether the radio item is disabled
 * - id: string - HTML id attribute for label association
 * - className: string - Additional CSS classes
 */

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="r1" />
        <label htmlFor="r1" className="cursor-pointer">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="r2" />
        <label htmlFor="r2" className="cursor-pointer">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="r3" />
        <label htmlFor="r3" className="cursor-pointer">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic radio group with three options. Only one option can be selected at a time.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('option2');
    return (
      <div className="flex flex-col gap-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="c1" />
            <label htmlFor="c1" className="cursor-pointer">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="c2" />
            <label htmlFor="c2" className="cursor-pointer">
              Option 2
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option3" id="c3" />
            <label htmlFor="c3" className="cursor-pointer">
              Option 3
            </label>
          </div>
        </RadioGroup>
        <p className="text-sm text-gray-600">Selected: {value}</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled radio group where the selected value is managed by React state. Displays the current selection.',
      },
    },
  },
};

export const HorizontalLayout: Story = {
  render: () => (
    <RadioGroup defaultValue="small" orientation="horizontal" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="small" id="h1" />
        <label htmlFor="h1" className="cursor-pointer">
          Small
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="medium" id="h2" />
        <label htmlFor="h2" className="cursor-pointer">
          Medium
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="large" id="h3" />
        <label htmlFor="h3" className="cursor-pointer">
          Large
        </label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio group with horizontal layout, useful for compact option selections.',
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <RadioGroup defaultValue="error1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="error1" id="e1" variant="error" />
          <label htmlFor="e1" className="cursor-pointer text-text-danger">
            Invalid Option 1
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="error2" id="e2" variant="error" />
          <label htmlFor="e2" className="cursor-pointer text-text-danger">
            Invalid Option 2
          </label>
        </div>
      </RadioGroup>
      <p className="text-sm text-text-danger">Please select a valid option</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio group items in error state with red styling to indicate validation issues.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <RadioGroup defaultValue="disabled1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled1" id="d1" />
        <label htmlFor="d1" className="cursor-not-allowed opacity-50">
          Disabled Option 1 (Selected)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled2" id="d2" />
        <label htmlFor="d2" className="cursor-not-allowed opacity-50">
          Disabled Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled3" id="d3" />
        <label htmlFor="d3" className="cursor-not-allowed opacity-50">
          Disabled Option 3
        </label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Entire radio group in disabled state, preventing any user interaction.',
      },
    },
  },
};

export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="id1" />
        <label htmlFor="id1" className="cursor-pointer">
          Available Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="id2" disabled />
        <label htmlFor="id2" className="cursor-not-allowed opacity-50">
          Disabled Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="id3" />
        <label htmlFor="id3" className="cursor-pointer">
          Available Option 3
        </label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Radio group with individual disabled items. Some options are available while others are disabled.',
      },
    },
  },
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="plan1">
      <div className="flex items-start gap-2">
        <RadioGroupItem value="plan1" id="plan1" className="mt-1" />
        <div className="flex flex-col">
          <label htmlFor="plan1" className="cursor-pointer font-medium">
            Basic Plan
          </label>
          <p className="text-sm text-gray-600">Perfect for individuals and small teams</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="plan2" id="plan2" className="mt-1" />
        <div className="flex flex-col">
          <label htmlFor="plan2" className="cursor-pointer font-medium">
            Professional Plan
          </label>
          <p className="text-sm text-gray-600">For growing teams with advanced needs</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="plan3" id="plan3" className="mt-1" />
        <div className="flex flex-col">
          <label htmlFor="plan3" className="cursor-pointer font-medium">
            Enterprise Plan
          </label>
          <p className="text-sm text-gray-600">For large organizations with custom requirements</p>
        </div>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Radio group with labels and descriptions for each option, useful for pricing plans or feature selections.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="font-medium mb-2">Default State</h4>
        <RadioGroup defaultValue="default1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default1" id="all1" />
            <label htmlFor="all1" className="cursor-pointer">
              Selected
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default2" id="all2" />
            <label htmlFor="all2" className="cursor-pointer">
              Unselected
            </label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="font-medium mb-2">Error State</h4>
        <RadioGroup defaultValue="error1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="error1" id="all3" variant="error" />
            <label htmlFor="all3" className="cursor-pointer text-text-danger">
              Selected Error
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="error2" id="all4" variant="error" />
            <label htmlFor="all4" className="cursor-pointer text-text-danger">
              Unselected Error
            </label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h4 className="font-medium mb-2">Disabled State</h4>
        <RadioGroup defaultValue="disabled1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled1" id="all5" disabled />
            <label htmlFor="all5" className="cursor-not-allowed opacity-50">
              Selected Disabled
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled2" id="all6" disabled />
            <label htmlFor="all6" className="cursor-not-allowed opacity-50">
              Unselected Disabled
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all radio group states in both selected and unselected conditions.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      size: 'medium',
      color: '',
      delivery: 'standard',
    });

    return (
      <form className="flex flex-col gap-6 w-80">
        <div>
          <label className="block font-medium mb-2">Size *</label>
          <RadioGroup
            value={formData.size}
            onValueChange={(value) => setFormData({ ...formData, size: value })}
            required
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="small" id="size-s" />
              <label htmlFor="size-s" className="cursor-pointer">
                Small
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="medium" id="size-m" />
              <label htmlFor="size-m" className="cursor-pointer">
                Medium
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="large" id="size-l" />
              <label htmlFor="size-l" className="cursor-pointer">
                Large
              </label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <label className="block font-medium mb-2">Color *</label>
          <RadioGroup
            value={formData.color}
            onValueChange={(value) => setFormData({ ...formData, color: value })}
            required
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="red"
                id="color-r"
                variant={formData.color === '' ? 'error' : 'default'}
              />
              <label htmlFor="color-r" className="cursor-pointer">
                Red
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="blue"
                id="color-b"
                variant={formData.color === '' ? 'error' : 'default'}
              />
              <label htmlFor="color-b" className="cursor-pointer">
                Blue
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="green"
                id="color-g"
                variant={formData.color === '' ? 'error' : 'default'}
              />
              <label htmlFor="color-g" className="cursor-pointer">
                Green
              </label>
            </div>
          </RadioGroup>
          {formData.color === '' && (
            <p className="text-sm text-text-danger mt-1">Please select a color</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">Delivery Method</label>
          <RadioGroup
            value={formData.delivery}
            onValueChange={(value) => setFormData({ ...formData, delivery: value })}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="standard" id="delivery-s" />
              <label htmlFor="delivery-s" className="cursor-pointer">
                Standard (5-7 days)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="express" id="delivery-e" />
              <label htmlFor="delivery-e" className="cursor-pointer">
                Express (2-3 days)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="overnight" id="delivery-o" />
              <label htmlFor="delivery-o" className="cursor-pointer">
                Overnight
              </label>
            </div>
          </RadioGroup>
        </div>

        <div className="p-4 bg-gray-100 rounded">
          <p className="text-sm">
            <strong>Form Data:</strong>
          </p>
          <pre className="text-xs mt-2">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Complete form example demonstrating multiple radio groups with validation and state management.',
      },
    },
  },
};
