'use client'
import { useState } from 'react'

import { Floating } from '@/custom/floating'
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/custom/nav'

export function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <Floating>
      <div className='inset-x-0 top-10 z-50 mx-auto max-w-max'>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item='Services'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/web-dev'>Web Development</HoveredLink>
              <HoveredLink href='/interface-design'>Interface Design</HoveredLink>
              <HoveredLink href='/seo'>Search Engine Optimization</HoveredLink>
              <HoveredLink href='/branding'>Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item='Products'>
            <div className='grid grid-cols-2 gap-10 p-4 text-sm'>
              <ProductItem
                title='Rogue'
                href='https://userogue.com'
                src='https://images.unsplash.com/photo-1585353227354-4fd707d647cb'
                description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
              />
              <ProductItem
                title='Algochurn'
                href='https://algochurn.com'
                src='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
                description='Prepare for tech interviews like never before.'
              />
              <ProductItem
                title='Tailwind Master Kit'
                href='https://tailwindmasterkit.com'
                src='https://images.unsplash.com/photo-1557053964-937650b63311'
                description='Production ready Tailwind css components for your next project'
              />
              <ProductItem
                title='Moonbeam'
                href='https://gomoonbeam.com'
                src='https://images.unsplash.com/photo-1569399078436-da10fbd60f12'
                description='Never write from scratch again. Go from idea to blog in minutes.'
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item='Pricing'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/hobby'>Hobby</HoveredLink>
              <HoveredLink href='/individual'>Individual</HoveredLink>
              <HoveredLink href='/team'>Team</HoveredLink>
              <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </Floating>
  )
}
