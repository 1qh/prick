import Image from 'next/image'
import Link from 'next/link'

import { CardBody, CardContainer, CardItem } from '@/custom/3d-card'
import { Boxes } from '@/custom/boxes'
import { BackgroundGradient } from '@/custom/glow'

export function Launch() {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900'>
      <div className='pointer-events-none absolute inset-0 z-20 size-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]' />
      <Boxes />
      <BackgroundGradient className='mx-20 rounded-3xl'>
        <CardContainer>
          <CardBody className='group/card relative size-auto rounded-xl border border-black/[0.1] bg-white p-9 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]'>
            <CardItem
              translateZ='60'
              className='text-2xl font-bold text-neutral-600 dark:text-white'>
              Try our new product
            </CardItem>
            <CardItem
              as='p'
              translateZ='90'
              className='mt-3 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'>
              With the power of AI, we can help you reach your goals
            </CardItem>
            <CardItem translateZ='120' className='my-6 w-full'>
              <Image
                src='https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5'
                height='1000'
                width='1000'
                className='h-80 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='mt-8 flex items-center justify-between'>
              <CardItem
                translateZ={50}
                as='button'
                className='rounded-xl px-4 py-2 font-normal dark:text-white'>
                <Link href='/dashboard'>Try now →</Link>
              </CardItem>
              <CardItem
                translateZ={50}
                as='button'
                className='rounded-xl bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black'>
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </BackgroundGradient>
    </div>
  )
}
