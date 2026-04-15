import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils';
import { forwardRef, type ComponentProps, type ComponentRef } from 'react';

// ============================================================================
// Types
// ============================================================================

export type TooltipProviderProps = ComponentProps<typeof TooltipPrimitive.Provider>;
export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;
export type TooltipTriggerProps = ComponentProps<typeof TooltipPrimitive.Trigger>;
export type TooltipContentProps = ComponentProps<typeof TooltipPrimitive.Content>;

// ============================================================================
// TooltipProvider
// ============================================================================

/**
 * TooltipProvider manages the delay duration for all tooltips within its scope.
 * Wrap your app or specific sections with this provider to control tooltip timing.
 *
 * @param delayDuration - Delay in milliseconds before showing the tooltip (default: 500ms)
 * @param skipDelayDuration - Delay before hiding (default: 0ms for immediate hide)
 *
 * @example
 * ```tsx
 * <TooltipProvider delayDuration={300}>
 *   <YourApp />
 * </TooltipProvider>
 * ```
 */
export const TooltipProvider = ({
  delayDuration = 500,
  skipDelayDuration = 0,
  ...props
}: TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  );
};

TooltipProvider.displayName = 'TooltipProvider';

// ============================================================================
// Tooltip
// ============================================================================

/**
 * Tooltip root component. Manages the open/close state of the tooltip.
 * Must contain TooltipTrigger and TooltipContent as children.
 *
 * @example
 * ```tsx
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>Tooltip text</TooltipContent>
 * </Tooltip>
 * ```
 *
 * @example
 * ```tsx
 * // Controlled mode
 * const [open, setOpen] = useState(false);
 * <Tooltip open={open} onOpenChange={setOpen}>
 *   <TooltipTrigger>Controlled</TooltipTrigger>
 *   <TooltipContent>Content</TooltipContent>
 * </Tooltip>
 * ```
 */
export const Tooltip = ({ ...props }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

// ============================================================================
// TooltipTrigger
// ============================================================================

/**
 * TooltipTrigger is the element that triggers the tooltip to show.
 * Can be any interactive element (button, link, input, etc.)
 *
 * @param asChild - When true, merges props into the child element (default: true for accessibility)
 *
 * @example
 * ```tsx
 * <TooltipTrigger>
 *   <button>Hover me</button>
 * </TooltipTrigger>
 * ```
 *
 * @example
 * ```tsx
 * // For disabled elements, wrap in a span
 * <TooltipTrigger asChild>
 *   <span>
 *     <button disabled>Disabled</button>
 *   </span>
 * </TooltipTrigger>
 * ```
 */
export const TooltipTrigger = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ asChild = true, ...props }, ref) => {
  return <TooltipPrimitive.Trigger ref={ref} asChild={asChild} {...props} />;
});

TooltipTrigger.displayName = 'TooltipTrigger';

// ============================================================================
// TooltipContent
// ============================================================================

/**
 * TooltipContent displays the actual tooltip content.
 * Automatically positions itself relative to the trigger element.
 *
 * Features:
 * - Shows after 0.5s delay on hover/focus
 * - Hides immediately when trigger loses focus
 * - Supports keyboard navigation (ESC to close)
 * - Maximum width of 240px with automatic text wrapping
 * - Dark background (#333333) with white text
 * - 8px spacing from trigger element
 *
 * @param sideOffset - Distance in pixels from the trigger element (default: 8px)
 * @param side - Position relative to trigger: 'top' | 'right' | 'bottom' | 'left' (default: 'top')
 * @param className - Additional CSS classes to merge with default styles
 *
 * @example
 * ```tsx
 * <TooltipContent>Simple tooltip text</TooltipContent>
 * ```
 *
 * @example
 * ```tsx
 * <TooltipContent side="right">
 *   Right positioned tooltip
 * </TooltipContent>
 * ```
 */
export const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 8, children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          // Base styles matching design spec
          'z-9999 max-w-60 rounded px-2 py-1 typo-desktop-ja-body-s',
          'bg-background-container-inverse text-text-on-surface shadow-[1px_1px_3px_0_rgba(0,0,0,0.20),0_3px_8px_3px_rgba(0,0,0,0.15)]',
          // Smooth fade transition with ease
          'transition-all duration-200 ease-out',
          'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0',
          'data-[state=instant-open]:animate-in data-[state=instant-open]:fade-in-0',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow
          className="fill-background-container-inverse"
          width={12}
          height={5}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

TooltipContent.displayName = 'TooltipContent';
