import { tv } from 'tailwind-variants';

export const radioGroupItemStyles = tv({
  base: `
    m-0.75 aspect-square size-4.5 shrink-0 rounded-full border
    transition-[color,box-shadow] outline-none
    focus:ring-1 focus:ring-border-focus focus:ring-offset-1
    disabled:cursor-not-allowed
    bg-surface-base
  `,
  variants: {
    variant: {
      default: `
        border-border-strong text-text-primary
        data-[state=checked]:bg-surface-primary
      `,
      error: `
        border-border-danger text-text-danger
        data-[state=checked]:bg-surface-danger
      `,
      disabled: `
        border-border-disable text-text-disable
        data-[state=checked]:bg-surface-disabled
      `,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
