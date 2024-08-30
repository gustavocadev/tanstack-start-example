import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/home')({
  beforeLoad: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/signin' });
    }
  },
  component: () => <div>Hello /_auth/home! 🌱👍</div>,
});
