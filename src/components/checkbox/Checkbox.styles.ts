import { tv } from 'tailwind-variants';

export const checkboxStyles = tv({
  base: `
    m-0.75 border rounded-s transition-all outline-none size-m [&_svg]:w-3.5 [&_svg]:h-3.5
    flex items-center justify-center shrink-0
    cursor-pointer
    disabled:cursor-not-allowed disabled:opacity-50
    focus:ring-1 focus:ring-border-focus focus:ring-offset-1
    data-[state=checked]:text-icon-on-surface
    data-[state=indeterminate]:text-icon-on-surface
  `,
  variants: {
    variant: {
      default: `
        border-border-strong bg-surface-base
        data-[state=checked]:bg-surface-primary
        data-[state=indeterminate]:bg-surface-primary
      `,
      error: `
        border-border-danger bg-surface-base
        data-[state=checked]:bg-surface-danger
        data-[state=indeterminate]:bg-surface-danger
      `,
      disabled: `
        bg-surface-disabled border-border-disable
        data-[state=checked]:bg-surface-disabled
        data-[state=indeterminate]:bg-surface-disabled
      `,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
