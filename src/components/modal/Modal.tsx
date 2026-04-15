import { cn } from '@/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import { MdClose } from 'react-icons/md';
import { modalStyles } from './Modal.styles';

// ============================================================================
// Types
// ============================================================================

/** Available modal sizes */
export type ModalSize = 'small' | 'medium' | 'large';

export type ModalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;
export type ModalTriggerProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>;
export type ModalPortalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
export type ModalOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export type ModalCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;
export type ModalTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type ModalDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

export type ModalContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  /** Size of the modal @default 'medium' */
  size?: ModalSize;
};

export type ModalHeaderProps = ComponentPropsWithoutRef<'div'> & {
  /** Whether to show the close button in the top-right corner @default true */
  showCloseButton?: boolean;
};
export type ModalBodyProps = ComponentPropsWithoutRef<'div'>;
export type ModalFooterProps = ComponentPropsWithoutRef<'div'>;

// ============================================================================
// Modal
// ============================================================================

/**
 * Modal root component. Manages the open/close state of the modal.
 * Must contain ModalTrigger and ModalContent as children.
 *
 * @example
 * ```tsx
 * <Modal>
 *   <ModalTrigger>Open Modal</ModalTrigger>
 *   <ModalContent>
 *     <ModalHeader>
 *       <ModalTitle>Title</ModalTitle>
 *     </ModalHeader>
 *     <ModalBody>
 *      <p>Modal content goes here</p>
 *    </ModalBody>
 *    <ModalFooter>
 *      <ModalClose asChild>
 *        <Button variant="secondary">Cancel</Button>
 *     </ModalClose>
 *    <Button variant="primary">Confirm</Button>
 *  </ModalFooter>
 *   </ModalContent>
 * </Modal>
 * ```
 *
 * @example
 * ```tsx
 * // Controlled mode
 * const [open, setOpen] = useState(false);
 * <Modal open={open} onOpenChange={setOpen}>
 *   <ModalTrigger>Controlled</ModalTrigger>
 *   <ModalContent>Content</ModalContent>
 * </Modal>
 * ```
 */
export const Modal = ({ ...props }: ModalProps) => {
  return <DialogPrimitive.Root data-slot="modal" {...props} />;
};

Modal.displayName = 'Modal';

// ============================================================================
// ModalTrigger
// ============================================================================

/**
 * Button that triggers the modal to open.
 * Typically wraps a Button component using asChild prop.
 *
 * @example
 * ```tsx
 * <ModalTrigger asChild>
 *   <Button>Open Modal</Button>
 * </ModalTrigger>
 * ```
 */
export const ModalTrigger = forwardRef<
  ComponentRef<typeof DialogPrimitive.Trigger>,
  ModalTriggerProps
>(({ ...props }, ref) => {
  return <DialogPrimitive.Trigger data-slot="modal-trigger" ref={ref} {...props} />;
});

ModalTrigger.displayName = 'ModalTrigger';

// ============================================================================
// ModalPortal
// ============================================================================

/**
 * Portal component that renders modal content in a different part of the DOM.
 * Usually not needed as it's used internally by ModalContent.
 *
 * @example
 * ```tsx
 * <ModalPortal>
 *   <ModalOverlay />
 *   <DialogPrimitive.Content>...</DialogPrimitive.Content>
 * </ModalPortal>
 * ```
 */
export const ModalPortal = ({ ...props }: ModalPortalProps) => {
  return <DialogPrimitive.Portal data-slot="modal-portal" {...props} />;
};

ModalPortal.displayName = 'ModalPortal';

// ============================================================================
// ModalClose
// ============================================================================

/**
 * Button that closes the modal.
 * Can be placed anywhere within the modal content.
 *
 * @example
 * ```tsx
 * <ModalClose asChild>
 *   <Button variant="secondary">Cancel</Button>
 * </ModalClose>
 * ```
 */
export const ModalClose = forwardRef<ComponentRef<typeof DialogPrimitive.Close>, ModalCloseProps>(
  ({ ...props }, ref) => {
    return <DialogPrimitive.Close data-slot="modal-close" ref={ref} {...props} />;
  },
);

ModalClose.displayName = 'ModalClose';

// ============================================================================
// ModalOverlay
// ============================================================================

/**
 * Semi-transparent overlay that appears behind the modal.
 * Automatically included in ModalContent.
 *
 * @example
 * ```tsx
 * <ModalOverlay className="custom-overlay" />
 * ```
 */
export const ModalOverlay = forwardRef<
  ComponentRef<typeof DialogPrimitive.Overlay>,
  ModalOverlayProps
