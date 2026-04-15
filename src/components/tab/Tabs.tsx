import { forwardRef, useMemo, type ComponentProps, type ReactNode } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabsStyles } from './Tab.styles';
import { cn } from '@/utils';

/**
 * Tabs component props extending Radix UI Tabs Root
 */
type TabsProps = ComponentProps<typeof TabsPrimitive.Root> & {
  /** The value of the tab that should be active by default */
  defaultValue: string;
  /** Callback fired when the active tab changes */
  onValueChange?: (value: string) => void;
  /** Additional CSS classes to apply to the root element */
  className?: string;
  /** Tab list and content elements */
  children: ReactNode;
};

/**
 * A flexible tabs component for organizing content into separate views.
 * Built on Radix UI Tabs primitives with support for icons, badges, and disabled states.
 *
 * Follows design system guidelines:
 * - Tab height: 40px
 * - Active tab: bold text with 2px bottom border
 * - Hover: subtle background color
 * - Disabled: reduced opacity with disabled cursor
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1" onValueChange={(value) => console.log(value)}>
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2" badgeLabel="5">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content for tab 1</TabsContent>
 *   <TabsContent value="tab2">Content for tab 2</TabsContent>
 * </Tabs>
 * ```
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, ...props }, ref) => {
    const styles = useMemo(() => tabsStyles(), []);

    return (
      <TabsPrimitive.Root ref={ref} className={cn(styles.root(), className)} {...props}>
        {children}
      </TabsPrimitive.Root>
    );
  },
);

Tabs.displayName = 'Tabs';

// ============================================================================
// Tabs List Component
// ============================================================================

/**
 * TabsList component props extending Radix UI Tabs List
 */
type TabsListProps = ComponentProps<typeof TabsPrimitive.List> & {
  /** Additional CSS classes to apply to the list element */
  className?: string;
  /** Tab trigger elements */
  children: ReactNode;
};

/**
 * Container for tab triggers. Displays tabs in a horizontal row with bottom margin.
 * Should be placed as a direct child of Tabs component.
 *
 * @example
 * ```tsx
 * <TabsList>
 *   <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *   <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 * </TabsList>
 * ```
 */
export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const styles = useMemo(() => tabsStyles(), []);

    return (
      <TabsPrimitive.List ref={ref} className={cn(styles.list(), className)} {...props}>
        {children}
      </TabsPrimitive.List>
    );
  },
);

TabsList.displayName = 'TabsList';

// ============================================================================
// Tabs Trigger Component
// ============================================================================

/**
 * TabsTrigger component props extending Radix UI Tabs Trigger
 */
type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger> & {
  /** Additional CSS classes to apply to the trigger element */
  className?: string;
  /** Tab label text */
  children: ReactNode;
};

/**
 * Individual tab button that triggers content display when clicked.
 * Supports icons, badges, and disabled states.
 *
 * Visual states:
 * - Default: Light text with thin bottom border
 * - Hover: Subtle background color
 * - Active: Bold text with thick bottom border (2px)
 * - Disabled: Reduced opacity, no interaction
 *
 * @example
 * ```tsx
 * // Basic tab
 * <TabsTrigger value="overview">Overview</TabsTrigger>
 *
 * // Tab with badge
 * <TabsTrigger value="notifications" badgeLabel="12">
 *   Notifications
 * </TabsTrigger>
 *
 * // Tab with icon
 * <TabsTrigger value="settings" icon={<SettingsIcon />}>
 *   Settings
 * </TabsTrigger>
 *
 * // Disabled tab
 * <TabsTrigger value="locked" disabled>
 *   Locked Feature
 * </TabsTrigger>
 * ```
 */
export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, children, disabled, ...props }, ref) => {
    const styles = useMemo(() => tabsStyles(), []);

    const triggerContent = useMemo(() => {
      return <div className={cn(styles.triggerContent())}>{children}</div>;
    }, [children]);

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger(), className)}
        disabled={disabled}
        {...props}
      >
        {triggerContent}
      </TabsPrimitive.Trigger>
    );
  },
);

TabsTrigger.displayName = 'TabsTrigger';

// ============================================================================
// Tabs Content Component
// ============================================================================

/**
 * TabsContent component props extending Radix UI Tabs Content
 */
type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content> & {
  /** Additional CSS classes to apply to the content element */
  className?: string;
  /** Content to display when this tab is active */
  children: ReactNode;
};

/**
 * Content container for each tab. Only the content matching the active tab value is displayed.
 * Includes default padding that can be overridden with className.
 *
 * @example
 * ```tsx
 * <TabsContent value="tab1">
 *   <h3>Tab 1 Content</h3>
 *   <p>This content is only visible when tab1 is active.</p>
 * </TabsContent>
 * ```
 */
export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, children, ...props }, ref) => {
    const styles = useMemo(() => tabsStyles(), []);

    return (
      <TabsPrimitive.Content ref={ref} className={cn(styles.content(), className)} {...props}>
        {children}
      </TabsPrimitive.Content>
    );
  },
);

TabsContent.displayName = 'TabsContent';
