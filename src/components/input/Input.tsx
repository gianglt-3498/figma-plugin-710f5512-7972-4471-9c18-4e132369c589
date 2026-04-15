import { cn } from '@/utils';
import { type ComponentProps, forwardRef, useMemo, type ReactNode } from 'react';
import { inputStyles } from './Input.styles';

/** Available input visual state variants */
export type InputVariant = 'default' | 'error' | 'disabled';

/**
 * Input component props extending standard HTML input attributes
 */
type InputProps = Omit<ComponentProps<'input'>, 'disabled'> & {
  /** Visual state variant of the input field @default 'default' */
  variant?: InputVariant;
  /** Icon or element displayed at the start (left) of the input field */
  startAdornment?: ReactNode;
  /** Icon or element displayed at the end (right) of the input field */
  endAdornment?: ReactNode;
};

/**
 * A flexible input field component with support for icons, different states, and customizable styling.
 * Used as the foundation for more complex form components like TextField.
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input placeholder="Enter text" />
 *
 * // Input with icons
 * <Input
 *   placeholder="Search..."
 *   startAdornment={<MdSearch />}
 *   endAdornment={<MdClose />}
 * />
 *
 * // Error state
 * <Input variant="error" placeholder="Fix this field" />
 * ```
 */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      className,
      startAdornment,
      endAdornment,
      placeholder = 'テキストを入力',
      ...rest
    },
    ref,
  ) => {
    const wrapperClassName = useMemo(
      () =>
        cn(
          'relative flex items-center w-full',
          inputStyles({
            variant,
          }),
        ),
      [variant],
    );

    const inputClassName = useMemo(
      () =>
        cn(
          'w-full bg-transparent outline-none pl-[12px]',
          startAdornment && 'pl-[44px]',
          endAdornment && 'pr-[44px]',
          variant === 'disabled' && 'cursor-not-allowed',
          className,
        ),
      [startAdornment, endAdornment, className],
    );

    return (
      <div className={wrapperClassName}>
        {startAdornment && (
          <div
            className={cn(
              'absolute left-3 flex items-center pointer-events-none',
              variant === 'disabled' && 'cursor-not-allowed',
            )}
          >
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          className={inputClassName}
          placeholder={placeholder}
          disabled={variant === 'disabled'}
          {...rest}
        />
        {endAdornment && (
          <div
            className={cn(
              'absolute right-3 flex items-center pointer-events-auto cursor-pointer',
              variant === 'disabled' && 'cursor-not-allowed',
            )}
          >
            {endAdornment}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
