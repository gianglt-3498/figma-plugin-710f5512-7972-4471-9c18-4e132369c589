import { type ComponentProps, forwardRef, useState, useEffect, type ChangeEvent } from 'react';
import { Textarea, type TextareaVariant } from '../textarea';
import { MdErrorOutline } from 'react-icons/md';

/** TextareaField variant inherits from Textarea variant */
export type TextareaFieldVariant = TextareaVariant;

/**
 * TextareaField component props extending standard HTML textarea attributes
 */
type TextareaFieldProps = Omit<ComponentProps<'textarea'>, 'size' | 'disabled'> & {
  /** Visual style variant of the textarea field @default 'default' */
  variant?: TextareaFieldVariant;
  /** Label text displayed above the textarea field @default 'ラベル' */
  label?: string;
  /** Error message to display below the textarea. When provided, the textarea will show error state */
  error?: string;
  /** Helper text displayed below the textarea to provide additional context or instructions */
  supportText?: string;
  /** Whether the field is required. Shows a required indicator next to the label @default false */
  required?: boolean;
  /** Maximum character length for the textarea. Shows character counter when provided */
  maxLength?: number;
  /** Custom text for the required indicator badge @default '必須' */
  requiredText?: string;
};

/**
 * A textarea field component that combines a textarea with label, validation, character counting, and helper text functionality.
 * Built on top of the Textarea component with additional form-related features.
 *
 * @example
 * ```tsx
 * // Basic textarea field
 * <TextareaField label="Description" placeholder="Enter description" />
 *
 * // Required field with support text and character limit
 * <TextareaField
 *   label="Message"
 *   placeholder="Enter message"
 *   required
 *   maxLength={500}
 *   supportText="Please provide detailed information"
 * />
 *
 * // Error state
 * <TextareaField
 *   label="Comments"
 *   error="Comments are required"
 *   value=""
 * />
 * ```
 */

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      variant = 'default',
      className,
      label = 'ラベル',
      error,
      supportText,
      required = false,
      maxLength,
      name,
      value,
      defaultValue,
      onChange,
      requiredText = '必須',
      ...rest
    },
    ref,
  ) => {
    const [textLength, setTextLength] = useState(
      value?.toString().length || defaultValue?.toString().length || 0,
    );

    useEffect(() => {
      if (value != null) {
        setTextLength(value.toString().length);
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTextLength(e.target.value.length);
      onChange?.(e);
    };

    const textareaVariant = error ? 'error' : variant;

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
        <Textarea
          ref={ref}
          variant={textareaVariant}
          className={className}
          name={name}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleChange}
          {...rest}
        />
        {supportText && (
          <span className="text-text-secondary typo-mobile-eg-body-s">{supportText}</span>
        )}
        <div className="flex justify-between">
          {error && (
            <div className="text-text-danger typo-mobile-eg-body-s flex items-center gap-1">
              <MdErrorOutline size={16} />
              <span>{error}</span>
            </div>
          )}
          {maxLength && (
            <div
              className={`typo-mobile-eg-body-s ${error ? 'text-text-danger' : 'text-text-secondary'}`}
            >
              {textLength} / {maxLength}
            </div>
          )}
        </div>
      </div>
    );
  },
);

TextareaField.displayName = 'TextareaField';
