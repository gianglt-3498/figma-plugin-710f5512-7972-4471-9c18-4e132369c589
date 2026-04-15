import type { Meta, StoryObj } from '@storybook/react';
import { showSnackbar, SnackbarContainer } from './index';

const meta: Meta<typeof SnackbarContainer> = {
  title: 'Components/Snackbar',
  component: SnackbarContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Snackbar component for displaying brief notifications. Use the \`showSnackbar()\` function to trigger notifications programmatically.

## Usage

\`\`\`tsx
import { showSnackbar, SnackbarContainer } from '@/components/snackbar';

// Add SnackbarContainer once in your app root
function App() {
  return (
    <>
      <SnackbarContainer />
      <YourApp />
    </>
  );
}

// Call showSnackbar from anywhere
showSnackbar({
  variant: 'success',
  title: 'アカウント情報を更新しました',
  message: 'メッセージ',
  duration: 4000,
  closable: true,
  actions: [
    { label: 'ラベル', onClick: () => {} }
  ],
});
\`\`\`

## API

### showSnackbar(options)

**Parameters:**

- \`variant\` - Visual style: \`'info' | 'success' | 'error'\` (default: \`'info'\`)
- \`title\` - Title text (required)
- \`message\` - Optional message below title
- \`closable\` - Show close button (default: \`false\`)
- \`duration\` - Auto-dismiss duration in ms, or \`false\` to disable (default: \`4000\`)
- \`position\` - Position on screen: \`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'\` (default: \`'bottom-center'\`)
- \`actions\` - Array of action buttons with \`label\`, \`onClick\`, and optional \`variant\`

**Features:**
- Multiple variants (info, success, error)
- Auto-dismiss with progress bar indicator
- Optional close button
- Action buttons support
- Multiple positioning options
- Automatic stacking (max 3 visible)
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SnackbarContainer>;

/**
 * Basic info variant with title and message
 */
export const Info: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'info',
            title: 'タイトル',
            message: 'メッセージ',
            actions: [
              {
                label: 'ラベル',
                onClick: () => alert('アクション1'),
              },
              {
                label: 'ラベル',
                onClick: () => alert('アクション2'),
              },
            ],
          })
        }
        style={{
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Info Snackbar
      </button>
    </div>
  ),
};

/**
 * Success variant
 */
export const Success: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'success',
            title: 'アカウント情報を更新しました',
          })
        }
        style={{
          padding: '8px 16px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Success Snackbar
      </button>
    </div>
  ),
};

/**
 * Error variant
 */
export const Error: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'error',
            title: 'メッセージの送信に失敗しました',
          })
        }
        style={{
          padding: '8px 16px',
          background: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Error Snackbar
      </button>
    </div>
  ),
};

/**
 * Snackbar with close button
 */
export const WithCloseButton: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'success',
            title: 'アカウント情報を更新しました',
            closable: true,
          })
        }
        style={{
          padding: '8px 16px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show With Close Button
      </button>
    </div>
  ),
};

/**
 * Snackbar with action buttons
 */
export const WithActions: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'success',
            title: 'アカウント情報を更新しました',
            closable: true,
            actions: [
              {
                label: 'ラベル',
                onClick: () => alert('アクション1'),
              },
              {
                label: 'ラベル',
                onClick: () => alert('アクション2'),
              },
            ],
          })
        }
        style={{
          padding: '8px 16px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show With Actions
      </button>
    </div>
  ),
};

/**
 * Snackbar with auto-dismiss progress bar (4 seconds)
 */
export const WithProgressBar: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'info',
            title: 'メッセージを送信しました',
            message: 'メッセージが4秒後に自動で閉じます',
            duration: 4000,
          })
        }
        style={{
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show With Progress Bar
      </button>
    </div>
  ),
};

/**
 * Snackbar with actions and progress bar
 */
export const WithActionAndProgress: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'success',
            title: 'プレイリストに追加しました',
            message: 'マイプレイグラウンド「会議スピの曲」から削除できます。',
            duration: 6000,
            actions: [
              {
                label: 'プレイリストを見る',
                onClick: () => alert('プレイリストを開く'),
              },
              {
                label: '閉じる',
                onClick: () => {},
              },
            ],
          })
        }
        style={{
          padding: '8px 16px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show With Actions & Progress
      </button>
    </div>
  ),
};

/**
 * Snackbar without auto-dismiss (must be manually closed)
 */
export const NoAutoDismiss: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '600px',
        minHeight: 300,
      }}
    >
      <SnackbarContainer />
      <button
        onClick={() =>
          showSnackbar({
            variant: 'error',
            title: 'メッセージの送信に失敗しました',
            duration: false,
            closable: true,
          })
        }
        style={{
          padding: '8px 16px',
          background: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show No Auto Dismiss
      </button>
    </div>
  ),
};

/**
 * All snackbar variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}
    >
      <SnackbarContainer />
      <h3 style={{ marginBottom: '8px' }}>All Variants</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button
          onClick={() =>
            showSnackbar({
              variant: 'info',
              title: '通知メッセージ',
              message: 'メッセージ',
            })
          }
          style={{
            padding: '8px 16px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Info
        </button>
        <button
          onClick={() =>
            showSnackbar({
              variant: 'success',
              title: 'アカウント情報を更新しました',
              closable: true,
            })
          }
          style={{
            padding: '8px 16px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Success
        </button>
        <button
          onClick={() =>
            showSnackbar({
              variant: 'error',
              title: 'メッセージの送信に失敗しました',
              closable: true,
            })
          }
          style={{
            padding: '8px 16px',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Error
        </button>
      </div>
    </div>
  ),
};
