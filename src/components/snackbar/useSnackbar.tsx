import { toast } from 'sonner';
import {
  Snackbar,
  type SnackbarVariant,
  type SnackbarPosition,
  type SnackbarActionConfig,
} from './Snackbar';

/**
 * Options for showing a snackbar notification
 */
export interface ShowSnackbarOptions {
  /** Visual style variant of the snackbar @default 'info' */
  variant?: SnackbarVariant;
  /** Title text displayed prominently */
  title: string;
  /** Optional message text displayed below title */
  message?: string;
  /** Show close button @default false */
  closable?: boolean;
  /** Auto-dismiss duration in milliseconds. Set to false to disable @default 4000 */
  duration?: number | false;
  /** Position of the snackbar on screen @default 'bottom-center' */
  position?: SnackbarPosition;
  /** Action buttons configuration */
  actions?: SnackbarActionConfig[];
}

/**
 * Show a snackbar notification programmatically using the Snackbar component.
 * This is the recommended way to trigger snackbars from anywhere in your app.
 *
 * @example
 * ```tsx
 * // Basic usage
 * showSnackbar({
 *   variant: 'success',
 *   title: 'アカウント情報を更新しました',
 * });
 *
 * // With message and actions
 * showSnackbar({
 *   variant: 'success',
 *   title: 'プレイリストに追加しました',
 *   message: 'マイプレイグラウンド「会議スピの曲」から削除できます。',
 *   duration: 6000,
 *   actions: [
 *     {
 *       label: 'プレイリストを見る',
 *       onClick: () => console.log('Open playlist'),
 *     },
 *   ],
 * });
 *
 * // Without auto-dismiss
 * showSnackbar({
 *   variant: 'error',
 *   title: 'メッセージの送信に失敗しました',
 *   duration: false,
 *   closable: true,
 * });
 * ```
 */
export const showSnackbar = ({
  variant = 'info',
  title,
  message,
  closable = true,
  duration = 1000,
  position = 'bottom-center',
  actions,
}: ShowSnackbarOptions) => {
  const durationMs = typeof duration === 'number' ? duration : Infinity;

  return toast.custom(
    (t) => (
      <Snackbar
        variant={variant}
        title={title}
        message={message}
        closable={closable}
        duration={duration}
        actions={actions?.map((action) => ({
          ...action,
          onClick: () => {
            action.onClick();
            toast.dismiss(t);
          },
        }))}
        onClose={() => toast.dismiss(t)}
      />
    ),
    {
      duration: durationMs,
      position,
      unstyled: true,
    },
  );
};

export type { SnackbarVariant, SnackbarPosition, SnackbarActionConfig };
