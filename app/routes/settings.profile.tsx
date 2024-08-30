import { createFileRoute } from '@tanstack/react-router';

// This can be a layout
export const Route = createFileRoute('/settings/profile/')({
  component: () => <div>Hello /settings/profile!</div>,
});
