import { tv } from 'tailwind-variants';

const HOVER_SHADOW = 'shadow-[0_1px_2px_0_rgba(0,0,0,0.20),_0_1px_4px_1px_rgba(0,0,0,0.15)]';

export const switchStyles = tv({
  slots: {
    root: `
      relative inline-flex shrink-0 cursor-pointer items-center
      rounded-full border-2 border-transparent
      transition-all duration-200
      focus-visible:outline-none
      disabled:cursor-not-allowed
      group
    `,
    thumb: `
      pointer-events-none block rounded-full bg-surface-base
      transition-all duration-200
    `,
  },
  variants: {
    size: {
      medium: {
        root: 'h-[24px] w-[40px]',
        thumb: 'h-[20px] w-[20px]',
      },
      large: {
        root: 'h-[32px] w-[52px]',
        thumb: 'h-[28px] w-[28px]',
      },
    },
    checked: {
      false: {
        root: 'bg-surface-secondary',
        thumb: 'translate-x-0',
      },
      true: {
        root: 'bg-surface-primary hover:bg-surface-primary-hover',
        thumb: '',
      },
    },
    disabled: {
      true: {
        root: 'bg-surface-disabled hover:bg-surface-disabled',
        thumb: 'bg-surface-disabled-strong hover:bg-surface-disabled-strong',
      },
    },
  },
  compoundVariants: [
    // Medium size - unchecked hover
    {
      size: 'medium',
      checked: false,
      disabled: false,
      class: {
        thumb: `group-hover:w-[24px] group-hover:${HOVER_SHADOW}`,
      },
    },
    // Large size - unchecked hover
    {
      size: 'large',
      checked: false,
      disabled: false,
      class: {
        thumb: `group-hover:w-[32px] group-hover:${HOVER_SHADOW}`,
      },
    },
    // Medium size - checked position + hover
    {
      size: 'medium',
      checked: true,
      disabled: false,
      class: {
        thumb: `translate-x-[16px] group-hover:w-[24px] group-hover:translate-x-[12px] group-hover:${HOVER_SHADOW}`,
      },
    },
    // Large size - checked position + hover
    {
      size: 'large',
      checked: true,
      disabled: false,
      class: {
        thumb: `translate-x-[20px] group-hover:w-[32px] group-hover:translate-x-[16px] group-hover:${HOVER_SHADOW}`,
      },
    },
    // Medium size - checked position disabled
    {
      size: 'medium',
      checked: true,
      disabled: true,
      class: {
        thumb: `translate-x-[16px]`,
      },
    },
    // Large size - checked position disabled
    {
      size: 'large',
      checked: true,
      disabled: true,
      class: {
        thumb: `translate-x-[20px]`,
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    checked: false,
    disabled: false,
  },
});
