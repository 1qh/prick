import { promises as fs } from 'fs'
import { Metadata } from 'next'
import path from 'path'
import { z } from 'zod'

import { DataTable } from '@/table/main'

import { taskSchema } from './data/schema'
import { columns } from './table/columns'
import { DataTableToolbar } from './table/toolbar'
import { UserNav } from './user-nav'

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.'
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), 'app/(old)/ex/tasks/data/tasks.json'))

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <div className='flex h-full flex-1 flex-col space-y-3 p-3'>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
          <p className='text-muted-foreground'>Here&apos;s a list of your tasks for this month!</p>
        </div>
        <div className='flex items-center space-x-2'>
          <UserNav />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} Toolbar={DataTableToolbar} rowString='task' />
    </div>
  )
}
