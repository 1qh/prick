import { auth } from 'auth'
import { Inter_Tight } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { TRPCReactProvider } from '@/trpc/react'

import '@/globals.css'

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'Brick AI',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <TooltipProvider delayDuration={0}>
              <SessionProvider session={await auth()}>{children}</SessionProvider>
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
