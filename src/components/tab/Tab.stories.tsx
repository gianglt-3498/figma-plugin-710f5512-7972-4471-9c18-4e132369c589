import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Badge } from '../badge';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active by default',
      table: {
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      control: false,
      description: 'Callback fired when the active tab changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

/**
 * Basic tabs with simple text labels
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Tab 1 Content</h3>
          <p style={{ color: '#666' }}>This is the content for the first tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Tab 2 Content</h3>
          <p style={{ color: '#666' }}>This is the content for the second tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Tab 3 Content</h3>
          <p style={{ color: '#666' }}>This is the content for the third tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with badge indicators for notifications or counts
 */
export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="inbox">
      <TabsList>
        <TabsTrigger value="inbox">
          Inbox
          <Badge label="12" />
        </TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
        <TabsTrigger value="drafts">
          Drafts
          <Badge label="3" />
        </TabsTrigger>
        <TabsTrigger value="sent">Sent</TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Inbox (12 unread)</h3>
          <p style={{ color: '#666' }}>You have 12 unread messages in your inbox.</p>
        </div>
      </TabsContent>
      <TabsContent value="archived">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Archived Messages</h3>
          <p style={{ color: '#666' }}>View your archived conversations here.</p>
        </div>
      </TabsContent>
      <TabsContent value="drafts">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Draft Messages (3)</h3>
          <p style={{ color: '#666' }}>You have 3 draft messages waiting to be sent.</p>
        </div>
      </TabsContent>
      <TabsContent value="sent">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Sent Messages</h3>
          <p style={{ color: '#666' }}>View all messages you have sent.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with icon indicators for better visual recognition
 */
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">
          <span>🏠</span>
          Home
        </TabsTrigger>
        <TabsTrigger value="profile">
          <span>👤</span>
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <span>⚙️</span>
          Settings
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <span>🔔</span>
          Notifications
          <Badge label="5" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Home Dashboard</h3>
          <p style={{ color: '#666' }}>Welcome to your home dashboard.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>User Profile</h3>
          <p style={{ color: '#666' }}>Manage your profile information here.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Settings</h3>
          <p style={{ color: '#666' }}>Configure your application settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Notifications (5 new)</h3>
          <p style={{ color: '#666' }}>You have 5 new notifications to review.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with disabled state to prevent user interaction
 */
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="available">
      <TabsList>
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="coming-soon" disabled>
          Coming Soon
        </TabsTrigger>
        <TabsTrigger value="locked" disabled>
          Locked
        </TabsTrigger>
        <TabsTrigger value="beta">Beta</TabsTrigger>
      </TabsList>
      <TabsContent value="available">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Available Features</h3>
          <p style={{ color: '#666' }}>These features are currently available for use.</p>
        </div>
      </TabsContent>
      <TabsContent value="beta">
        <div style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Beta Features</h3>
          <p style={{ color: '#666' }}>Try out our experimental features in beta.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with onChange callback to track tab switching
 */
export const WithCallback: Story = {
  render: () => (
    <Tabs
      defaultValue="tab1"
      onValueChange={(value) => {
        console.log('Active tab changed to:', value);
        alert(`Switched to: ${value}`);
      }}
    >
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>
            Click on other tabs to trigger the onChange callback (check console and alert)
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>Tab 2 is now active!</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>Tab 3 is now active!</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * All tab variants and features combined for comprehensive demonstration
 */
export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '600px' }}>
      <div>
        <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>Basic Tabs</h4>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p style={{ color: '#666' }}>Basic tab content</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p style={{ color: '#666' }}>Tab 2 content</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p style={{ color: '#666' }}>Tab 3 content</p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Tabs with Badges
        </h4>
        <Tabs defaultValue="messages">
          <TabsList>
            <TabsTrigger value="messages">
              Messages
              <Badge label="99+" />
            </TabsTrigger>
            <TabsTrigger value="alerts">
              Alerts
              <Badge label="5" />
            </TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="messages">
            <p style={{ color: '#666' }}>99+ unread messages</p>
          </TabsContent>
          <TabsContent value="alerts">
            <p style={{ color: '#666' }}>5 new alerts</p>
          </TabsContent>
          <TabsContent value="updates">
            <p style={{ color: '#666' }}>No new updates</p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h4 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Tabs with Icons and Badges
        </h4>
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">
              <span>📊</span>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="tasks">
              <span>✓</span>
              Tasks
              <Badge label="12" />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <span>⚙️</span>
              Settings
            </TabsTrigger>
            <TabsTrigger value="locked" disabled>
              <span>🔒</span>
              Locked
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <p style={{ color: '#666' }}>Dashboard overview</p>
          </TabsContent>
          <TabsContent value="tasks">
            <p style={{ color: '#666' }}>12 pending tasks</p>
          </TabsContent>
          <TabsContent value="settings">
            <p style={{ color: '#666' }}>Settings panel</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

/**
 * Playground for testing different tab configurations
 */
export const Playground: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">
          <Badge label="5" />
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3">
          <span>⭐</span>
          Tab 3
        </TabsTrigger>
        <TabsTrigger value="tab4" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>Customize the tabs using Storybook controls</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>Tab with badge indicator</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px' }}>
          <p style={{ color: '#666' }}>Tab with icon</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
