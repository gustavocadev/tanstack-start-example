import { drizzle } from 'drizzle-orm/pglite';
import { PGlite } from '@electric-sql/pglite';

import * as schema from './schema';

const driver = new PGlite(process.env.DATABASE_URL as string);

export const db = drizzle(driver, { schema });
