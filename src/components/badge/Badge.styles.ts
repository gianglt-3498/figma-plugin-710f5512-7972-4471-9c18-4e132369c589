import { tv } from 'tailwind-variants';

export const badgeStyles = tv({
  base: `
    inline-flex items-center justify-center
    text-center leading-none
  `,
  variants: {
    variant: {
      count: `
        bg-surface-emphasis text-text-on-surface
        px-[8px] py-[6px]
        rounded-[100px]
        text-[12px] font-normal leading-[100%]
      `,
      dot: `
        bg-surface-emphasis
        w-[10px] h-[10px] min-w-[10px] min-h-[10px]
        rounded-full p-0
      `,
      label: `
        bg-surface-emphasis text-text-on-surface
        px-[8px] py-[6px]
        rounded-[100px]
        text-[12px] font-normal leading-[100%]
      `,
      error: `
        text-icon-danger
        [&_svg]:w-[24px] [&_svg]:h-[24px]
      `,
    },
  },
  defaultVariants: {
    variant: 'count',
  },
});
