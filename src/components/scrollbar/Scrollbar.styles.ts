import { tv } from 'tailwind-variants';

export const scrollbarStyles = tv({
  slots: {
    root: 'relative overflow-hidden size-full',
    viewport: 'size-full rounded-[inherit]',
    scrollbar: `
      flex touch-none select-none

      data-[orientation=vertical]:w-2
      data-[orientation=vertical]:h-full

      data-[orientation=horizontal]:h-2
      data-[orientation=horizontal]:w-full
      data-[orientation=horizontal]:flex-col
    `,
    thumb: `
      relative flex-1 rounded-full
      bg-border-basic

      data-[orientation=vertical]:w-1
      data-[orientation=horizontal]:h-1

      data-[orientation=vertical]:hover:w-2
      data-[orientation=horizontal]:hover:h-2

      hover:bg-border-strong
    `,
    corner: 'bg-transparent',
  },
});
