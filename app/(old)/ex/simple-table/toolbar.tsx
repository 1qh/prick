'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableFacetedFilter } from '@/table/faceted-filter-hide-badge'
import { DataTableViewOptions } from '@/table/view-options'

export function DataTableToolbar<TData>({ table }: { table: Table<TData> }) {
  const isFiltered = table.getState().columnFilters.length > 0

  const uniqueStatus = Array.from(
    table.getColumn('status')?.getFacetedUniqueValues()?.entries() || []
  ).map(([key, value]) => key)

  return (
    <div className='mb-2 flex justify-between'>
      <div className='flex space-x-2'>
        <Input
          placeholder='Filter tasks...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('title')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <DataTableFacetedFilter
          column={table.getColumn('status')}
          title='Status'
          options={uniqueStatus}
        />
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'>
            Reset
            <Cross2Icon className='ml-2 size-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
