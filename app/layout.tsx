import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

export const metadata: Metadata = {
    title: 'Warm heart',
    description: 'Soft plaids for your comfort',
}

const inter = Inter({
    subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <main>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}
