import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from 'radix-ui';
import { ScrollBarArea, Scrollbar } from './Scrollbar';

const meta = {
  title: 'Components/Scrollbar',
  component: Scrollbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable scrollbar component built on Radix UI ScrollArea. Supports vertical, horizontal, and bidirectional scrolling with multiple visibility modes. Also exposes low-level ScrollArea primitive for advanced composition.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Scrollbar visibility behavior (auto, always, scroll, hover)',
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
      table: {
        type: { summary: '"auto" | "always" | "scroll" | "hover"' },
        defaultValue: { summary: 'hover' },
      },
    },
    scrollHideDelay: {
      description: 'Delay in milliseconds before hiding scrollbars when type is "hover"',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' },
      },
    },
    showVertical: {
      description: 'Whether to show the vertical scrollbar when content overflows',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showHorizontal: {
      description: 'Whether to show the horizontal scrollbar when content overflows',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      description: 'Additional CSS classes to apply to the root element',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    viewportClassName: {
      description: 'Additional CSS classes to apply to the scroll viewport',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    scrollbarClassName: {
      description: 'Additional CSS classes to apply to the scrollbar tracks',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    thumbClassName: {
      description: 'Additional CSS classes to apply to the scrollbar thumbs',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Scrollbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const VerticalContent = () => (
  <div className="flex flex-col gap-3 p-4">
    {Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        className="rounded-s border border-border-basic bg-surface-base px-3 py-2 text-sm text-text-secondary"
      >
        Item {index + 1}
      </div>
    ))}
  </div>
);

const HorizontalContent = () => (
  <div className="flex gap-3 p-4">
    {Array.from({ length: 12 }, (_, index) => (
      <div
        key={index}
        className="min-w-[140px] rounded-s border border-border-basic bg-surface-base px-3 py-6 text-center text-sm text-text-secondary"
      >
        Card {index + 1}
      </div>
    ))}
  </div>
);

/**
 * Default vertical scrollbar with standard behavior.
 * The scrollbar appears when content overflows vertically.
 */
export const Default: Story = {
  render: () => (
    <div className="h-[280px] w-80 rounded-s border border-border-basic bg-surface-base">
      <Scrollbar showHorizontal={false}>
        <VerticalContent />
      </Scrollbar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Basic vertical scrollbar that appears when content overflows. Scrollbar uses the hover type by default, appearing when you interact with the scroll area.',
      },
    },
  },
};

/**
 * Horizontal scrollbar for content that overflows horizontally.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="h-40 w-[360px] rounded-s border border-border-basic bg-surface-base">
      <Scrollbar showVertical={false}>
        <HorizontalContent />
      </Scrollbar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal scrollbar for content that needs to scroll from left to right. Useful for card carousels, tables, or wide content.',
      },
    },
  },
};

/**
 * Bidirectional scrolling with both vertical and horizontal scrollbars.
 */
export const BothAxes: Story = {
  render: () => (
    <div className="h-60 w-[360px] rounded-s border border-border-basic bg-surface-base">
      <Scrollbar>
        <div className="min-w-[600px]">
          <VerticalContent />
        </div>
      </Scrollbar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Scrollbar supporting both vertical and horizontal scrolling. Both scrollbars appear when content overflows in their respective directions.',
      },
    },
  },
};

/**
 * Always show scrollbars, even when not scrolling.
 */
export const TypeAlways: Story = {
  render: () => (
    <div className="h-60 w-80 rounded-s border border-border-basic bg-surface-base">
      <Scrollbar type="always" showHorizontal={false}>
        <VerticalContent />
      </Scrollbar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Scrollbars are always visible regardless of scroll state. Useful when you want to make scrollable content obvious to users.',
      },
    },
  },
};

/**
 * Show scrollbars only when hovering over the scroll area.
 */
export const TypeHover: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-text-secondary">Hover over the content to see scrollbar</span>
      <div className="h-60 w-80 rounded-s border border-border-basic bg-surface-base">
        <Scrollbar type="hover" showHorizontal={false}>
          <VerticalContent />
        </Scrollbar>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Scrollbars appear only when hovering over the scroll area, providing a cleaner interface while still indicating scrollable content.',
      },
    },
  },
};

/**
 * Custom styling for scrollbar track and thumb.
 */
export const WithCustomStyling: Story = {
  render: () => (
    <div className="h-60 w-80 rounded-s border border-border-basic bg-surface-base">
      <Scrollbar
        showHorizontal={false}
        scrollbarClassName="px-1"
        thumbClassName="bg-border-strong hover:bg-text-disabled transition-colors rounded-full"
      >
        <VerticalContent />
      </Scrollbar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Customize the scrollbar appearance using scrollbarClassName for the track and thumbClassName for the thumb. This example shows a stronger color and rounded thumb.',
      },
    },
  },
};

/**
 * Using the low-level ScrollBar primitive for advanced composition.
 */
export const PrimitiveUsage: Story = {
  render: () => (
    <div className="h-60 w-80 rounded-s border border-border-basic bg-surface-base">
      <ScrollArea.Root className="relative size-full">
        <ScrollArea.Viewport className="size-full rounded-[inherit]">
          <VerticalContent />
        </ScrollArea.Viewport>
        <ScrollBarArea className="px-[3px]" thumbClassName="bg-border-strong rounded-full" />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the ScrollBar primitive directly when building custom scroll components. This allows full control over the scrollbar track and thumb styling while composing with Radix UI primitives.',
      },
    },
  },
};
