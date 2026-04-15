import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MdPerson, MdMail, MdWarning, MdInfo, MdError, MdCheckCircle } from 'react-icons/md';
import { Button } from '../button';
import { TextField } from '../textField';
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'Modal open/close state (controlled mode)',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      description: 'Callback when open state changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    defaultOpen: {
      description: 'Initial open state (uncontrolled mode)',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic modal (Medium size)
 */
export const Default: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="min-h-[200px] bg-surface-secondary rounded-s flex items-center justify-center">
              <span className="text-text-secondary">Content Slot</span>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="primary">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic modal example. Medium size (500px) is the default.',
      },
    },
  },
};

/**
 * Small size modal (384px)
 */
export const Small: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Small Modal</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="min-h-[150px] bg-surface-secondary rounded-s flex items-center justify-center">
              <span className="text-text-secondary">Content Slot</span>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary" size="small">
                Cancel
              </Button>
            </ModalClose>
            <Button variant="primary" size="small">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size (384px) modal. Suitable for compact confirmation dialogs.',
      },
    },
  },
};

/**
 * Large size modal (768px)
 */
export const Large: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Large Modal</Button>
        </ModalTrigger>
        <ModalContent size="large">
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="min-h-[300px] bg-surface-secondary rounded-s flex items-center justify-center">
              <span className="text-text-secondary">Content Slot</span>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="primary">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Large size (768px) modal. Suitable for complex forms and detailed information display.',
      },
    },
  },
};

/**
 * Modal with form fields
 */
export const WithFormFields: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Add Member</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Add New Member</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <TextField label="Name" placeholder="John Doe" required startAdornment={<MdPerson />} />
            <TextField
              label="Email Address"
              type="email"
              placeholder="example@email.com"
              required
              startAdornment={<MdMail />}
            />
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="primary">Add Member</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with form input fields. Used for collecting user information.',
      },
    },
  },
};

/**
 * Long content requiring scroll
 */
export const LongContent: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">View Terms of Service</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Terms of Service</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4 text-text-secondary text-sm">
              <section>
                <h3 className="font-bold text-text-primary mb-2">Chapter 1: General Provisions</h3>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of the services
                  provided on this website (&quot;Service&quot;). By accessing or using the Service,
                  you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">■ Definition of Members</h4>
                <p>
                  A &quot;Member&quot; refers to an individual or entity who has registered an ID
                  and password through the dedicated member registration screen and has obtained
                  membership status to purchase our products or services.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">
                  ■ Definition of General Customers
                </h4>
                <p>
                  &quot;General Customers&quot; refers to users who have not registered as members.
                  While general customers can browse the website and product information in
                  &quot;viewing mode,&quot; membership registration is required to purchase our
                  products.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">■ Member Registration</h4>
                <p className="mb-2">
                  Prospective members must apply for membership by entering required information on
                  the designated member registration screen.
                </p>
                <p>
                  A membership agreement (&quot;Membership Agreement&quot;) is established between
                  the Company and the applicant when the Company accepts the registration
                  application.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">
                  ■ Product Pricing and Payment Terms
                </h4>
                <p className="mb-2">
                  Product prices are those listed on the product introduction pages within the
                  website (including consumption tax).
                </p>
                <p>
                  Some products on this website can be purchased directly from the top page or
                  product search page, while others require a formal quotation before purchase.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">
                  ■ Handling of Personal Information
                </h4>
                <p>
                  The Company will handle members&apos; personal information appropriately in
                  accordance with the Company&apos;s Privacy Policy.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">■ Prohibited Activities</h4>
                <p className="mb-2">Members shall not engage in any of the following activities:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Acts that violate laws, regulations, or public order and morals</li>
                  <li>Acts related to criminal activities</li>
                  <li>Unauthorized access to the Service or interference with its operation</li>
                  <li>Infringement of intellectual property rights, including copyrights</li>
                  <li>Transmission of harmful computer programs such as viruses</li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-text-primary mb-1">
                  ■ Service Modifications and Termination
                </h4>
                <p>
                  The Company may modify, suspend, or terminate all or part of the Service without
                  prior notice to Members. The Company shall not be liable for any damages arising
                  from such modifications, suspensions, or terminations.
                </p>
              </section>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary">I Agree</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'When content is long, the ModalBody automatically becomes scrollable. A scrollbar appears when content exceeds the max-height (80vh).',
      },
    },
  },
};

