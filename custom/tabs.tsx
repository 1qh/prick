'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from 'utils'

type Tab = {
  name: string
  content: React.ReactNode
}

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}: {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0])
  const [tabs, setTabs] = useState<Tab[]>(propTabs)

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setTabs(newTabs)
    setActive(newTabs[0])
  }

  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div
        className={cn(
          'no-visible-scrollbar relative mt-5 flex w-full max-w-full flex-row items-center justify-center overflow-auto [perspective:1000px] sm:overflow-visible',
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => {
              moveSelectedTabToTop(idx)
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn('relative rounded-full px-4 py-1', tabClassName)}
            style={{
              transformStyle: 'preserve-3d'
            }}>
            {active.name === tab.name && (
              <motion.div
                layoutId='clickedbutton'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 rounded-full bg-stone-200 dark:bg-stone-800',
                  activeTabClassName
                )}
              />
            )}
            <span className='relative block text-black dark:text-white'>{tab.name}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.name}
        hovering={hovering}
        className={cn('mt-12 drop-shadow-2xl', contentClassName)}
      />
    </>
  )
}

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}: {
  className?: string
  key?: any
  tabs: Tab[]
  active: Tab
  hovering?: boolean
}) => {
  const isActive = (tab: Tab) => {
    return tab.name === tabs[0].name
  }
  return (
    <div className='relative size-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.name}
          layoutId={tab.name}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0
          }}
          className={cn(
            'absolute left-0 top-0 size-full',
            { 'blur-[1px] brightness-90': !isActive(tab) },
            className
          )}>
          {tab.content}
        </motion.div>
      ))}
    </div>
  )
}
