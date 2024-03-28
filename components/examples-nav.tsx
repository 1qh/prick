'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from 'utils'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const examples = [
  {
    name: 'Mail',
    href: '/ex/mail',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail'
  },
  {
    name: 'Dashboard',
    href: '/ex/dashboard',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard'
  },
  {
    name: 'Cards',
    href: '/ex/cards',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards'
  },
  {
    name: 'Tasks',
    href: '/ex/tasks',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks'
  },
  {
    name: 'Playground',
    href: '/ex/playground',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground'
  },
  {
    name: 'Forms',
    href: '/ex/forms',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms'
  },
  {
    name: 'Music',
    href: '/ex/music',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music'
  },
  {
    name: 'Authentication',
    href: '/ex/authentication',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/examples/authentication'
  },
  {
    name: 'Simple Table',
    href: '/ex/simple-table',
    code: ''
  }
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()

  return (
    <div className='relative'>
      <ScrollArea className='max-w-[600px] lg:max-w-none'>
        <div className={cn('mb-4 flex items-center', className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center transition-colors hover:text-primary',
                pathname?.startsWith(example.href) || (index === 0 && pathname === '/')
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground'
              )}>
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='invisible' />
      </ScrollArea>
    </div>
  )
}

interface ExampleCodeLinkProps {
  pathname: string | null
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find(example => pathname?.startsWith(example.href))

  if (!example?.code) {
    return null
  }

  return (
    <Link
      href={example?.code}
      target='_blank'
      rel='nofollow'
      className='absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex'>
      View code
      <ArrowRightIcon className='ml-1 size-4' />
    </Link>
  )
}
