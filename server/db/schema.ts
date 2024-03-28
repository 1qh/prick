// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm'
import { index, integer, pgTableCreator, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(name => `brick_${name}`)

export const posts = createTable(
  'post',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt')
  },
  example => ({
    nameIndex: index('name_idx').on(example.name)
  })
)

export const companies = createTable('company', {
  id: varchar('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  industry: varchar('industry', { length: 64 }),
  country: varchar('country', { length: 64 }),
  address: varchar('address', { length: 256 }),
  employeeCount: integer('employee_count'),
  description: varchar('description'),
  ava: varchar('ava', { length: 256 }),
  url: varchar('url', { length: 256 }),
  searchQueries: varchar('search_queries').array()
})

export const employees = createTable('employee', {
  id: varchar('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  title: varchar('title', { length: 256 }),
  ava: varchar('ava', { length: 256 })
})
