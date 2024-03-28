import Link from 'next/link'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Navbar } from '@/custom/navbar'

export default function Root({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='flex justify-between'>
        <Link href='/' className='m-3 font-bold'>
          Brick.AI
        </Link>
        <Navbar />
        <ThemeSwitcher className='m-3' />
      </div>
      {children}
    </>
  )
}
