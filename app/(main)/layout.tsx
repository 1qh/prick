import Script from 'next/script'

import { ThemeSwitcher } from '@/components/theme-switcher'

import { Nav } from './nav'
import { Setting } from './setting'
import Translate from './translate'
import User from './user'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row'>
      <Script src='/translate.js' strategy='beforeInteractive' />
      <Script
        src='//translate.google.com/translate_a/element.js?cb=TranslateInit'
        strategy='afterInteractive'
      />
      <div className='flex flex-col justify-between border-r py-2'>
        <div className='grid gap-2 px-2'>
          <Nav />
        </div>
        <div className='grid gap-2.5 px-2'>
          <Setting />
          <ThemeSwitcher />
          <User />
          <Translate />
        </div>
      </div>
      {children}
    </div>
  )
}
