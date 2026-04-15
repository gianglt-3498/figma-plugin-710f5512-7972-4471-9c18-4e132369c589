import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ChangeEvent } from 'react';
import { TextareaField } from './TextareaField';

const meta = {
  title: 'Components/TextareaField',
  component: TextareaField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'disabled'],
      description: 'Visual style variant of the textarea field',
      defaultValue: 'default',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the textarea field',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
      defaultValue: false,
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display below the textarea',
    },
    supportText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the textarea',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum character length for the textarea',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
  },
} satisfies Meta<typeof TextareaField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
  },
};

export const Required: Story = {
  args: {
    label: 'メッセージ',
    placeholder: 'メッセージを入力してください',
    required: true,
    supportText: 'このフィールドは必須です',
  },
};

export const WithCharacterLimit: Story = {
  args: {
    label: '説明',
    placeholder: '説明を入力してください（最大500文字）',
    maxLength: 500,
    supportText: '商品の詳細な説明を入力してください',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'フィードバック',
    placeholder: 'フィードバックを入力してください',
    defaultValue: 'これは既存のテキストです。編集することができます。',
    maxLength: 200,
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'エラーフィールド',
    placeholder: 'テキストを入力してください',
    error: 'このフィールドは必須です',
    required: true,
    value: '',
  },
};

export const ErrorStateWithCharacterLimit: Story = {
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    error: '文字数が上限を超えています',
    maxLength: 50,
    defaultValue:
      'このテキストは50文字を超えているため、エラーが表示されます。これは長すぎるテキストの例です。',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '無効フィールド',
    placeholder: '入力できません',
    variant: 'disabled',
    defaultValue: 'このフィールドは無効化されています',
    supportText: 'このフィールドは現在編集できません',
  },
};

export const AllFeatures: Story = {
  args: {
    label: '詳細情報',
    placeholder: '詳細情報を入力してください',
    required: true,
    maxLength: 300,
    supportText: 'できるだけ詳しく記入してください',
    rows: 6,
  },
};

export const CustomRequiredText: Story = {
  args: {
    label: 'カスタム必須フィールド',
    placeholder: 'テキストを入力してください',
    required: true,
    requiredText: 'REQUIRED',
    supportText: 'カスタムの必須テキストを使用',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [hasError, setHasError] = useState(false);
    const maxLength = 100;

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      setHasError(newValue.length > maxLength || newValue.trim() === '');
    };

    return (
      <div className="w-96">
        <TextareaField
          label="インタラクティブフィールド"
          placeholder="テキストを入力してテストしてください"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          required
          error={
            hasError
              ? value.trim() === ''
                ? 'このフィールドは必須です'
                : '文字数が上限を超えています'
              : undefined
          }
          supportText="リアルタイムバリデーションのテスト"
          rows={4}
        />
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          <p>現在の状態:</p>
          <ul className="mt-2 space-y-1">
            <li>
              文字数: {value.length}/{maxLength}
            </li>
            <li>エラー: {hasError ? 'あり' : 'なし'}</li>
            <li>空白: {value.trim() === '' ? 'はい' : 'いいえ'}</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const VariantComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <TextareaField
        label="Default State"
        placeholder="デフォルト状態"
        supportText="通常の状態です"
      />
      <TextareaField
        label="Error State"
        placeholder="エラー状態"
        error="エラーメッセージ"
        defaultValue="エラーのあるテキスト"
      />
      <TextareaField
        label="Disabled State"
        placeholder="無効状態"
        variant="disabled"
        defaultValue="無効化されたテキスト"
        supportText="編集できません"
      />
    </div>
  ),
};
