import { tv } from 'tailwind-variants';

export const modalStyles = tv({
  slots: {
    overlay: `
      fixed inset-0 z-50 bg-background-scrim
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
      transition-opacity duration-200
    `,
    content: `
      fixed top-[50%] left-[50%] z-50
      translate-x-[-50%] translate-y-[-50%]
      w-full max-w-[calc(100%-2rem)]
      bg-surface-base
      rounded-[var(--radius-l)]
      shadow-[0_4px_6px_0_rgba(0,0,0,0.20),_2px_7px_16px_4px_rgba(0,0,0,0.15)]
      outline-none
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
      duration-200
      flex flex-col
      max-h-[80vh]
    `,
    closeButton: `
      inline-flex items-center justify-center
      w-[24px] h-[24px]
      text-icon-secondary
      transition-colors
      [&_svg]:w-[24px] [&_svg]:h-[24px]
      [&_svg]:pointer-events-none
      [&_svg]:shrink-0
      cursor-pointer
    `,
    header: `
      p-l
      flex-shrink-0
      flex items-center justify-between
    `,
    title: `
      typo-mobile-ja-label-l
      text-text-primary
    `,
    body: `
      flex-1
      overflow-y-auto
      px-l
    `,
    footer: `
      flex items-center justify-end gap-s
      p-l
      flex-shrink-0
    `,
  },
  variants: {
    size: {
      small: {
        content: 'sm:max-w-[384px]',
      },
      medium: {
        content: 'sm:max-w-[560px]',
      },
      large: {
        content: 'sm:max-w-[768px]',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});
