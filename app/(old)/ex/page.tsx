import Link from 'next/link'

import { Announcement } from '@/components/announcement'
import { ExamplesNav } from '@/components/examples-nav'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { buttonVariants } from '@/components/ui/button'

export default function Page() {
  return (
    <PageHeader>
      <ExamplesNav />
      <Announcement />
      <PageHeaderHeading className='hidden md:block'>Check out some examples</PageHeaderHeading>
      <PageHeaderHeading className='md:hidden'>Examples</PageHeaderHeading>
      <PageHeaderDescription>
        Dashboard, cards, authentication. Some examples built using the components. Use this as a
        guide to build your own.
      </PageHeaderDescription>
      <PageActions>
        <Link href='/docs' className={buttonVariants()}>
          Get Started
        </Link>
        <Link href='/components' className={buttonVariants({ variant: 'outline' })}>
          Components
        </Link>
        <ThemeSwitcher />
      </PageActions>
    </PageHeader>
  )
}
