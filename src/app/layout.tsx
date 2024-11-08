import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import Header from '@/components/header'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Get The Memo',
    description: 'The #1 tool to learn your 3Blind letters',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon-light.png',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon-dark.png',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SidebarProvider>
                            <AppSidebar />
                            <SidebarInset>
                                <Header />
                                {children}
                            </SidebarInset>
                        </SidebarProvider>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
