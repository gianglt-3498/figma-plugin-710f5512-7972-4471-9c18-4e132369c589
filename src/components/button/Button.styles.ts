import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: `
    cursor-pointer inline-flex items-center justify-center gap-2
    focus:outline focus:outline-2 focus:outline-border-focus
  `,
  variants: {
    variant: {
      primary: `
        bg-surface-primary border-none text-text-on-surface
        hover:bg-surface-primary-hover
        active:bg-surface-primary-active
        disabled:bg-surface-disabled disabled:text-text-disable disabled:cursor-not-allowed
      `,
      secondary: `
        border border-border-strong bg-white text-text-primary
        hover:bg-surface-button-secondary-hover
        active:bg-white
        disabled:bg-surface-disabled disabled:text-text-disable disabled:cursor-not-allowed
      `,
      emphasis: `
        bg-surface-emphasis text-text-on-surface border-none
        hover:bg-surface-emphasis-hover
        active:bg-surface-emphasis-active
        disabled:bg-surface-disabled disabled:text-text-disable disabled:cursor-not-allowed
      `,
      plain: `
        border-none bg-transparent text-text-primary
        hover:bg-surface-button-secondary-hover
        active:bg-surface-button-secondary-hover
        disabled:text-text-disable disabled:cursor-not-allowed disabled:border-none
      `,
      danger: `
        border border-border-danger bg-surface-base text-text-danger
        hover:bg-background-danger
        active:bg-background-danger
        disabled:bg-surface-disabled disabled:text-text-disable disabled:cursor-not-allowed
      `,
    },
    size: {
      small: `
        p-[8px] rounded-s min-w-[40px] h-[32px] typo-mobile-eg-label-s
        [&_svg]:w-4 [&_svg]:h-4
      `,
      medium: `
        p-[12px] rounded-s min-w-[52px] h-[40px] typo-mobile-eg-label-m
        [&_svg]:w-5 [&_svg]:h-5
      `,
      large: `
        p-[16px] rounded-s min-w-[64px] h-[48px] typo-mobile-eg-label-l
        [&_svg]:w-6 [&_svg]:h-6
      `,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
});
