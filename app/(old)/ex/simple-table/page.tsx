import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'

import { DataTable } from '@/table/main'

import { taskSchema } from './data/schema'
import { columns } from './columns'
import { DataTableToolbar } from './toolbar'

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'app/(old)/ex/simple-table/data/tasks.json')
  )
  const tasks = JSON.parse(data.toString())
  return z.array(taskSchema).parse(tasks)
}

export default async function Page() {
  const tasks = await getTasks()
  return (
    <div className='p-3'>
      <DataTable data={tasks} columns={columns} Toolbar={DataTableToolbar} rowString='task' />
    </div>
  )
}
