import { cn } from '@/utils';
import { type ComponentProps, forwardRef, useMemo, type ReactNode } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { badgeStyles } from './Badge.styles';

/** Available badge variants */
export type BadgeVariant = 'count' | 'dot' | 'label' | 'error';

/**
 * Badge component props extending standard HTML span attributes
 */
type BadgeProps = Omit<ComponentProps<'span'>, 'children'> & {
  /** Visual style variant of the badge @default 'count' */
  variant?: BadgeVariant;
  /** Label text for count and label variants */
  label?: string;
  /** Custom content to render inside badge (overrides label) */
  children?: ReactNode;
};

/**
 * A flexible badge component for displaying notifications, counts, status indicators, and labels.
 * Supports different visual variants with optimized rendering.
 *
 * @example
 * ```tsx
 * // Count badge
 * <Badge variant="count" label="99+" />
 *
 * // Dot indicator
 * <Badge variant="dot" />
 *
 * // Label badge
 * <Badge variant="label" label="New" />
 *
 * // Error indicator
 * <Badge variant="error" />
 *
 * // Custom content
 * <Badge variant="count">
 *   <CustomIcon />
 * </Badge>
 * ```
 */

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'count', label, className, children, ...rest }, ref) => {
    const badgeClassName = useMemo(
      () =>
        cn(
          badgeStyles({
            variant,
          }),
          className,
        ),
      [variant, className],
    );

    const content = useMemo(() => {
      if (children) return children;

      if (variant === 'dot') return null;

      if (variant === 'error') {
        return <MdErrorOutline size={16} />;
      }

      return label;
    }, [children, variant, label]);

    return (
      <span
        ref={ref}
        className={badgeClassName}
        role="status"
        aria-label={variant === 'error' ? 'Error badge' : label}
        {...rest}
      >
        {content}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
