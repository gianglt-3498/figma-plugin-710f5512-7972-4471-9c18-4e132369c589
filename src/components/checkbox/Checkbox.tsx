import { cn } from '@/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { type ComponentProps, forwardRef, type ComponentRef, useMemo } from 'react';
import { MdCheck, MdRemove } from 'react-icons/md';
import { checkboxStyles } from './Checkbox.styles';

/** Available checkbox visual state variants */
export type CheckboxVariant = 'default' | 'error' | 'disabled';

/**
 * Checkbox component props extending Radix UI Checkbox.Root
 */
type CheckboxProps = Omit<ComponentProps<typeof CheckboxPrimitive.Root>, 'disabled'> & {
  /** Visual state variant of the checkbox @default 'default' */
  variant?: CheckboxVariant;
};

/**
 * A flexible checkbox component with support for checked, unchecked, indeterminate states,
 * multiple sizes, and visual variants.
 *
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox />
 *
 * // Checkbox with label
 * <Checkbox id="terms">
 *   <label htmlFor="terms">Accept terms</label>
 * </Checkbox>
 *
 * // Error state
 * <Checkbox variant="error" />
 *
 * // Indeterminate state
 * <Checkbox checked="indeterminate" />
 * ```
 */

export const Checkbox = forwardRef<ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const checkboxClassName = useMemo(
      () =>
        cn(
          checkboxStyles({
            variant,
          }),
          className,
        ),
      [variant, className],
    );

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="checkbox"
        className={checkboxClassName}
        disabled={variant === 'disabled'}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-none"
        >
          {props.checked === 'indeterminate' ? <MdRemove /> : <MdCheck />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = 'Checkbox';
