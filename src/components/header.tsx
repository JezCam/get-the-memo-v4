'use client'

import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { titleCase } from '@/lib/utils'
import { ModeToggle } from './mode-toggle'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="flex h-fit shrink-0 items-center gap-2 justify-between px-4 pt-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        {pathname != '/' && (
                            <>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        {titleCase(pathname.slice(1))}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <ModeToggle />
        </header>
    )
}
