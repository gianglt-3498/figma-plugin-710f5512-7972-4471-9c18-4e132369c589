import { cn } from '@/utils';
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';
import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import { scrollbarStyles } from './Scrollbar.styles';

export type ScrollbarProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
  /** Additional classes for the scroll viewport */
  viewportClassName?: string;
  /** Additional classes for the scrollbars */
  scrollbarClassName?: string;
  /** Additional classes for the scrollbar thumb */
  thumbClassName?: string;
  /** Show vertical scrollbar when content overflows @default true */
  showVertical?: boolean;
  /** Show horizontal scrollbar when content overflows @default true */
  showHorizontal?: boolean;
};

export type ScrollBarAreaProps = ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> & {
  /** Additional classes for the scrollbar thumb */
  thumbClassName?: string;
};

/**
 * Scrollbar track + thumb primitive.
 * Use this when you need full control over individual scrollbar styling.
 */
export const ScrollBarArea = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarAreaProps
>(({ className, orientation = 'vertical', thumbClassName, ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none p-0.5 transition-colors select-none',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2.5 w-full flex-col border-t border-t-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn(
          'relative flex-1 rounded-full bg-border-basic',
          orientation === 'vertical' && 'w-100 hover:w-2',
          orientation === 'horizontal' && 'h-1 hover:h-2',
          'hover:bg-border-strong',
          thumbClassName,
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});

ScrollBarArea.displayName = 'ScrollBarArea';

/**
 * Scrollbar component with styled scrollbars.
 * Provides vertical and horizontal scrolling with customizable appearance.
 */
export const Scrollbar = forwardRef<ComponentRef<typeof ScrollAreaPrimitive.Root>, ScrollbarProps>(
  (
    {
      className,
      children,
      viewportClassName,
      scrollbarClassName,
      thumbClassName,
      showVertical = true,
      showHorizontal = true,
      ...props
    },
    ref,
  ) => {
    const styles = scrollbarStyles();

    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        data-slot="scroll-area"
        className={cn(styles.root(), className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          data-slot="scroll-area-viewport"
          className={cn(
            styles.viewport(),
            'focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1',
            viewportClassName,
          )}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {showVertical && (
          <ScrollBarArea
            className={cn(styles.scrollbar(), scrollbarClassName)}
            thumbClassName={cn(styles.thumb(), thumbClassName)}
          />
        )}
        {showHorizontal && (
          <ScrollBarArea
            orientation="horizontal"
            className={cn(styles.scrollbar(), scrollbarClassName)}
            thumbClassName={cn(styles.thumb(), thumbClassName)}
          />
        )}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  },
);

Scrollbar.displayName = 'Scrollbar';
