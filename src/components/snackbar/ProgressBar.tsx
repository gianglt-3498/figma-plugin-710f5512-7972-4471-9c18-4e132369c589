import { type ComponentProps, forwardRef, useEffect, useRef } from 'react';
import { cn } from '@/utils';
import { progressBarStyles } from './Snackbar.styles';

/** Available progress bar variants */
export type ProgressBarVariant = 'info' | 'success' | 'warning' | 'error';

/**
 * ProgressBar component props extending standard HTML div attributes
 */
export type ProgressBarProps = Omit<ComponentProps<'div'>, 'children'> & {
  /** Visual style variant matching snackbar variant @default 'info' */
  variant?: ProgressBarVariant;
  /** Duration in milliseconds for the progress animation @default 4000 */
  duration?: number;
  /** Callback when progress completes */
  onComplete?: () => void;
};

/**
 * Progress bar component for Snackbar auto-dismiss indicator.
 * Displays a visual countdown for auto-dismissing snackbars.
 *
 * @example
 * ```tsx
 * <ProgressBar
 *   variant="success"
 *   duration={4000}
 *   onComplete={handleDismiss}
 * />
 * ```
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ variant = 'info', duration = 4000, onComplete, className, ...rest }, ref) => {
    const { bar } = progressBarStyles({ variant });
    const onCompleteRef = useRef(onComplete);
    const innerRef = useRef<HTMLDivElement>(null);

    // Keep latest callback
    useEffect(() => {
      onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      // Reset state
      el.style.transition = 'none';
      el.style.width = '100%';

      // Next tick to start transition
      requestAnimationFrame(() => {
        el.style.transition = `width ${duration}ms linear`;
        el.style.width = '0%';
      });

      const handleEnd = () => {
        onCompleteRef.current?.();
      };
      el.addEventListener('transitionend', handleEnd);

      return () => el.removeEventListener('transitionend', handleEnd);
    }, [duration]);

    const barClassName = cn(bar(), className);

    return (
      <div ref={ref} className="w-full h-1 rounded-full mb-1" {...rest}>
        <div ref={innerRef} className={barClassName} style={{ width: '100%' }} />
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
