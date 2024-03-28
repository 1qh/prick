'use client'

import { Meteors } from '@/custom/meteors'
import { InfiniteMovingCards } from '@/custom/moving-cards'

export function Testimonials() {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
      <Meteors number={50} />
      <InfiniteMovingCards items={testimonials} direction='right' speed='normal' />
    </div>
  )
}

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    image: 'https://images.unsplash.com/photo-1536611908954-016795a9d9a1'
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
    image: 'https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    image: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647'
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
    image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a'
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
    image: 'https://images.unsplash.com/photo-1551292831-023188e78222'
  }
]
