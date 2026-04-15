import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Size of the switch',
      table: {
        type: { summary: 'SwitchSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Callback when checked state changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

/**
 * Default medium size switch (uncontrolled)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

/**
 * Large size switch
 */
export const Large: Story = {
  args: {
    size: 'large',
  },
};

/**
 * Controlled switch example with state management
 */
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <Switch {...args} checked={checked} onCheckedChange={setChecked} />
        <p style={{ fontSize: '14px', color: '#666' }}>Switch is {checked ? 'ON' : 'OFF'}</p>
      </div>
    );
  },
  args: {
    size: 'medium',
  },
};

/**
 * Disabled switch in unchecked state
 */
export const DisabledUnchecked: Story = {
  args: {
    size: 'medium',
    disabled: true,
    checked: false,
  },
};

/**
 * Disabled switch in checked state
 */
export const DisabledChecked: Story = {
  args: {
    size: 'medium',
    disabled: true,
    checked: true,
  },
};

/**
 * All size and state combinations
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Medium Size */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Medium</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Inactive - Enabled:</span>
            <Switch size="medium" checked={false} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Inactive - Disabled:</span>
            <Switch size="medium" checked={false} disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Active - Enabled:</span>
            <Switch size="medium" checked={true} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Active - Disabled:</span>
            <Switch size="medium" checked={true} disabled />
          </div>
        </div>
      </div>

      {/* Large Size */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Large</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Inactive - Enabled:</span>
            <Switch size="large" checked={false} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Inactive - Disabled:</span>
            <Switch size="large" checked={false} disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Active - Enabled:</span>
            <Switch size="large" checked={true} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '140px', fontSize: '14px' }}>Active - Disabled:</span>
            <Switch size="large" checked={true} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Switch with label in a form-like layout
 */
export const WithLabel: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
        }}
      >
        <Switch {...args} checked={checked} onCheckedChange={setChecked} />
        <label style={{ fontSize: '14px', cursor: 'pointer' }}>Enable notifications</label>
      </div>
    );
  },
  args: {
    size: 'medium',
  },
};

/**
 * Multiple switches in a settings panel
 */
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      emailAlerts: false,
      darkMode: true,
      autoSave: false,
    });

    return (
      <div
        style={{
          width: '320px',
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#fafafa',
        }}
      >
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600 }}>Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px' }}>Notifications</span>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, notifications: checked }))
              }
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px' }}>Email Alerts</span>
            <Switch
              checked={settings.emailAlerts}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, emailAlerts: checked }))
              }
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px' }}>Dark Mode</span>
            <Switch
              size="large"
              checked={settings.darkMode}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, darkMode: checked }))}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px' }}>Auto Save</span>
            <Switch
              size="large"
              checked={settings.autoSave}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, autoSave: checked }))}
            />
          </div>
        </div>
      </div>
    );
  },
};
