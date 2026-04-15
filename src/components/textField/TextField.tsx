import { type ComponentProps, forwardRef, type ReactNode } from 'react';
import { Input, type InputVariant } from '../input';
import { MdErrorOutline } from 'react-icons/md';

/** TextField variant inherits from Input variant */
export type TextFieldVariant = InputVariant;

/**
 * TextField component props extending standard HTML input attributes
 */
type TextFieldProps = Omit<ComponentProps<'input'>, 'size' | 'disabled'> & {
  /** Visual style variant of the text field @default 'default' */
  variant?: TextFieldVariant;
  /** Label text displayed above the input field @default 'ラベル' */
  label?: string;
  /** Error message to display below the input. When provided, the input will show error state */
  error?: string;
  /** Helper text displayed below the input to provide additional context or instructions */
  supportText?: string;
  /** Whether the field is required. Shows a required indicator next to the label @default false */
  required?: boolean;
  /** Icon or element displayed at the start (left) of the input field */
  startAdornment?: ReactNode;
  /** Icon or element displayed at the end (right) of the input field */
  endAdornment?: ReactNode;
  /** Custom text for the required indicator badge @default '必須' */
  requiredText?: string;
};

/**
 * A text field component that combines an input field with label, validation, and helper text functionality.
 * Built on top of the Input component with additional form-related features.
 *
 * @example
 * ```tsx
 * // Basic text field
 * <TextField label="Username" placeholder="Enter username" />
 *
 * // Required field with support text
 * <TextField
 *   label="Email"
 *   placeholder="Enter email"
 *   required
 *   supportText="We'll never share your email"
 * />
 *
 * // Error state
 * <TextField
 *   label="Password"
 *   error="Password must be at least 8 characters"
 *   value="123"
 * />
 * ```
 */

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      variant = 'default',
      className,
      label = 'ラベル',
      error,
      supportText,
      required = false,
      name,
      startAdornment,
      endAdornment,
      requiredText = '必須',
      ...rest
    },
    ref,
  ) => {
    const inputVariant = error ? 'error' : variant;

    return (
      <div className="flex flex-col w-full gap-2">
        {label && (
          <label
            className="text-text-primary flex items-center gap-1 typo-mobile-eg-label-m"
            htmlFor={name}
          >
            {label}
            {required && (
              <span className="text-text-emphasis bg-background-emphasis rounded-s p-1 typo-desktop-eg-label-s">
                {requiredText}
              </span>
            )}
          </label>
        )}
        <Input
          ref={ref}
          variant={inputVariant}
          className={className}
          name={name}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...rest}
        />
        {supportText && (
          <span className="text-text-secondary typo-mobile-eg-body-s">{supportText}</span>
        )}
        {error && (
          <div className="text-text-danger typo-mobile-eg-body-s flex items-center gap-1">
            <MdErrorOutline size={16} />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
