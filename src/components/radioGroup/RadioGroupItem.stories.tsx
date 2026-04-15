import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta = {
  title: 'Components/RadioGroup/RadioGroupItem',
  component: RadioGroupItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'The value of the radio item',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      description: 'Visual state variant of the radio item',
      control: {
        type: 'select',
      },
      options: ['default', 'error', 'disabled'],
      table: {
        type: { summary: "'default' | 'error' | 'disabled'" },
        defaultValue: { summary: "'default'" },
      },
    },
    disabled: {
      description: 'Whether the radio item is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    id: {
      description: 'The id of the radio item for label association',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the radio item',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof RadioGroupItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="">
      <div className="flex items-center gap-2">
        <RadioGroupItem {...args} id="item1" />
        <label htmlFor="item1" className="cursor-pointer">
          Radio Item
        </label>
      </div>
    </RadioGroup>
  ),
  args: {
    value: 'option1',
    variant: 'default',
  },
};

export const ErrorVariant: Story = {
  render: (args) => (
    <RadioGroup defaultValue="error1">
      <div className="flex items-center gap-2">
        <RadioGroupItem {...args} id="error1" />
        <label htmlFor="error1" className="cursor-pointer text-text-danger">
          Error Radio Item
        </label>
      </div>
    </RadioGroup>
  ),
  args: {
    value: 'error1',
    variant: 'error',
  },
};

export const DisabledVariant: Story = {
  render: (args) => (
    <RadioGroup defaultValue="disabled1">
      <div className="flex items-center gap-2">
        <RadioGroupItem {...args} id="disabled1" />
        <label htmlFor="disabled1" className="cursor-not-allowed opacity-50">
          Disabled Radio Item
        </label>
      </div>
    </RadioGroup>
  ),
  args: {
    value: 'disabled1',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="default">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="default" id="v1" variant="default" />
          <label htmlFor="v1" className="cursor-pointer">
            Default Variant (Checked)
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="default2" id="v2" variant="default" />
          <label htmlFor="v2" className="cursor-pointer">
            Default Variant (Unchecked)
          </label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="error">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="error" id="v3" variant="error" />
          <label htmlFor="v3" className="cursor-pointer text-text-danger">
            Error Variant (Checked)
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="error2" id="v4" variant="error" />
          <label htmlFor="v4" className="cursor-pointer text-text-danger">
            Error Variant (Unchecked)
          </label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="disabled">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="disabled" id="v5" disabled />
          <label htmlFor="v5" className="cursor-not-allowed opacity-50">
            Disabled Variant (Checked)
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="disabled2" id="v6" disabled />
          <label htmlFor="v6" className="cursor-not-allowed opacity-50">
            Disabled Variant (Unchecked)
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
  args: {
    value: 'showcase',
  },
};
