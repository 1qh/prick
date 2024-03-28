import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from '@radix-ui/react-icons'
import { cn } from 'utils'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeaderProps } from '@/table/interfaces'

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='-ml-3 h-8 data-[state=open]:bg-accent'>
          <span>{title}</span>
          {column.getIsSorted() === 'desc' ? (
            <ArrowDownIcon className='ml-2 size-4' />
          ) : column.getIsSorted() === 'asc' ? (
            <ArrowUpIcon className='ml-2 size-4' />
          ) : (
            <CaretSortIcon className='ml-2 size-4' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem className='group' onClick={() => column.toggleSorting(false)}>
          <ArrowUpIcon className='mr-2 size-3.5 text-muted-foreground/70 transition-all duration-300 group-hover:scale-125' />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem className='group' onClick={() => column.toggleSorting(true)}>
          <ArrowDownIcon className='mr-2 size-3.5 text-muted-foreground/70 transition-all duration-300 group-hover:scale-125' />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='group' onClick={() => column.toggleVisibility(false)}>
          <EyeNoneIcon className='mr-2 size-3.5 text-muted-foreground/70 transition-all duration-300 group-hover:scale-125' />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
