import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { BackgroundGradientAnimation } from '@/custom/gradient-bg'
import { TypewriterEffectSmooth } from '@/custom/typewriter'

export function Slogan() {
  const words = [
    {
      text: 'Target. ',
      className:
        'text-transparent bg-clip-text bg-gradient-to-b from-green-100 via-green-300 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-green-100 dark:via-green-300'
    },
    {
      text: 'Reach. ',
      className:
        'text-transparent bg-clip-text bg-gradient-to-b from-blue-100 via-blue-300 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-blue-100 dark:via-blue-300'
    },
    {
      text: 'Thrive.',
      className:
        'text-transparent bg-clip-text bg-gradient-to-b from-red-100 via-red-300 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-red-100 dark:via-red-300'
    }
  ]
  return (
    <BackgroundGradientAnimation>
      <div className='pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-4 text-center '>
        <div>
          <p className='bg-gradient-to-b from-white bg-clip-text text-6xl font-bold text-transparent drop-shadow-xl md:text-6xl lg:text-[9rem]'>
            Brick.AI
          </p>
          <TypewriterEffectSmooth
            words={words}
            className='mx-96 mt-2'
            cursorClassName='bg-stone-200'
          />
        </div>
      </div>
      <Button
        variant='ghost'
        className='absolute inset-x-0 bottom-0 cursor-pointer text-white drop-shadow-md'>
        <div className='mb-3 flex flex-col items-center'>
          Learn more
          <ChevronDownIcon />
        </div>
      </Button>
    </BackgroundGradientAnimation>
  )
}
