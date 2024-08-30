import { createFileRoute } from '@tanstack/react-router';

// Not a layout
export const Route = createFileRoute('/settings/notifications/')({
  component: () => <div>Hello /settings/notifications!</div>,
});
