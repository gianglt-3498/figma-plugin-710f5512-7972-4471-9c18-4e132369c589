import { cn } from '@/utils';
import { type ComponentProps, forwardRef, useMemo } from 'react';
import { buttonStyles } from './Button.styles';

/** Available button style variants */
export type ButtonVariant = 'primary' | 'secondary' | 'emphasis' | 'plain' | 'danger';

/** Available button sizes */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button component props extending standard HTML button attributes
 */
type ButtonProps = ComponentProps<'button'> & {
  /** Visual style variant of the button @default 'primary' */
  variant?: ButtonVariant;
  /** Size of the button affecting padding and font size @default 'small' */
  size?: ButtonSize;
};

/**
 * A flexible button component with multiple variants, sizes, and support for icons.
 * Built with accessibility and modern design principles in mind.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 *
 * // Button with icon
 * <Button variant="secondary" size="large">
 *   <MdAdd />
 *   Add Item
 * </Button>
 * ```
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'small', className, children, ...rest }, ref) => {
    const buttonClassName = useMemo(
      () =>
        cn(
          buttonStyles({
            variant,
            size,
          }),
          className,
        ),
      [variant, size, className],
    );

    return (
      <button ref={ref} className={buttonClassName} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
