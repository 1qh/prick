import { file } from 'bun'

import { db } from '@/server/db'
import { companies, employees } from '@/server/db/schema'

await db.insert(companies).values(await file('seed-data/company_db.json').json())
await db.insert(employees).values(await file('seed-data/employee_db.json').json())

process.exit(0)
