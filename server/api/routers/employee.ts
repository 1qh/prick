import { inArray } from 'drizzle-orm'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { employees } from '@/server/db/schema'

export const employeeRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(({ ctx, input }) =>
    ctx.db
      .select()
      .from(employees)
      .where(inArray(employees.id, input.split(',')))
  )
})
