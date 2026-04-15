import type { FC } from 'react';
import { Toaster } from 'sonner';

/**
 * Snackbar container component that manages the display of snackbars.
 * This component should be placed at the root level of your application.
 *
 * @example
 * ```tsx
 * // In your App.tsx or layout
 * function App() {
 *   return (
 *     <>
 *       <SnackbarContainer />
 *       <YourApp />
 *     </>
 *   );
 * }
 * ```
 */
export const SnackbarContainer: FC = () => {
  return (
    <Toaster
      position="top-right"
      expand={false}
      richColors={false}
      closeButton={false}
      toastOptions={{
        className: 'animate-in slide-in-from-top-2 fade-in duration-200',
      }}
    />
  );
};
