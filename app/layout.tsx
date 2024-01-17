import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country-list',
  description: 'Country list with nextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='bg-red-100 min-h-screen flex flex-col items-center'>
          <nav className='w-full bg-blue-300 h-16 flex items-center justify-center'>
            <section className='container flex items-center gap-3'>
              <Image 
                width={48}
                height={48}
                src="/world2.jpg" 
                alt="logo">                
              </Image>
              <h1 className='font-bold text-2xl'>Country List</h1>              
            </section>
          </nav>
          {children}
        </main>       
      </body>
    </html>
  )
}
