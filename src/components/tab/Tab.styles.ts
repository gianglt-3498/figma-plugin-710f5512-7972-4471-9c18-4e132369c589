import { tv } from 'tailwind-variants';

export const tabsStyles = tv({
  slots: {
    root: 'flex flex-col',
    list: 'flex mb-6 px-4 border-b-1 border-border-basic',
    trigger: `
      relative
      group
      flex items-center justify-center
      cursor-pointer bg-transparent
      pb-[2px] focus:pb-[4px]
      text-text-secondary text-base not-italic font-normal leading-none
      transition-colors
      enabled:hover:text-text-primary enabled:hover:typo-mobile-eg-label-l
      disabled:cursor-not-allowed
      disabled:text-text-disable
      disabled:border-border-disable
      data-[state=active]:typo-mobile-eg-label-l
      data-[state=active]:text-text-primary
      data-[state=active]:border-b-2
      data-[state=active]:border-border-strong
      before:content-[attr(data-text)]
      before:invisible
      before:block
      before:h-0
      before:overflow-hidden
      before:font-bold
      before:select-none
    `,
    triggerContent: `
      px-m pt-xs pb-[6px]
      flex items-center gap-2
      group-focus:outline-2 group-focus:outline-border-focus group-focus:rounded
    `,
    content: 'p-4 outline-none',
  },
});
