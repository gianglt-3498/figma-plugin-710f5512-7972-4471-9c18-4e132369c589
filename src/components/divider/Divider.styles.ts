import { tv } from 'tailwind-variants';

export const dividerStyles = tv({
  base: `
    box-border border-none relative flex-shrink-0
    border border-solid border-border-weak
  `,
  variants: {
    orientation: {
      horizontal: `
        w-full h-0 my-[8px] mx-0
      `,
      vertical: `
        h-full w-[1px] mx-[8px] my-0
      `,
    },
    flexItem: {
      true: `
        self-stretch
      `,
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
