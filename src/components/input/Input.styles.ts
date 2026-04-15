import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  base: `
    border border-border-strong bg-background-base rounded-s !text-text-primary typo-mobile-eg-body-l
    focus-within:outline focus-within:outline-2 focus-within:outline-border-focus
    transition-colors duration-200
    placeholder:text-text-placeholder
    h-[40px] [&_svg]:w-[24px] [&_svg]:h-[24px]
  `,
  variants: {
    variant: {
      default: `
        border-border-strong
        hover:border-border-strong
        focus-within:border-border-focus
      `,
      error: `
        border-border-danger
      `,
      disabled: `
        bg-surface-disabled text-text-disable cursor-not-allowed !text-text-disable border-border-disable
      `,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
