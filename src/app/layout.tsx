import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { AppSidebar } from '@/components/app-sidebar'

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
                                <header className="flex h-16 shrink-0 items-center gap-2">
                                    <div className="flex items-center gap-2 px-4">
                                        <SidebarTrigger className="-ml-1" />
                                        <Separator
                                            orientation="vertical"
                                            className="mr-2 h-4"
                                        />
                                        <Breadcrumb>
                                            <BreadcrumbList>
                                                <BreadcrumbItem className="hidden md:block">
                                                    <BreadcrumbLink href="#">
                                                        Building Your
                                                        Application
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>
                                                <BreadcrumbSeparator className="hidden md:block" />
                                                <BreadcrumbItem>
                                                    <BreadcrumbPage>
                                                        Data Fetching
                                                    </BreadcrumbPage>
                                                </BreadcrumbItem>
                                            </BreadcrumbList>
                                        </Breadcrumb>
                                    </div>
                                </header>
                                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                        <div className="aspect-video rounded-xl bg-muted/50" />
                                        <div className="aspect-video rounded-xl bg-muted/50" />
                                        <div className="aspect-video rounded-xl bg-muted/50" />
                                    </div>
                                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                                </div>
                            </SidebarInset>
                        </SidebarProvider>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
