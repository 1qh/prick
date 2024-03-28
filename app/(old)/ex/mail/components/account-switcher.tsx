'use client'

import { useState } from 'react'
import { cn } from 'utils'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface AccountSwitcherProps {
  isCollapsed: boolean
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
}

export function AccountSwitcher({ isCollapsed, accounts }: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0].email)
  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:size-4 [&_svg]:shrink-0',
          isCollapsed &&
            'flex size-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
        )}
        aria-label='Select account'>
        <SelectValue placeholder='Select an account'>
          {accounts.find(account => account.email === selectedAccount)?.icon}
          <span className={cn('ml-2', isCollapsed && 'hidden')}>
            {accounts.find(account => account.email === selectedAccount)?.label}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {accounts.map(account => (
          <SelectItem key={account.email} value={account.email}>
            <div className='flex items-center gap-3 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-foreground'>
              {account.icon}
              {account.email}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}