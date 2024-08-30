import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <h2>Layout _auth</h2>

      <Outlet />
    </>
  );
}
