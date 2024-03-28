import { inArray } from 'drizzle-orm'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { companies } from '@/server/db/schema'

export const companyRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(({ ctx, input }) =>
    ctx.db
      .select()
      .from(companies)
      .where(inArray(companies.id, input.split(',')))
  )
})
