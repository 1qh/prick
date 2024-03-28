'use client'

import Image from 'next/image'
import { Company } from 'types'
import { cn } from 'utils'

import { Employees } from '@/app/(main)/employees'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Tabs } from '@/custom/tabs'

function Bento({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-4',
        className
      )}>
      {children}
    </div>
  )
}

function Info({
  className,
  id,
  title,
  description,
  ava
}: {
  className?: string
  id: string
  title: string
  description: string
  ava: string
}) {
  return (
    <Drawer key={title}>
      <DrawerTrigger asChild>
        <div
          className={cn(
            'group/bento row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition-all duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
            className
          )}>
          <div className='flex size-full min-h-24 flex-1 rounded-xl bg-gradient-to-br from-stone-200 to-stone-100 dark:from-stone-900 dark:to-stone-800'>
            <Image src={ava} width={300} height={300} alt={title} className='object-cover' />
          </div>
          <div className='transition-all duration-200 group-hover/bento:translate-x-2'>
            <p className='my-2 line-clamp-1 text-base font-bold text-stone-600 dark:text-stone-200'>
              {title}
            </p>
            <p className='line-clamp-2 text-sm font-normal text-stone-600 dark:text-stone-300'>
              {description}
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <ResizablePanelGroup direction='horizontal' className='min-h-2/3 w-full'>
          <ResizablePanel defaultSize={40}>
            <div className='flex h-full items-center justify-center p-6'>
              <Image src={ava} width={500} height={500} alt={title} className='object-cover' />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel defaultSize={40}>
                <div className='flex h-full flex-col p-6'>
                  <div className='my-2 line-clamp-1 text-xl font-bold text-stone-600 dark:text-stone-200'>
                    {title}
                  </div>
                  <div className='line-clamp-5 text-base font-normal text-stone-600 dark:text-stone-300'>
                    {description}
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={60}>
                <Employees id={id} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
function Industry({ title, companies }: { title: string; companies: Company[] }) {
  return (
    <div className='relative w-full rounded-2xl bg-stone-200 p-8 dark:bg-stone-900'>
      <p className='mb-5 text-2xl font-bold drop-shadow-xl'>{title}</p>
      <Bento className='mx-auto max-w-4xl'>
        {companies.map((item, i) => (
          <Info
            key={i}
            id={item.id}
            title={item.name}
            description={item.description}
            ava={item.ava}
          />
        ))}
      </Bento>
    </div>
  )
}
type Industries = {
  [key: string]: Company[]
}
function CompanyToIndustries(companies: Company[]): Industries {
  return companies.reduce((acc, company) => {
    if (!acc[company.industry]) {
      acc[company.industry] = []
    }
    acc[company.industry].push(company)
    return acc
  }, {} as Industries)
}
export function CompanyView(companies: Company[]) {
  const industries = CompanyToIndustries(companies)
  const tabs = Object.keys(industries).map(key => {
    return {
      name: key,
      content: <Industry title={key} companies={industries[key]} />
    }
  })
  return (
    <div className='relative mx-auto flex h-80 w-full max-w-5xl flex-col items-start justify-start  [perspective:1000px] md:h-[40rem]'>
      <Tabs tabs={tabs} />
    </div>
  )
}
