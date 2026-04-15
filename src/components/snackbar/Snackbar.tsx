import { cn } from '@/utils';
import { type ComponentProps, forwardRef, type ReactNode } from 'react';
import { MdCheckCircleOutline, MdClose, MdErrorOutline, MdInfoOutline } from 'react-icons/md';
import { ProgressBar } from './ProgressBar';
import { SnackbarAction } from './SnackbarAction';
import { snackbarStyles } from './Snackbar.styles';

/** Available snackbar variants */
export type SnackbarVariant = 'info' | 'success' | 'error';

/** Available snackbar positions */
export type SnackbarPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

/** Snackbar action configuration */
export interface SnackbarActionConfig {
  /** Label text for the action button */
  label: string;
  /** Click handler for the action */
  onClick: () => void;
}

/**
 * Snackbar component props extending standard HTML div attributes
 */
export type SnackbarProps = Omit<ComponentProps<'div'>, 'title'> & {
  /** Visual style variant of the snackbar @default 'info' */
  variant?: SnackbarVariant;
  /** Title text displayed prominently */
  title: string;
  /** Optional message text displayed below title */
  message?: string;
  /** Show close button @default false */
  closable?: boolean;
  /** Auto-dismiss duration in milliseconds. Set to 0 or false to disable @default 4000 */
  duration?: number | false;
  /** Position of the snackbar on screen @default 'top-right' */
  position?: SnackbarPosition;
  /** Custom icon to override default variant icon */
  icon?: ReactNode;
  /** Action buttons configuration */
  actions?: SnackbarActionConfig[];
  /** Callback when snackbar is dismissed */
  onClose?: () => void;
};

// Default icons for each variant
const variantIcons = {
  info: <MdInfoOutline />,
  success: <MdCheckCircleOutline />,
  error: <MdErrorOutline />,
};

/**
 * A flexible snackbar component for displaying notifications with various states and actions.
 * Supports auto-dismiss, manual close, action buttons, and multiple positioning options.
 *
 * Features:
 * - Multiple variants (info, success, error)
 * - Auto-dismiss with visual progress indicator
 * - Optional close button
 * - Action buttons support
 * - Multiple positioning options
 * - Custom icons
 *
 * @example
 * ```tsx
 * // Basic info snackbar
 * <Snackbar
 *   variant="info"
 *   title="タイトル"
 *   message="メッセージ"
 * />
 *
 * // Success with action
 * <Snackbar
 *   variant="success"
 *   title="アカウント情報を更新しました"
 *   closable
 *   actions={[
 *     { label: 'ラベル', onClick: handleAction }
 *   ]}
 * />
 *
 * // Error without auto-dismiss
 * <Snackbar
 *   variant="error"
 *   title="メッセージの送信に失敗しました"
 *   duration={false}
 *   closable
 * />
 * ```
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      variant = 'info',
      title,
      message,
      closable = true,
      duration = 4000,
      position: _position = 'top-right',
      icon,
      actions,
      onClose,
      className,
      ...rest
    },
    ref,
  ) => {
    const styles = snackbarStyles({ variant });

    const displayIcon = icon ?? variantIcons[variant];
    const showProgress = duration !== false && duration > 0;
    const hasActions = actions && actions.length > 0;

    const handleClose = () => {
      onClose?.();
    };

    return (
      <div
        ref={ref}
        className={cn(styles.snackbar(), 'relative', className)}
        role="alert"
        {...rest}
      >
        {/* Icon */}
        <div className={styles.icon()}>{displayIcon}</div>

        {/* Text content */}
        <div className={styles.content()}>
          <div className={styles.title()}>{title}</div>
          {message && <div className={styles.message()}>{message}</div>}

          {/* Progress bar */}
          {showProgress && (
            <ProgressBar variant={variant} duration={duration} onComplete={handleClose} />
          )}

          {/* Action buttons */}
          {hasActions && (
            <div className={styles.actions()}>
              {actions!.map((action, index) => (
                <SnackbarAction key={index} onClick={() => action.onClick()}>
                  {action.label}
                </SnackbarAction>
              ))}
            </div>
          )}
        </div>

        {/* Close Button */}
        {closable && (
          <button
            type="button"
            className={styles.closeButton()}
            onClick={handleClose}
            aria-label="Close notification"
          >
            <MdClose size={20} />
          </button>
        )}
      </div>
    );
  },
);

Snackbar.displayName = 'Snackbar';
