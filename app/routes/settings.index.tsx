import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

// Not a layout
export const Route = createFileRoute('/settings/')({
  beforeLoad: async ({ context }) => {
    throw redirect({ to: '/signin' });
  },
  component: () => (
    <>
      <Outlet />
    </>
  ),
});
