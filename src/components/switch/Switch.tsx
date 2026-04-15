import { cn } from '@/utils';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { forwardRef, useMemo, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import { switchStyles } from './Switch.styles';

/** Available switch sizes */
export type SwitchSize = 'medium' | 'large';

/**
 * Switch component props extending Radix UI Switch Root
 */
export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
  /** Size of the switch @default 'medium' */
  size?: SwitchSize;
};

/**
 * A toggle switch component for binary on/off states.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch />
 *
 * // Controlled switch
 * const [checked, setChecked] = useState(false);
 * <Switch checked={checked} onCheckedChange={setChecked} />
 *
 * // Large switch
 * <Switch size="large" />
 *
 * // Disabled switch
 * <Switch disabled />
 * ```
 */

export const Switch = forwardRef<ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ size = 'medium', className, checked, disabled, ...rest }, ref) => {
    const styles = useMemo(
      () => switchStyles({ size, checked: !!checked, disabled }),
      [size, checked, disabled],
    );

    return (
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(styles.root(), className)}
        checked={checked}
        disabled={disabled}
        {...rest}
      >
        <SwitchPrimitive.Thumb className={styles.thumb()} />
      </SwitchPrimitive.Root>
    );
  },
);

Switch.displayName = 'Switch';
