import { tv } from 'tailwind-variants';

export const snackbarStyles = tv({
  slots: {
    container: `
      fixed flex flex-col gap-2 z-[9999] pointer-events-none
      [&>*]:pointer-events-auto
    `,
    snackbar: `
      flex items-start gap-2 !p-m rounded-m bg-background-container-inverse
      shadow-[0_2px_4px_0_rgba(0,0,0,0.20),_1px_4px_10px_4px_rgba(0,0,0,0.15)]
      min-w-[40px] max-w-[600px]
      animate-in slide-in-from-top-2 fade-in duration-300
    `,
    icon: `
      flex-shrink-0 w-5 h-5
      [&_svg]:w-5 [&_svg]:h-5
    `,
    content: `
      flex-1 flex flex-col gap-2
    `,
    title: `
      typo-desktop-ja-label-m text-text-on-surface
    `,
    message: `
      typo-desktop-ja-body-m text-text-on-surface
    `,
    actions: `
      flex items-center gap-xxs
    `,
    closeButton: `
      flex-shrink-0 w-4 h-4 cursor-pointer text-icon-tertiary
      [&_svg]:w-4 [&_svg]:h-4
    `,
    progressContainer: `
      absolute bottom-0 left-0 right-0 h-1 bg-gray-20 rounded-b-m overflow-hidden
    `,
  },
  variants: {
    variant: {
      info: {
        icon: 'text-icon-info',
      },
      success: {
        icon: 'text-icon-success',
      },
      error: {
        icon: 'text-icon-danger',
      },
    },
    position: {
      'top-left': {
        container: 'top-4 left-4',
      },
      'top-right': {
        container: 'top-4 right-4',
      },
      'top-center': {
        container: 'top-4 left-1/2 -translate-x-1/2',
      },
      'bottom-left': {
        container: 'bottom-4 left-4',
      },
      'bottom-right': {
        container: 'bottom-4 right-4',
      },
      'bottom-center': {
        container: 'bottom-4 left-1/2 -translate-x-1/2',
      },
    },
  },
  defaultVariants: {
    variant: 'info',
    position: 'top-right',
  },
});

export const snackbarActionStyles = tv({
  base: `
    typo-mobile-ja-label-s px-2 py-2.5 rounded-m
    bg-surface-subtle-inverse
    cursor-pointer border-none
    text-text-on-surface
    hover:bg-surface-subtle-hover-inverse
    active:bg-surface-subtle-active-inverse
    transition-colors duration-150
  `,
});

export const progressBarStyles = tv({
  slots: {
    bar: `
      h-full transition-all ease-linear bg-surface-secondary rounded-full
    `,
  },
});