/**
 * Danger confirmation modal (destructive action)
 */
export const DangerConfirmation: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="danger">Delete Data</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader>
            <div className="flex items-center gap-3">
              <MdWarning className="w-6 h-6 text-icon-warning shrink-0 mt-0.5" />
              <div className="flex-1">
                <ModalTitle>Are you sure you want to delete?</ModalTitle>
              </div>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="danger">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal for confirming destructive actions like deletion. Warning icon and danger button emphasize the caution.',
      },
    },
  },
};

/**
 * Modal without close button
 */
export const WithoutCloseButton: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Confirmation Dialog</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader showCloseButton={false}>
            <ModalTitle>Do you want to proceed?</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">No</Button>
            </ModalClose>
            <Button variant="emphasis">Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modal with the close button (X) hidden. Use when requiring users to make an explicit choice via action buttons.',
      },
    },
  },
};

/**
 * Modal with description
 */
export const WithForm: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">View Details</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Account Settings</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p className="text-text-secondary text-sm mb-4">
              Make changes to your account settings. Click save when you&apos;re done.
            </p>
            <div className="space-y-4">
              <TextField label="Username" placeholder="Enter username" defaultValue="johndoe" />
              <TextField
                label="Email"
                type="email"
                placeholder="Enter email"
                defaultValue="john@example.com"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="primary">Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with basic form.',
      },
    },
  },
};

/**
 * Controlled modal with state
 */
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex gap-2">
        <Modal open={open} onOpenChange={setOpen}>
          <ModalTrigger asChild>
            <Button variant="primary">Open Controlled Modal</Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Controlled Modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p className="text-text-secondary mb-2">
                This modal&apos;s state is controlled externally.
              </p>
              <p className="text-text-secondary">
                The open state is controlled by React state. You can open/close it from outside the
                modal.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open from Outside
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled modal where the open state is managed externally. Useful for programmatic control.',
      },
    },
  },
};

/**
 * Info modal with icon
 */
export const InfoModal: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Show Info</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader>
            <div className="flex items-start gap-3">
              <MdInfo className="w-6 h-6 text-icon-info shrink-0 mt-0.5" />
              <div className="flex-1">
                <ModalTitle>Information</ModalTitle>
                <p className="text-text-secondary text-sm mt-1">
                  Your changes have been saved successfully.
                </p>
              </div>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="primary">Got it</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Info modal with icon. Uses slot pattern for custom icon placement.',
      },
    },
  },
};

/**
 * Success modal with icon
 */
export const SuccessModal: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="primary">Show Success</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader>
            <div className="flex items-start gap-3">
              <MdCheckCircle className="w-6 h-6 text-icon-success shrink-0 mt-0.5" />
              <div className="flex-1">
                <ModalTitle>Success</ModalTitle>
                <p className="text-text-secondary text-sm mt-1">
                  Your operation completed successfully.
                </p>
              </div>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="primary">Continue</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Success modal with check icon to indicate successful operation.',
      },
    },
  },
};

/**
 * Error modal with icon
 */
export const ErrorModal: Story = {
  render: () => {
    return (
      <Modal>
        <ModalTrigger asChild>
          <Button variant="danger">Show Error</Button>
        </ModalTrigger>
        <ModalContent size="small">
          <ModalHeader>
            <div className="flex items-start gap-3">
              <MdError className="w-6 h-6 text-icon-danger shrink-0 mt-0.5" />
              <div className="flex-1">
                <ModalTitle>Error</ModalTitle>
                <p className="text-text-secondary text-sm mt-1">
                  An error occurred while processing your request. Please try again.
                </p>
              </div>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ModalClose>
            <Button variant="danger">Retry</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Error modal with error icon. Used to display error messages.',
      },
    },
  },
};
