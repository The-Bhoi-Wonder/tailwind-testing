import SideNavigation from './SideNavigation'
import TopNavigation from './TopNavigation'
import TopNavigation2 from './TopNavigation2'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'the-bhoi-wonder',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-700 text-zinc-300">
        <div className='flex flex-row border-2 border-green-500 h-[calc(100dvh)]'> 
            <SideNavigation/>
            <div className='flex flex-col border-2 border-blue-600 w-full'>
              <TopNavigation2/>
              {children}
            </div>
            
        </div>
      </body>
    </html>
  )
}
