'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from 'utils'
export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    quote: string
    name: string
    title: string
    image: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {items.map((item, idx) => (
          <li
            className='relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)'
            }}
            key={item.name}>
            <Image
              src={item.image}
              height='1000'
              width='1000'
              className='mb-5 h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
              alt='thumbnail'
            />
            <blockquote>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]'></div>
              <span className='relative z-20 text-sm font-normal leading-[1.6] text-stone-100'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-sm font-normal leading-[1.6] text-stone-400'>
                    {item.name}
                  </span>
                  <span className='text-sm font-normal leading-[1.6] text-stone-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
