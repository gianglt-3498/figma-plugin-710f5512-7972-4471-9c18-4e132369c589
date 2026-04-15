import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from './Textarea';
import { Button } from '../button';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'disabled'],
      description: 'Visual state variant of the textarea field',
      defaultValue: 'default',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
    },
    cols: {
      control: { type: 'number' },
      description: 'Number of visible character columns',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'テキストを入力',
    rows: 4,
  },
};

export const WithContent: Story = {
  args: {
    placeholder: 'テキストを入力',
    defaultValue: 'This is some sample content in the textarea.',
    rows: 4,
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'error',
    placeholder: 'エラー状態のテキストエリア',
    defaultValue: 'Invalid content',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    placeholder: '無効状態のテキストエリア',
    defaultValue: 'This textarea is disabled',
    rows: 4,
  },
};

export const LargeTextarea: Story = {
  args: {
    placeholder: '大きなテキストエリア',
    rows: 8,
    cols: 50,
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: '最大100文字まで入力可能',
    maxLength: 100,
    rows: 4,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [variant, setVariant] = useState<'default' | 'error' | 'disabled'>('default');

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={() => setVariant('default')}
            variant={variant === 'default' ? 'primary' : 'secondary'}
          >
            Default
          </Button>
          <Button
            onClick={() => setVariant('error')}
            variant={variant === 'error' ? 'danger' : 'secondary'}
          >
            Error
          </Button>
          <Button
            onClick={() => setVariant('disabled')}
            variant={variant === 'disabled' ? 'primary' : 'secondary'}
          >
            Disabled
          </Button>
        </div>
        <Textarea
          variant={variant}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="インタラクティブなテキストエリア"
          rows={4}
          maxLength={200}
        />
        <p className="text-sm text-gray-600">Current value length: {value.length}</p>
      </div>
    );
  },
};
