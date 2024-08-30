import type { Config } from 'drizzle-kit';

export default {
  out: './drizzle',
  schema: './app/server/db/schema.ts',
  breakpoints: true,
  dialect: 'postgresql',
  driver: 'pglite',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
} satisfies Config;
