import { tv } from 'tailwind-variants';

export const textareaStyles = tv({
  base: `
    w-full min-w-[320px] bg-surface-base rounded-s !text-text-primary typo-mobile-eg-body-m
    border
    focus:outline focus:outline-2 focus:outline-border-focus
    transition-colors duration-200
    placeholder:text-text-placeholder
    p-3 resize-vertical min-h-[100px]
  `,
  variants: {
    variant: {
      default: `
        border-border-strong
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
