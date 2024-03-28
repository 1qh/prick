'use client'
import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { cn } from 'utils'

export const Floating = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  const { scrollY, scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)
  const [haveShadow, setHaveShadow] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    let direction = current - (scrollYProgress.getPrevious() as number)

    if (direction < 0) {
      setVisible(true)
      setHaveShadow(true)
    } else {
      setVisible(false)
    }
    if (scrollY.get() === 0) {
      setVisible(true)
      setHaveShadow(false)
    }
  })
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed inset-x-0 top-2 z-[5000] mx-auto flex  max-w-fit justify-center rounded-full bg-white transition-all duration-300 ease-in-out placeholder:items-center hover:shadow-lg dark:bg-black dark:shadow-stone-900',
          { 'drop-shadow-lg': haveShadow },
          className
        )}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
