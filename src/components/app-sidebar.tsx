'use client'

import * as React from 'react'
import {
    Box,
    ChartNoAxesColumn,
    CircleUserRound,
    LogOut,
    Package2,
    Settings,
} from 'lucide-react'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from './nav'

// This is sample data.
const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    practice: {
        title: 'Practice',
        items: [
            {
                name: 'Memo',
                url: '#',
                icon: Box,
            },
            {
                name: 'Your Stats',
                url: '#',
                icon: ChartNoAxesColumn,
            },
        ],
    },
    community: {
        title: 'Community',
        items: [
            {
                name: 'Discord',
                url: '#',
                icon: DiscordLogoIcon,
            },
        ],
    },
    account: {
        title: 'Account',
        items: [
            {
                name: 'Profile',
                url: '#',
                icon: CircleUserRound,
            },
            {
                name: 'Billing',
                url: '#',
                icon: Package2,
            },
            {
                name: 'Settings',
                url: '#',
                icon: Settings,
            },
            {
                name: 'Log out',
                url: '#',
                icon: LogOut,
            },
        ],
    },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="h-8 shrink-0 items-center rounded-md flex group-data-[collapsible=icon]:hidden">
                    b
                </div>
                <div className="h-8 shrink-0 items-center rounded-md hidden group-data-[collapsible=icon]:flex">
                    s
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain
                    title={data.practice.title}
                    items={data.practice.items}
                />
                <NavMain
                    title={data.community.title}
                    items={data.community.items}
                />
                <NavMain
                    title={data.account.title}
                    items={data.account.items}
                />
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroupLabel className="whitespace-nowrap w-full flex-row justify-center">
                    Jeremy Cameron - 2024
                </SidebarGroupLabel>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