>(({ className, ...props }, ref) => {
  const styles = modalStyles();
  return (
    <DialogPrimitive.Overlay
      data-slot="modal-overlay"
      ref={ref}
      className={cn(styles.overlay(), className)}
      {...props}
    />
  );
});

ModalOverlay.displayName = 'ModalOverlay';

// ============================================================================
// ModalContent
// ============================================================================

/**
 * Main container for modal content. Includes overlay and close button.
 * This is where you place your modal's header, body, and footer.
 *
 * @param showCloseButton - Whether to show the X close button (default: true)
 *
 * @example
 * ```tsx
 * <ModalContent>
 *   <ModalHeader>
 *     <ModalTitle>Modal Title</ModalTitle>
 *   </ModalHeader>
 *   <ModalBody>
 *     <p>Modal content goes here</p>
 *   </ModalBody>
 *   <ModalFooter>
 *     <Button>Confirm</Button>
 *   </ModalFooter>
 * </ModalContent>
 * ```
 *
 * @example
 * ```tsx
 * // Without close button
 * <ModalContent showCloseButton={false}>
 *   <ModalTitle>No close button</ModalTitle>
 * </ModalContent>
 * ```
 */
export const ModalContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, size = 'small', children, ...props }, ref) => {
  const styles = modalStyles({ size });

  return (
    <ModalPortal data-slot="modal-portal">
      <ModalOverlay />
      <DialogPrimitive.Content
        data-slot="modal-content"
        ref={ref}
        className={cn(styles.content(), className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </ModalPortal>
  );
});

ModalContent.displayName = 'ModalContent';

// ============================================================================
// ModalHeader
// ============================================================================

/**
 * Header section of the modal. Contains the title and optional description.
 * Use flex layout with custom icons as needed.
 *
 * @example
 * ```tsx
 * <ModalHeader>
 *   <ModalTitle>Modal Title</ModalTitle>
 *   <ModalDescription>Description text</ModalDescription>
 * </ModalHeader>
 * ```
 *
 * @example
 * ```tsx
 * // With custom icon (slot pattern)
 * <ModalHeader>
 *   <div className="flex items-start gap-3">
 *     <MdWarning className="w-6 h-6 text-icon-warning shrink-0 mt-0.5" />
 *     <div className="flex-1">
 *       <ModalTitle>Warning</ModalTitle>
 *       <ModalDescription>Please review</ModalDescription>
 *     </div>
 *   </div>
 * </ModalHeader>
 * ```
 */
export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const styles = modalStyles();
    return (
      <div data-slot="modal-header" ref={ref} className={cn(styles.header(), className)} {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="modal-close" className={styles.closeButton()}>
            <MdClose />
          </DialogPrimitive.Close>
        )}
      </div>
    );
  },
);

ModalHeader.displayName = 'ModalHeader';

// ============================================================================
// ModalTitle
// ============================================================================

/**
 * Title text for the modal. Should be placed inside ModalHeader.
 * Automatically linked for accessibility.
 *
 * @example
 * ```tsx
 * <ModalTitle>新規作成</ModalTitle>
 * ```
 */
export const ModalTitle = forwardRef<ComponentRef<typeof DialogPrimitive.Title>, ModalTitleProps>(
  ({ className, ...props }, ref) => {
    const styles = modalStyles();
    return (
      <DialogPrimitive.Title
        data-slot="modal-title"
        ref={ref}
        className={cn(styles.title(), className)}
        {...props}
      />
    );
  },
);

ModalTitle.displayName = 'ModalTitle';

// ============================================================================
// ModalBody
// ============================================================================

/**
 * Main content area of the modal. Place your form fields, text, or other content here.
 *
 * @example
 * ```tsx
 * <ModalBody>
 *   <TextField label="名前" placeholder="名前を入力" />
 *   <TextField label="メール" placeholder="メールを入力" />
 * </ModalBody>
 * ```
 */
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...props }, ref) => {
    const styles = modalStyles();
    return (
      <div data-slot="modal-body" ref={ref} className={cn(styles.body(), className)} {...props} />
    );
  },
);

ModalBody.displayName = 'ModalBody';

// ============================================================================
// ModalFooter
// ============================================================================

/**
 * Footer section of the modal, typically contains action buttons.
 * Buttons are right-aligned on desktop, stacked on mobile.
 *
 * @example
 * ```tsx
 * <ModalFooter>
 *   <Button variant="secondary" onClick={onCancel}>キャンセル</Button>
 *   <Button variant="primary" onClick={onConfirm}>確認</Button>
 * </ModalFooter>
 * ```
 */
export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => {
    const styles = modalStyles();
    return (
      <div
        data-slot="modal-footer"
        ref={ref}
        className={cn(styles.footer(), className)}
        {...props}
      />
    );
  },
);

ModalFooter.displayName = 'ModalFooter';
