import { cn } from '@/utils';
import { type ComponentProps, forwardRef, useMemo } from 'react';
import { dividerStyles } from './Divider.styles';

/** Available divider orientations */
export type DividerOrientation = 'horizontal' | 'vertical';

/**
 * Divider component props extending standard HTML div attributes
 */
export type DividerProps = ComponentProps<'div'> & {
  /** Orientation of the divider @default 'horizontal' */
  orientation?: DividerOrientation;
  /** If true, the divider will stretch to fill its container when vertical (useful in flex layouts) @default false */
  flexItem?: boolean;
};

/**
 * A divider component for visually separating content.
 * Supports both horizontal and vertical orientations with flex layout support.
 *
 * @example
 * ```tsx
 * // Horizontal divider (default)
 * <Divider />
 *
 * // Vertical divider in flex layout
 * <div style={{ display: 'flex', height: '100px' }}>
 *   <span>Left</span>
 *   <Divider orientation="vertical" flexItem />
 *   <span>Right</span>
 * </div>
 * ```
 */

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', flexItem = false, className, ...rest }, ref) => {
    const dividerClassName = useMemo(
      () =>
        cn(
          dividerStyles({
            orientation,
            flexItem: orientation === 'vertical' && flexItem ? true : undefined,
          }),
          className,
        ),
      [orientation, flexItem, className],
    );

    return <div ref={ref} className={dividerClassName} role="separator" {...rest} />;
  },
);

Divider.displayName = 'Divider';
